import { Hono } from "hono";
import { compress } from "hono/compress";
import { serveStatic } from "@hono/node-server/serve-static";
import { serve } from "@hono/node-server";
import { renderPage } from "vike/server";
const app = new Hono();

app.use(compress());

app.use(
  "/*",
  serveStatic({
    root: "dist/client/",
  })
);

app.all("*", async (c, next) => {
	const pageContextInit = {
		urlOriginal: c.req.url,
	};
	const pageContext = await renderPage(pageContextInit);
	const { httpResponse } = pageContext;
	if (!httpResponse) {
		return next();
	}
	const { body, statusCode, headers } = httpResponse;
	for (const [name, value] of headers) {
		c.header(name, value);
	}
	c.status(statusCode);

	return c.body(body);
});


const port = process.env.PORT ? Number.parseInt(process.env.PORT, 10) : 3001;



serve({
		fetch: app.fetch,
		port: port,
	});
import "@mantine/core/styles.css";
import { AppShell, MantineProvider } from "@mantine/core";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SocialNav from "@/components/SocialNav";
import WhatsappButton
 from "@/components/home/WhatsappButton";
export default function LayoutDefault({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<MantineProvider>
			<AppShell
				header={{
					height: 78,
				}}
			>
				<AppShell.Header>
					<Header />
				</AppShell.Header>
				<AppShell.Main>
					{children}
					<Footer />
					<SocialNav/>
					<WhatsappButton/>
				</AppShell.Main>
			</AppShell>
		</MantineProvider>
	);
}

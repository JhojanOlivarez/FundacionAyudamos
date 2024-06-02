import React from 'react';
import ReactDOM from 'react-dom/client';
import { createTheme, MantineProvider } from '@mantine/core';
import App from './App';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <React.StrictMode>
      <MantineProvider>
        <App />
      </MantineProvider>
    </React.StrictMode>
  );
} else {
  console.error('No se encontró el elemento raíz para renderizar la aplicación.');
}
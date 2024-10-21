import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen.ts';
import theme from './ui/theme.ts';
import { ChakraProvider } from '@chakra-ui/react'
import {ThemeProvider} from 'styled-components';
import { StyledComponentTheme } from './themes/StyledComponentsTheme.ts';
const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={StyledComponentTheme}>
      <ChakraProvider theme={theme}>
        <RouterProvider router={router} />
      </ChakraProvider>
    </ThemeProvider>
  </StrictMode>,
);

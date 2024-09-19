import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen.ts';

import { ChakraProvider,extendBaseTheme, theme as chakraTheme} from '@chakra-ui/react'


const theme = extendBaseTheme(
  {
    components: {
      Button: {

      },
      Box: {
        baseStyle: {
          padding: 4,
          margin: 4,
          borderRadius: 4,
          backgroundColor: 'tomato',
        },
      }
    }
  }
);
const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </StrictMode>,
);

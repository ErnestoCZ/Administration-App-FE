import { createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { MainLayout} from '../ui/MainLayout';
export const Route = createRootRoute({
  component: () => (
    <>
      <MainLayout/>
      <TanStackRouterDevtools />
    </>
  ),
});

import { createRouter as createTanStackRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import { DefaultCatchBoundary } from './components/DefaultCatchBoundary'
import { NotFound } from './components/NotFound'
import { QueryClient } from '@tanstack/react-query'
import { routerWithQueryClient } from '@tanstack/react-router-with-query'
import { ClerkProvider } from '@clerk/clerk-react'

export function createRouter() {
  const queryClient: QueryClient = new QueryClient()
  const router = routerWithQueryClient(
    createTanStackRouter({
      routeTree,
      defaultPreload: 'intent',
      defaultErrorComponent: DefaultCatchBoundary,
      defaultNotFoundComponent: () => <NotFound />,
      context: { queryClient },
      Wrap: ({ children }) => (
        <ClerkProvider publishableKey="pk_test_Y2xlcmsubWF4aW11bS5sb25naG9ybi0xMC5sY2wuZGV2JA">
            {children}
        </ClerkProvider>
      ),
    }),
    queryClient,
  )

  return router
}

declare module '@tanstack/react-router' {
  interface Register {
    router: ReturnType<typeof createRouter>
  }
}

import { createRouter } from '@tanstack/react-router'
import './app.css'

// Import the generated route tree
import { routeTree } from '../routeTree.gen'

// Create a new router instance
export const router = createRouter({ routeTree })

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

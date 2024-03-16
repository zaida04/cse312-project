import { Route as rootRoute } from "./__root";
import { createRoute } from '@tanstack/react-router';

export const Route = createRoute({
    getParentRoute: () => rootRoute,
    path: "/",
    component: Index,
})

function Index() {
    return <div className="p-2">Hello from Index!</div>
}
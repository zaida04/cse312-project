import { Route as rootRoute } from "./__root";
import { createRoute } from '@tanstack/react-router';

export const Route = createRoute({
    getParentRoute: () => rootRoute,
    path: "/about",
    component: About,
})

function About() {
    return <div className="p-2">Hello from About!</div>
}
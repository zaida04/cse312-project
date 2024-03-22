import { Route as rootRoute } from "./__root";
import { createRoute } from "@tanstack/react-router";

export const Route = createRoute({
    getParentRoute: () => rootRoute,
    path: "/",
    component: () => <p>TEST</p>,
})
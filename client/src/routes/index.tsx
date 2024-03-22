import { Route as rootRoute } from "./__root";
import { createRoute } from '@tanstack/react-router';
import '../app.css'

import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";

export const Route = createRoute({
    getParentRoute: () => rootRoute,
    path: "/",
    component: Index,
})

function Index() {
    return <div className="flex flex-row justify-center gap-20 w-full p-8">
        <LoginForm />
        <div className="border-r-2 border-gray-300/40 h-96"></div>
        <SignupForm />
    </div>
}
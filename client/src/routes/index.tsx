import { useEffect } from "react";
import { Route as rootRoute } from "./__root";
import { createRoute } from '@tanstack/react-router';
import { APIFetch } from "../util/fetcher";
import '../app.css'

import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";

export const Route = createRoute({
    getParentRoute: () => rootRoute,
    path: "/",
    component: Index,
})

function Index() {
    // example of data fetching
    useEffect(() => {
        async function getData() {
            const request = await APIFetch("GET", "/users/65f60caad6225df038c60445");
            console.log(request);
        }

        getData();
    }, []);

    return <div className="flex flex-row gap-2 w-full">
        <LoginForm />
        <SignupForm />
    </div>
}
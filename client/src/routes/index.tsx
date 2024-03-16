import { useEffect } from "react";
import { Route as rootRoute } from "./__root";
import { createRoute } from '@tanstack/react-router';
import { APIFetch } from "../util/fetcher";

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

    return <div className="p-2">Hello from Index!</div>
}
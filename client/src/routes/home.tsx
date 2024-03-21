import { useEffect } from "react";
import { Route as rootRoute } from "./__root";
import { createRoute } from '@tanstack/react-router';
import { APIFetch } from "../util/fetcher";
import '../app.css'
import PostForm from "../components/PostForm";


export const Route = createRoute({
    getParentRoute: () => rootRoute,
    path: "/home",
    component: HomePage,
})


function HomePage(){
    // example of data fetching
    useEffect(() => {
        async function getData() {
            const request = await APIFetch("GET", "/users/65f60caad6225df038c60445");
            console.log(request);
        }

        getData();
    }, []);

    return <PostForm></PostForm>
}

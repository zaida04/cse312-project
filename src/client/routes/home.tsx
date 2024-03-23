import Post from "../components/Post";
import PostForm from "../components/PostForm";
import { Route as rootRoute } from "./__root";
import { createRoute } from "@tanstack/react-router";

export const Route = createRoute({
    getParentRoute: () => rootRoute,
    path: "/home",
    component: HomePage,
})

function HomePage() {
    return <div className="flex flex-col items-center gap-8">
        <PostForm />

        {/* temp post. should fetch all posts */}
        <Post postUsername="smaranve" postLikes="5" postText="Idek what's goin on bruh. pls work!"></Post>
    </div>
}
import { useEffect } from "react";
import Post from "../components/Post";
import PostForm from "../components/PostForm";
import { Route as rootRoute } from "./__root";
import { createRoute } from "@tanstack/react-router";
import { APIFetch } from "../util/fetcher";
import { IUser } from "../../server/db/models/User";
import { useAtom } from "jotai";
import { postsAtom } from "../state";

export const Route = createRoute({
    getParentRoute: () => rootRoute,
    path: "/home",
    component: HomePage,
})

function HomePage() {
    const [posts, setPosts] = useAtom(postsAtom);
    useEffect(() => {
        async function fetchPosts() {
            const request = await APIFetch("GET", "/posts");

            if (!request.error) {
                setPosts(request.posts);
            }
        }

        fetchPosts();
    }, [])

    return <div className="flex flex-col items-center gap-4 mb-8">
        <PostForm />

        {/* temp post. should fetch all posts */}


        {posts && posts.map((post) =>
            <Post
                key={post._id}
                username={(post.author as unknown as IUser).username}
                title={post.title}
                body={post.body}
                likes={"5"}
            />
        )}
    </div>
}
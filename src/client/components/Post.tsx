import { HeartIcon } from "lucide-react";
import { useState } from 'react';
import { APIFetch } from "../util/fetcher";
import { postsAtom, useUser } from "../state"
import { useAtom } from "jotai";

export default function Post(props: {
    username: string,
    title: string,
    body: string,
    likes: string[],
    id: string
}) {
    const user = useUser();
    const [posts, setPosts] = useAtom(postsAtom);
    const isLiked = user && props.likes.includes(user._id);

    const clickHandler = async () => {
        const request = await APIFetch("POST",
            isLiked ?
                "/posts/" + props.id + "/unlike"
                : "/posts/" + props.id + "/like"
        );

        if (!request.error) {
            setPosts((prev) => {
                if (!prev) return prev;

                const currentPost = prev.find((post) => post._id === props.id);
                if (!currentPost) return prev;

                currentPost.likes = request.likes;
                return [...prev];
            })
        }
    }

    return <>
        <div className="card card-bordered card-compact w-[40rem] bg-base-100 border-slate-400 shadow-xl">
            {/* call on the API to get the pic. */}
            {/* <figure><img src={Musken} alt="musk" /></figure> */}

            {/* call on the API to fetch the post text and likes */}
            <div className="card-body">
                {/* User avatar with a placeholder icon */}
                <div className="avatar">
                    <div className="rounded-full w-8 h-8">
                        <img src="/pfp.png" alt="User Avatar" />
                    </div>

                    {/* username of the post */}
                    <h3 className="card-title pl-3">{props.username}</h3>
                </div>

                <h2>{props.title}</h2>
                {/* post text goes here */}
                <p>{props.body}</p>

                {/* like button */}
                <div className="card-actions justify-end space-x-2 mt-4">
                    {props.likes.length}
                    <div>
                        {isLiked ? (
                            <HeartIcon role="button" type="submit" onClick={clickHandler} className="swap-off fill-red-500 w-[24px] h-[24px]" />
                        ) : (
                            <HeartIcon role="button" type="submit" onClick={clickHandler} className="swap-on  fill-current w-[24px] h-[24px]" />
                        )}
                    </div>
                </div>
            </div>
        </div>
    </>
};
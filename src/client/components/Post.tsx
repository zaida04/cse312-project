import { HeartIcon } from "lucide-react";
import { useState } from 'react';
import { APIFetch } from "../util/fetcher";
import { useUser } from "../state"

export default function Post(props: {
    username: string,
    title: string,
    body: string,
    likes: string[],
    id: string
}) {
    const [liked, setLiked] = useState<boolean>(); 
    const user = useUser()
    console.log("useUser: ", user)

    const submitHandler = async () => {
        /* expect request.liked_list to be a list of people who like this post */
        var request
        if (!liked) {
            request = await APIFetch("POST", "/posts/" + props.id + "/like");
        } else {
            request = await APIFetch("POST", "/posts/" + props.id + "/unlike");
        }
        if (!request.error) {
            var liked_list = request.liked_list /* liked list: a list of strings. e.g.: ["username1", "username2"] */
            if (liked_list.contains(user)) {
                setLiked(true)
            } else {
                setLiked(false)
            }
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
                    {props.likes}
                    <div>
                        {liked ? (
                            <HeartIcon type="submit" onClick={submitHandler} className="swap-off fill-current w-[24px] h-[24px]" />
                        ) : (
                            <HeartIcon type="submit" onClick={submitHandler} className="swap-on fill-current w-[24px] h-[24px]" />
                        )}
                    </div>
                </div>
            </div>
        </div>
    </>
};
import { HeartIcon } from "lucide-react";

export default function Post(props: {
    postUsername: string,
    postText: string,
    postLikes: string
}) {

    return <>
        <div className="card card-bordered card-compact w-96 bg-base-100 border-slate-400 shadow-xl">
            {/* call on the API to get the pic. */}
            {/* <figure><img src={Musken} alt="musk" /></figure> */}

            {/* call on the API to fetch the post text and likes */}
            <div className="card-body">
                {/* User avatar with a placeholder icon */}
                <div className="avatar">
                    <div className="rounded-full w-10 h-10">
                        <img src="/pfp.png" alt="User Avatar" />
                    </div>

                    {/* username of the post */}
                    <h2 className="card-title pl-3">{props.postUsername}</h2>
                </div>

                {/* post text goes here */}
                <p>{props.postText}</p>

                {/* like button */}
                <div className="card-actions justify-end space-x-2 mt-4">
                    {props.postLikes}
                    <label className="swap">

                        {/* this hidden checkbox controls the state */}
                        <input type="checkbox" />

                        {/* like on icon */}
                        <HeartIcon className="swap-off fill-current w-[24px] h-[24px]" />

                        {/* like off icon */}
                        <HeartIcon className="swap-on fill-current w-[24px] h-[24px]" />
                    </label>
                </div>
            </div>
        </div>
    </>
};
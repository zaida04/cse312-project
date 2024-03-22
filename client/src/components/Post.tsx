// import {useState} from 'react';
import LikeOutline from '../assets/icons8-heart-96.png'
import LikeFilled from '../assets/icons8-heart-filled-96.png'
import DefaultAvatar from '../assets/icons8-avatar-50.png'
// import Musken from '../assets/musken.png'


export default function Post(props: {
    postUsername: string,
    postText: string,
    postLikes: string
}) {

    return  <>
        <div className="card card-bordered card-compact w-96 bg-base-100 border-slate-400 shadow-xl">
            {/* call on the API to get the pic. */}
            {/* <figure><img src={Musken} alt="musk" /></figure> */}

            {/* call on the API to fetch the post text and likes */}
            <div className="card-body">
                {/* User avatar with a placeholder icon */}
                <div className="avatar">
                    <div className="rounded-full w-10 h-10">
                        <img src={DefaultAvatar} alt="User Avatar" />
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
                        <img className="swap-off fill-current" width="24" height="24" src={LikeOutline} />

                        {/* like off icon */}
                        <img className="swap-on fill-current" width="24" height="24" src={LikeFilled}/>
                    </label>
                </div>
            </div>
        </div>
    </>
};
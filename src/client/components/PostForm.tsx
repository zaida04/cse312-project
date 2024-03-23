import { UploadIcon } from "lucide-react";
import { useState } from "react";

const PostForm: React.FC = () => {
    const [postText, setPostText] = useState("");


    const submitHandler = (event: any) => {
        event.preventDefault();

        // API call to add the post to datatbase goes here

        alert('A post was submitted: ' + postText);
    }


    return (
        <form className="p-4 rounded-lg w-[50rem] border-2" onSubmit={submitHandler}>
            <div className="flex items-center space-x-4">
                {/* User avatar with a placeholder icon */}
                <div className="avatar">
                    <div className="rounded-full w-10 h-10">
                        <img src="/pfp.png" alt="User Avatar" />
                    </div>
                </div>

                {/* post textarea */}
                <textarea
                    placeholder="Yeet something!"
                    value={postText}
                    rows={3}
                    className="textarea textarea-sm flex-1 border-black/30 border"
                    onChange={(e) => setPostText(e.target.value)}
                />
            </div>

            <div className="flex justify-end space-x-2 mt-4">
                {/* upload img functionality */}
                <button className="btn btn-square btn-sm btn-ghost">
                    <UploadIcon />
                </button>

                {/* the form submit button */}
                <button type="submit" className="btn btn-sm btn-primary">Post</button>
            </div>
        </form>
    );
};

export default PostForm;
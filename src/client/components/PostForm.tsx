import { UploadIcon } from "lucide-react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { APIFetch } from "../util/fetcher";
import Alert from "./Alert";

interface PostFormData {
    body: string;
    title: string;
}
const PostForm: React.FC = () => {
    const { register, reset, handleSubmit } = useForm<PostFormData>();
    const [error, setError] = useState<string | null>(null);

    const submitHandler: SubmitHandler<PostFormData> = async (data) => {
        const request = await APIFetch("POST", "/posts", data);
        if (!request.error) {
            reset();
        } else {
            setError(request.message);
        }
    }


    return (
        <>
            {error && <Alert message={error} />}
            <form className="p-4 rounded-lg w-[50rem] border-2" onSubmit={handleSubmit(submitHandler)}>
                <div className="flex items-center mb-4">
                    <input
                        className="input text-2xl border-black/30 border w-full"
                        placeholder="Your Post Title"
                        {...register("title")}
                    />
                </div>

                <div className="flex items-start space-x-4">
                    {/* User avatar with a placeholder icon */}
                    <div className="avatar">
                        <div className="rounded-full w-10 h-10">
                            <img src="/pfp.png" alt="User Avatar" />
                        </div>
                    </div>

                    {/* post textarea */}
                    <textarea
                        placeholder="Yeet something!"
                        rows={3}
                        className="textarea textarea-sm flex-1 border-black/30 border"
                        {...register("body")}
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
        </>
    );
};

export default PostForm;
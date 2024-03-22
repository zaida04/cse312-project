import { SubmitHandler, useForm } from "react-hook-form";
import InputWithLabel from "./InputWithLabel";
import { APIFetch } from "../util/fetcher";
import { useState } from "react";

interface SignUpFormInputs {
    email: string,
    username: string,
    password: string,
    confirm_password: string
}
export default function SignupForm() {
    const { register, handleSubmit, watch, formState } = useForm<SignUpFormInputs>();
    const [success, setSuccess] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const createAccount: SubmitHandler<SignUpFormInputs> = async (data) => {
        const request = await APIFetch("POST", "/users", data);
        if (!request.error) {
            setError(null);
            setSuccess(true);
        } else {
            setError(request.message);
        }
    };

    return <div className="card w-[30rem] shadow-md p-8 bordered">
        <h2 className="font-bold mb-2">Create an account</h2>
        {success && <div className="alert text-secondary-content alert-success">Account created successfully. You can now log in.</div>}
        {error && <div className="alert text-secondary-content alert-error">{error}</div>}

        <form onSubmit={handleSubmit(createAccount)}>
            <InputWithLabel
                label="Email"
                type="email"
                id="register_email"
                className="w-full"
                error={formState.errors.email?.message}
                formState={register("email", {
                    required: true,
                })}
            />
            <InputWithLabel
                label="Username"
                type="text"
                id="register_username"
                className="w-full"
                error={formState.errors.username?.message}
                formState={register("username", {
                    required: true,
                })}
            />
            <div className="flex flex-row gap-4">
                <InputWithLabel
                    label="Password"
                    type="password"
                    id="register_password"
                    error={formState.errors.password?.message}
                    formState={register("password", {
                        required: true,
                        minLength: {
                            value: 8,
                            message: "Password must be at least 8 characters"
                        }
                    })}
                />
                <InputWithLabel
                    label="Confirm password"
                    type="password"
                    id="register_confirm_password"
                    error={formState.errors.confirm_password?.message}
                    formState={register("confirm_password", {
                        required: true,
                        validate: (value) => value === watch("password") || "Passwords do not match"
                    })}
                />
            </div>
            <button className="btn btn-primary mt-4" type="submit">Create account</button>
        </form>
    </div>
}


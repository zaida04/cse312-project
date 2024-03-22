import { useForm } from 'react-hook-form';
import InputWithLabel from './InputWithLabel';
import { APIFetch } from '../util/fetcher'; // Assuming this is your API call function
import { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';

interface LoginFormInputs {
    username: string;
    password: string;
}

export default function LoginForm() {
    const { register, handleSubmit, formState } = useForm<LoginFormInputs>();
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const loginUser = async (data: LoginFormInputs) => {
        const request = await APIFetch('POST', '/users/login', data);
        if (!request.error) {
            console.log("Login successful");
            setError(null);
            navigate({ "to": "/home" as any });
        } else {
            setError(request.message);
        }
    };

    return (
        <div className="card w-[25rem] shadow-md p-8 bordered">
            <h2 className="font-bold mb-2">Login to an account</h2>
            {error && <div className="alert text-secondary-content alert-error">{error}</div>}

            <form onSubmit={handleSubmit(loginUser)}>
                <InputWithLabel
                    label="Username"
                    type="text"
                    id="login_username"
                    error={formState.errors.username?.message}
                    formState={register('username', { required: 'Username is required' })}
                />
                <InputWithLabel
                    label="Password"
                    type="password"
                    id="login_password"
                    error={formState.errors.password?.message}
                    formState={register('password', { required: 'Password is required' })}
                />

                <button className="btn btn-primary mt-4" type="submit">Login</button>
            </form>
        </div>
    );
}

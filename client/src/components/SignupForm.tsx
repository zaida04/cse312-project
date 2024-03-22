import InputWithLabel from "./InputWithLabel";

export default function SignupForm() {
    return <div className="card w-[30rem] shadow-md p-8 bordered">
        <h2 className="font-bold mb-2">Create an account</h2>

        <form>
            <div className="flex flex-row gap-4">
                <InputWithLabel label="Email" type="email" id="email" />
                <InputWithLabel label="Username" type="text" id="username" />
            </div>
            <div className="flex flex-row gap-4">
                <InputWithLabel label="Password" type="password" id="password" />
                <InputWithLabel label="Confirm password" type="password" id="confirm-password" />
            </div>
            <button className="btn btn-primary mt-4" type="submit">Create account</button>
        </form>
    </div>
}


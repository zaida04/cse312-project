import InputWithLabel from "./InputWithLabel";

export default function SignupForm() {
    return <div className="card w-2/5">
        <h2 className="font-bold mb-2">Create an account</h2>

        <form>
            <InputWithLabel label="Email" type="email" id="email" />
            <InputWithLabel label="Username" type="text" id="username" />
            <InputWithLabel label="Password" type="password" id="password" />
            <InputWithLabel label="Confirm password" type="password" id="confirm-password" />
            <button className="btn btn-primary mt-4" type="submit">Create account</button>
        </form>
    </div>
}


import InputWithLabel from "./InputWithLabel";

export default function LoginForm() {
    return <div className="card p-8 w-1/2">
        <h2 className="font-bold mb-2">Login to an account</h2>

        <form>
            <InputWithLabel label="Username" type="text" id="username" />
            <InputWithLabel label="Password" type="password" id="password" />
            <button className="btn btn-primary mt-4" type="submit">Login</button>
        </form>
    </div>
}


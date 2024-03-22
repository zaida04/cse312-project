import InputWithLabel from "./InputWithLabel";

export default function LoginForm() {
    return <div className="card w-[25rem] shadow-md p-8 bordered">
        <h2 className="font-bold mb-2">Login to an account</h2>

        <form>
            <InputWithLabel label="Username" type="text" id="username" />
            <InputWithLabel label="Password" type="password" id="password" />
            <button className="btn btn-primary mt-4" type="submit">Login</button>
        </form>
    </div>
}


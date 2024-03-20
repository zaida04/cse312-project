export default function SignupForm() {
    return <div className="card w-1/2">
        <h2 className="font-bold">Create an account</h2>

        <form>
            <InputWithLabel label="Email" type="email" id="email" />
            <InputWithLabel label="Username" type="text" id="username" />
            <InputWithLabel label="Password" type="password" id="password" />
            <InputWithLabel label="Confirm password" type="password" id="confirm-password" />
            <button className="btn btn-primary" type="submit">Create account</button>
        </form>
    </div>
}

function InputWithLabel(props: {
    label: string,
    type: string,
    id: string
}) {
    return <div className="form-group">
        <label className="label" htmlFor={props.id}>{props.label}</label>
        <input className="input border" type={props.type} id={props.id} />
    </div>
}
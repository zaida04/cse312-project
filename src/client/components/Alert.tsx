export default function Alert(props: { message: string }) {
    return <div role="alert" className="alert alert-error">
        <span>{props.message}</span>
    </div>
}
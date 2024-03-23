export default function Alert(props: { message: string }) {
    return <div role="alert" className="alert alert-error">
        <span className="text-secondary-content">{props.message}</span>
    </div>
}
export default function InputWithLabel(props: {
    label: string,
    type: string,
    id: string
}) {
    return <div className="form-group">
        <label className="label label-text" htmlFor={props.id}>{props.label}</label>
        <input className="input input-sm input-bordered" type={props.type} id={props.id} />
    </div>
}
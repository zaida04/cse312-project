export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string,
    type: string,
    id: string,
    error?: string,
    formState: any
}

export default function InputWithLabel(props: InputProps) {
    return <div className="form-group">
        <label className="label label-text" htmlFor={props.id}>{props.label}</label>
        <input
            {...props.formState}
            {...props}
            type={props.type}
            id={props.id}
            className={"input input-sm input-bordered " + props.className}
        />
        <p className="text-xs text-red-500">{props.error}</p>
    </div>
}
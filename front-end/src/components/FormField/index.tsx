import { Form, FormControlProps } from "react-bootstrap";

type Props = {
    controlId: string
    label: string
    error?: string
} & FormControlProps

export function FormField ({ controlId, label, error, ...inputProps }: Props) {
    return (
        <Form.Group className='mb-3' controlId={ controlId }>
            {label && <Form.Label className='mb-1'>{label}</Form.Label>}
            <Form.Control {...inputProps} />
            <Form.Control.Feedback type="invalid">
                {error}
            </Form.Control.Feedback>
        </Form.Group>
    )
}
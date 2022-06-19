import { useFormik } from "formik";
import { Form } from "react-bootstrap";
import { AutoCompleteField } from "../../components/AutoCompleteField";
import { CustomButton } from "../../components/CustomButton";
import { FormField } from "../../components/FormField";
import { Address } from "../../entities/Address";
import * as yup from 'yup';

type FormValues = {
    pickupAddress: Address | null
    deliveryAddress: Address | null
    comments: string
}

export function EstimateForm() {
    const formik = useFormik<FormValues>({
        initialValues: {
            pickupAddress: null,
            deliveryAddress: null,
            comments: ''
        },
        validationSchema: yup.object().shape({
          pickupAddress: yup.object()
          .typeError('Selecione um endereço na lista.'),
          deliveryAddress: yup.object()
          .typeError('Selecione um endereço na lista.'),
          comments: yup.string()
          .required('Informe as instruções')
        }),
        onSubmit: async (values) => {
            console.log(values)
        }
    })
    const getFieldProps = (fieldName: keyof FormValues) => {
        return {
          ...formik.getFieldProps(fieldName),
          controlId: `input-${fieldName}`,
          error: formik.errors[fieldName],
          isInvalid: formik.touched[fieldName] && !!formik.errors[fieldName],
          isValid: formik.touched[fieldName] && !formik.errors[fieldName],
        };
      };
  return (
    <Form onSubmit={formik.handleSubmit}>
    <AutoCompleteField
      {...getFieldProps('pickupAddress')}
      label="Endereço de retirada (A)" 
      placeholder="Informe o endereço completo."
      onChange={(address) => formik.setFieldValue('pickupAddress', address)}
    />
      <AutoCompleteField
      {...getFieldProps('deliveryAddress')}
      label="Endereço de entrega (B)" 
      placeholder="Informe o endereço completo." 
      onChange={(address) => formik.setFieldValue('deliveryAddress', address)}
    />
      <FormField
      {...getFieldProps('comments')}
      label="Instruções para o motoboy." 
      placeholder="Descreva o que o entregador deve fazer e detalhes importantes."
      as='textarea'
    />
    <div className="d-grid d-md-block">
        <CustomButton 
        type='submit' 
        loading={formik.isValidating || formik.isSubmitting}
        disabled={formik.isValidating || formik.isSubmitting}
        >Calcular preço</CustomButton>
    </div>
   </Form>
  );
}

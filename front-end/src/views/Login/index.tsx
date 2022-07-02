import { useFormik } from "formik"
import { Col, Container, Form, Row } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import { CustomButton } from "../../components/CustomButton"
import { FormField } from "../../components/FormField"
import { Layout } from "../../components/Layout"
import { PageTitle } from "../../components/PageTitle"
import * as yup from 'yup'
import { loginUser } from "../../services/loginUser"
import { AuthErrorCodes } from "firebase/auth"
import { FirebaseError } from "firebase/app"
import { toast } from "react-toastify"
import { updateUser } from "../../store/slices/userSlice"
import { useDispatch } from "react-redux"

type FormValues = {
    email: string
    password: string
}

export function LoginView () {
  const dispatch = useDispatch()
  const navigate = useNavigate()
    const formik =  useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: yup.object().shape({
          email:yup.string()
          .required('Preencha o email.')
          .email('Preencha um email válido.'),
        password: yup.string()
          .required('Prencha a senha.')
        }),
        onSubmit: async (values) => {
          try {
            const user = await loginUser(values)
            dispatch(updateUser(user))
            navigate('/novo-pedido')
          } catch (error) {
            const errorMsg = error instanceof FirebaseError && (error.code === AuthErrorCodes.INVALID_PASSWORD || error.code === AuthErrorCodes.USER_DELETED)
            ? 'Login ou senha inválidos.'
            : 'Falha ao fazer login. Tente novamente.'
            toast.error(errorMsg)
          }
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
        <Layout>
            <Container className="mt-5">
                <Row className="justify-content-center">
                    <Col lg={4}>
                      <PageTitle>Login</PageTitle>
                      <Form onSubmit={formik.handleSubmit}>
                          <FormField 
                            {...getFieldProps('email')}
                            label='E-mail'
                            type='email'
                            placeholder = 'Digite seu e-mail de acesso'
                          />
                          <FormField 
                            {...getFieldProps('password')}
                            label='Senha'
                            type='password'
                            placeholder = 'Digite sua senha de acesso'
                          />
                          <div className='d-grid mb-4'>
                            <CustomButton 
                              type="submit" 
                              loading={formik.isValidating || formik.isSubmitting}
                              disabled={formik.isValidating || formik.isSubmitting}
                            >
                              Entrar
                            </CustomButton>
                          </div>
                          <p className="text-center">Não possui conta?<br/><Link to='/cadastro'>Cadastrar</Link></p>
                      </Form>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}
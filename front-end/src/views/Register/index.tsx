import { useFormik } from "formik";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CustomButton } from "../../components/CustomButton";
import { FormField } from "../../components/FormField";
import { Layout } from "../../components/Layout";
import { PageTitle } from "../../components/PageTitle";

type FormValues = {
    name: string
    email: string
    phone: string
    password: string
    agree: boolean
}

export function RegisterView () {
  const formik = useFormik<FormValues>({
    initialValues: {
    name: '',
    email: '',
    phone: '',
    password: '',
    agree: false
    },
    onSubmit: () => {
      console.log('oi')
    }
  })
  const getFieldProps = (fieldName: keyof FormValues) => {
    return {
      ...formik.getFieldProps(fieldName),
      controlId: `input-${fieldName}`
    }
  }
  return (
    <Layout>
      <Container className="mt-5">
        <Row className='justify-content-center'>
          <Col lg={4} className="mt-5">
            <PageTitle>Nova Conta</PageTitle>
            <Form onSubmit={formik.handleSubmit}>
              <FormField
                label="Nome"
                placeholder="Digite seu nome."
                {...getFieldProps('name')}
              />
              <FormField
                type="email"
                label="E-mail"
                placeholder="Digite seu melhor e-mail."
                {...getFieldProps('email')}
              />
              <FormField
                label="Telefone"
                placeholder="(00) 00000-0000"
                {...getFieldProps('phone')}
                mask={[
                  { mask: "(00) 0000-0000" },
                  { mask: "(00) 00000-0000" },
              ]}
              onAccept={value => formik.setFieldValue
              ('phone', value)}
              />
              <FormField
                label="Senha"
                placeholder="Informe sua senha de acesso."
                {...getFieldProps('password')}
                type="password"
              />
              <Form.Group className="mb-3" controlId="input-agree">
                <Form.Check
                {...getFieldProps('agree')}
                  type="checkbox"
                  label={
                    <>
                      Eu li e aceito os{" "}
                      <a href="/termos-de-uso.pdf" target="_blank">
                        Termos de Uso
                      </a>
                    </>
                  }
                />
              </Form.Group>
              <div className="d-grid mb-4">
                <CustomButton type='submit'>Criar conta</CustomButton>
              </div>
              <p className="text-center">
                Já possui conta?
                <br /> <Link to="/login">Entrar</Link>
              </p>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

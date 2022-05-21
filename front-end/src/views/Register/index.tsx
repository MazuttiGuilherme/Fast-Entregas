import { Container } from "react-bootstrap";
import { FormField } from "../../components/FormField";
import { Layout } from "../../components/Layout";
import { PageTitle } from "../../components/PageTitle";

export function RegisterView() {
  return (
    <Layout>
      <Container>
        <PageTitle>Nova Conta</PageTitle>
        <FormField controlId='userName' label='Nome' placeholder="Digite o seu nome" error='Preencha o seu nome.' isInvalid />
      </Container>
    </Layout>
  );
}

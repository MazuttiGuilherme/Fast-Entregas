import { Container } from "react-bootstrap";
import { FormField } from "../../components/FormField";
import { Layout } from "../../components/Layout";
import { PageTitle } from "../../components/PageTitle";

export function RegisterView() {
  return (
    <Layout>
      <Container>
        <PageTitle>Nova Conta</PageTitle>
        <FormField
          controlId="input-name"
          label="Nome"
          placeholder="Preencha o seu nome"
          isInvalid
        />
        <FormField
          controlId="input-email"
          type="email"
          label="E-mail"
          placeholder="Ele será o usuário"
        />
        <FormField
          controlId="input-phone"
          type="phone"
          label="Telefone"
          placeholder="Digite o seu telefone"
          mask={[
            { mask: '(00) 0000-00000' }
        ]}
        />
      </Container>
    </Layout>
  );
}

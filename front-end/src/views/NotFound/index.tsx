import { Container } from "react-bootstrap";
import { Layout } from "../../components/Layout";
import { PageTitle } from "../../components/PageTitle";

export function NotFoundView() {
  return (
    <Layout>
      <Container className="text-center">
        <PageTitle>Página não encontrada</PageTitle>
        <p>
          A página que você está tentando acessar naõ foi encontrada ou foi
          movida.
        </p>
        <p>Utilize o menu superior para encontrar o que deseja.</p>
      </Container>
    </Layout>
  );
}

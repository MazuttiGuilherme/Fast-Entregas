import { Col, Container, Row } from "react-bootstrap";
import { CustomButton } from "../../components/CustomButton";
import { Layout } from "../../components/Layout";
import { PageTitle } from "../../components/PageTitle";

export function NewOrderSuccessView() {
  return (
    <Layout>
      <Container className="text-center">
        <Row className="justify-content-center">
          <Col md={8} lg={6} xl={5}>
            <PageTitle>Pedido recebido com sucesso!</PageTitle>
            <p>
              Entraremos em contato pelo seu telefone e pelo e-mail com os
              detalhes do motoboy que irá realizar sua entrega.
            </p>
            <CustomButton variant="success" size="lg" to="/novo-pedido">
              Fazer outro pedido
            </CustomButton>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

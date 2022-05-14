import { Button, Container } from "react-bootstrap";
import { toast } from "react-toastify";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";

export function HomeView () {
    return (
    <Container>
        <Title>Fox Entregas</Title>
      <Button onClick={() => toast.success('Oi')}>Teste</Button>
      <FontAwesomeIcon icon={faFacebookSquare}/>
    </Container>
    )
}

const Title = styled.p`
    font-size: 3rem;
`
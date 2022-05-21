import styled from "styled-components";
import { Footer } from "./Footer";
import {Header} from "./Header";

type Props = {
  children: React.ReactNode;
  startTransparent?: boolean
};

export const Layout: React.FC<Props> = ({ children, startTransparent }) => {
  return (
    <>
      <Header startTransparent={startTransparent} />
      <MainStyled startTransparent={startTransparent}>
        {children}
      </MainStyled>
      <Footer />
    </>
  );
};

//Cria tipo a partir de otro selecionando propriedades
//typeMainProps - Pick <Props, 'startTransparent'>

const MainStyled = styled.main<Props>`
  ${props => !props.startTransparent && `
    padding-top: 77px;
    @media (min-width: 992px) {
      padding-top: 96px;
    }
  `}
`

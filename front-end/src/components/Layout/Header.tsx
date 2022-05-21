import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo-fox-entregas.svg';
import LogoWhite from '../../assets/img/logo-fox-entregas-white.svg'
import { CustomButton } from "../CustomButton";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

type Props = {
  startTransparent?: boolean
}

export function Header ({ startTransparent = false }: Props) {
   const [isTransparent, setIsTransparent] = useState(startTransparent)
   useEffect(() => {
     const scrollChange = () => {
      const isLowScroll = window.scrollY < 100
       if (startTransparent && isLowScroll !== isTransparent) {
        setIsTransparent(isLowScroll)
      } 
    }
     window.addEventListener('scroll', scrollChange)
     return () => {
       window.removeEventListener('scroll', scrollChange)
     }
   }, [isTransparent, startTransparent])
  return (
    <NavbarStyled fixed='top' expand="lg" bg={isTransparent ? undefined : 'white'}>
      <Container>
        <Navbar.Brand to='/' as={Link}>
            <ImageStyled src={isTransparent ? LogoWhite : Logo} alt="Fox Entregas" width={194} height={51} />
        </Navbar.Brand>
        <NavbarToggleStyled aria-controls="basic-navbar-nav">
            <FontAwesomeIcon icon={faBars} className={isTransparent ? 'text-white' : 'text-dark'} size='lg' />
        </NavbarToggleStyled>
        <NavbarCollapseStyled id="basic-navbar-nav" className="justify-content-center text-center">
          <Nav className="ms-auto">
            <NavLinkStyled forwardedAs={Link} to='/'>Início</NavLinkStyled>
            <CustomButton className="mt-2 mt-lg-0 ms-lg-4">Criar conta</CustomButton>
            <CustomButton className="mt-2 mt-lg-0 ms-lg-4">Fazer login</CustomButton>    
          </Nav>
          </NavbarCollapseStyled>
      </Container>
    </NavbarStyled>
  );
}

const NavbarStyled = styled(Navbar)`
  transition: all .3s linear;
  ${props => props.bg === 'white' && `
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  `}
`

const ImageStyled = styled.img`
  @media (min-width: 992px) {
    width: 266px;
    height: auto;
  }
`

const NavbarToggleStyled =  styled(Navbar.Toggle)`
  :active{border: none} 
  :focus{border: none}
  border: none;
`

const NavbarCollapseStyled = styled(Navbar.Collapse)`
  @media (max-width: 991px) {
  background-color: #fff;
  margin: 0 -12px;
  padding: 1rem 2rem;
  }
`

const NavLinkStyled = styled(Nav.Link)`
  @media (min-width: 992px) {
    color: #FFF !important;
  }
`

import React from 'react'
import {FaBars} from 'react-icons/fa'
import { 
  Nav, 
  NavbarContainer, 
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink
} from './NavbarElements'

const Navbar = ({toggle}) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/'>APlus</NavLogo> 
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='about'>Nosotros</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='courses'>Cursos</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='opinions'>Opiniones</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='contact'>Contacto</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='/signin'>Iniciar Sesión</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar
import React from 'react'
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute
} from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle} >
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='about' onClick={toggle} >Nosotros</SidebarLink>
          <SidebarLink to='courses' onClick={toggle}>Cursos</SidebarLink>
          <SidebarLink to='opinions' onClick={toggle}>Opiniones</SidebarLink>
          <SidebarLink to='contact' onClick={toggle}>Contacto</SidebarLink>
          <SidebarLink to='signup' onClick={toggle}>Registrarse</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap> 
          <SidebarRoute to='/signin'>Iniciar Sesión</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
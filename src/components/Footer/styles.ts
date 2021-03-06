import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const FooterContainer = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 1px solid #262726;
    border-radius: 30px 30px 0px 0px;
    box-shadow: -7px -7px 7px rgba(0, 0, 0, 0.4);

    .contato p{
        margin: 1%;
        color: #80F88D;
    }
    .email-content{
        display: flex;
    }
    .icon_email{
        color: white;
    }
    .email{
        color: white;
    }

    .link_menu{
        width: 20%;
        text-align: center;
        margin-left: 15%;
    }
    `
export const NavLinkFooter = styled(NavLink)`
    color: white;
    padding: 3%;

    &:hover{
        color: #80F88D;
    }
`

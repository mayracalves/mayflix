import React from 'react';
import {Link} from "react-router-dom"
import logo from '../../assets/logo.png'
// import ButtonLink from '../ButtonLink/'
import Button from '../Button/'
import './Menu.css'

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={logo} alt="Logo mayflix" />
            </Link>

            {/* <ButtonLink className="ButtonLink" href="/" >
                Novo vídeo
            </ButtonLink> */}
            <Button as={Link} className="ButtonLink" to="/cadastro/video" >
                Novo vídeo
            </Button>
        </nav>
    )
}

export default Menu;
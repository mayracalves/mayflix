import React from 'react';
import logo from '../../assets/logo.png'
// import ButtonLink from '../ButtonLink/'
import Button from '../Button/'
import './Menu.css'

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={logo} alt="Logo mayflix" />
            </a>

            {/* <ButtonLink className="ButtonLink" href="/" >
                Novo vídeo
            </ButtonLink> */}
            <Button as="a" className="ButtonLink" href="/" >
                Novo vídeo
            </Button>
        </nav>
    )
}

export default Menu;
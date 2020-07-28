import React from 'react';
import PageDefault from '../../components/PageDefault/';
import styled from 'styled-components';

const IframeContainer = styled.div`
    display: flex;
    flex-direction: column;
    
    iframe { 
        min-height: 500px;
        margin-bottom: 15px;
    }
`;

function CadastroCategoria() {
    return (
        <PageDefault>
            <IframeContainer>
                <h1>Página não encontrada</h1>
                <iframe title="jogoHipsta" src="https://editor.p5js.org/mayracalves/embed/09OrR24IT"></iframe>
            </IframeContainer>
        </PageDefault>
    )
}

export default CadastroCategoria;
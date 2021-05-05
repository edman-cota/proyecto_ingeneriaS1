import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import ReactPlayer from 'react-player/lazy';
import './lirico.css';

function lirico() {
    return (
        <Container fluid className="grid">
            <Row justify="between" debug>
                <Col>
                    <h1 className="tituloT"> Género Lírico </h1>
                    <p>
                        <br></br><br></br>
                        Se llama género lírico porque en la antigua Grecia este tipo de composiciones se cantaban, acompañándose con un instrumento llamado lira.​ Su forma más habitual es el verso y la primera persona. Comunica las más íntimas vivencias del hombre, lo subjetivo, los estados anímicos.
                        <br></br><br></br>
                        En su concepto más vasto comprende además de la oda, la canción, la balada, la elegía, el soneto e incluso las piezas de teatro destinadas a ser cantadas, como las óperas y dramas líricos. En lenguaje usual, sin embargo, designa casi exclusivamente la oda que, según las formas que reviste toma los nombres de ditirambo, himno, cantata, cántico, etc.
                        La métrica y el ritmo de los poemas dependen exclusivamente del poeta o el escritor.
                        <br></br><br></br>
                        Además de transmitir sentimientos, lo hace por medio de imágenes poéticas creadas con palabras cuidadosamente escogidas. 
                        Su expresión principal es el poema que (voz poética y objeto lírico) expresa emociones y pensamientos que es el objeto lírico.
                        
                    </p>
                </Col>
                <Col>
                    <div className='player-wrapper'>
                        <ReactPlayer
                            /**AQUI VA EL LINK DE YOUTUBE */
                            url='https://youtu.be/1YnmgtPSiR0'
                            className='react-player'
                            playing
                            width='100%'
                            height='100%'
                            controls='true'
                        />
                    </div>
                </Col>
            </Row>


        </Container>
    )
}

export default lirico
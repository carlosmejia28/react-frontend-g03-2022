import React from "react";
import { Container } from "react-bootstrap";
import { CardsAgenda } from "../components/CardsAgenda";

function AgendaCitasPage() {
    return(
        <Container>
            <h1>Agendas de Citas</h1>
            <CardsAgenda/>
        </Container>
    )
}export{AgendaCitasPage}
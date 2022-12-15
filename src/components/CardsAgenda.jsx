import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { listaAgendas } from "../server/Server";

function CardsAgenda() {

    const [agendas, setAgendas] = useState([]);

    async function listAgendas() {
        try {
            const response = await listaAgendas();
            setAgendas(response);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(()=>{
        listAgendas()
    },[]);

    const fechaActual = new Date();    
    
    return(
        <Row className="my-3">
            {
                agendas.filter(agenda=>agenda.fecha>fechaActual.toISOString()).map((agenda)=>(
                    <Col key={agenda.id}>
                    <Card style={{ width: '18rem' }}
                    className="mb-2"
                    >
                    <Card.Body>
                      <Card.Title>{agenda.fecha}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">Agenda Disponible</Card.Subtitle>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                      </Card.Text>
                      <Link to={`/agenda/citas/${agenda.id}`}>Agendar Cita</Link>
                    </Card.Body>
                  </Card>
                  </Col>
                    
                ))}
    </Row>
    )
}export{CardsAgenda}
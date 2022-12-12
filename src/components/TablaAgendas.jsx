import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

function TablaAgendas() {

    const [agendas, setAgendas] = useState([]);

    async function cargarAgendas() {
        const options = { method: 'GET' };
    fetch('http://localhost:8080/agendas', options)
        .then(response => response.json())
        .then(response => setAgendas(response))
        .catch(err => console.error(err));
    };
    useEffect(()=>{
        cargarAgendas();
    },[])

    let contador=0;

    return (
        <Container>
            <Row>
                <Col><h2>Lista de Agendas</h2></Col>
            </Row>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Id Agenda</th>
                        <th>Fecha</th>
                        <th>Id Medico</th>
                        <th>Ver Detalle</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        agendas.map((agenda)=>(
                           <tr key={agenda.id}>
                            <td>{++contador}</td>
                            <td>{agenda.id}</td>
                            <td>{agenda.fecha}</td>
                            <td>{agenda.id_medico}</td>
                            <td><Link>Ver Detalle</Link></td>
                            <td><Button variant="danger">Eliminar</Button></td>
                           </tr> 
                        ))
                    }
                </tbody>

            </Table>
        </Container>
    )
} export { TablaAgendas }
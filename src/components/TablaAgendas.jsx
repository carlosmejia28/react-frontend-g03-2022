import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, FormControl, FormLabel, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { eliminarAgendaPorId, listaAgendas } from "../server/Server";

function TablaAgendas() {

    const [agendas, setAgendas] = useState([]);

    async function cargarAgendas() {
        try {
            const res = await listaAgendas();
            setAgendas(res);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        cargarAgendas();
    }, []);

    async function deleteAgendaById(id) {
        let result = window.confirm("Seguro de Eliminar");
        if (result) {
            const response = await eliminarAgendaPorId(id);
            alert(response);
            setAgendas(agendas.filter(agenda => agenda.id !== id));
        }
        
    }

    let contador = 0;

    return (
        <Container>
            <Row className="my-3">
                <Col><h2>Lista de Agendas</h2></Col>
                <Col xs={6}></Col>
                <Col>
                <Link to="/agenda/form">
                <Button variant="success">Registrar</Button>
                </Link>
                    
                </Col>
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
                        agendas.map((agenda) => (
                            <tr key={agenda.id}>
                                <td>{++contador}</td>
                                <td>{agenda.id}</td>
                                <td>{agenda.fecha}</td>
                                <td>{agenda.id_medico}</td>
                                <td><Link>Ver Detalle</Link></td>
                                <td><Button variant="danger" onClick={()=>deleteAgendaById(agenda.id)}>Eliminar</Button></td>
                            </tr>
                        ))
                    }
                </tbody>

            </Table>
        </Container>
    )
} export { TablaAgendas }
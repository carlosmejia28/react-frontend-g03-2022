import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { guardarAgenda } from "../server/Server";

function AgendaForm() {

    const navigate = useNavigate();

    function returnToAgenda() {
        navigate("/agenda")
    };

    const [agenda, setAgenda] = useState(
        {
            fecha: "",
            id_medico: "",
            citas: []
        }
    );



    function handleChange({ target }) {
        setAgenda({
            ...agenda,
            [target.name]: target.value
        })
    }

    async function handleSubmit(e) {
        e.preventDefault();

        const resp = await guardarAgenda(agenda);
        alert("Se creo la Agenda: " + resp.id);
        returnToAgenda();
    }

    return (
        <Container>
            <h1>Registrar Agenda</h1>
            <Form className="my-3" onSubmit={handleSubmit}>
                <Row>
                    <Col xs="auto" className="my-1">
                        <Form.Label>Fecha: </Form.Label>
                        <Form.Control
                            required
                            placeholder="aaaa-mm-dd"
                            name="fecha"
                            onChange={handleChange}
                        />
                    </Col>
                    <Col xs="auto" className="my-1">
                        <Form.Label>Medico: </Form.Label>
                        <Form.Select
                            required
                            name="id_medico"
                            onChange={handleChange}>
                                <option></option>
                            <option value="6388c5fd32983f02d6527078">Luigie</option>
                            <option value="6388c4c732983f02d6527077" >Mario</option>
                        </Form.Select>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button variant="success" type="submit">Guardar</Button>
                    </Col>
                    <Col>
                        <Button onClick={returnToAgenda}>Regresar</Button>
                    </Col>
                </Row>
            </Form>

        </Container>
    )

} export { AgendaForm }
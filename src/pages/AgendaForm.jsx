import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { findAgendaById, findAllMedicos, guardarAgenda } from "../server/Server";

function AgendaForm() {

    const {id} = useParams();

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

    const [medicos, setMedicos] = useState([]);

    async function listarMedicos() {
        try {
            const response = await findAllMedicos();
            setMedicos(response);
        } catch (error) {
        }
    };

    useEffect(()=>{
        if (id!==undefined) {
            setDisabled(true)
            findAgendaById(id).then(
                res=>{setAgenda(res)}
            )
        }
        listarMedicos();
    },[id]);

    function handleChange({ target }) {
        setAgenda({
            ...agenda,
            [target.name]: target.value
        })
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const resp = await guardarAgenda(agenda);
        if (id!==undefined) {
        alert("Se Actualizo la Agenda: " + resp.id);
    }else{
        alert("Se Registro la Agenda: " + resp.id);
    }
        returnToAgenda();
    };

    const [disabled , setDisabled] =useState(false);

    return (
        <Container>
            <h1>  {id!==undefined?"Detalle Agenda":"Registrar Agenda"}  </h1>
            <Form className="my-3" onSubmit={handleSubmit}>
                <Row>
                    <Col xs="auto" className="my-1">
                        <Form.Label>Fecha: </Form.Label>
                        <Form.Control
                            required
                            placeholder="aaaa-mm-dd"
                            name="fecha"
                            onChange={handleChange}

                            value={agenda.fecha}
                            disabled = {disabled}
                        />
                    </Col>
                    <Col xs="auto" className="my-1">
                        <Form.Label>Medico: </Form.Label>
                        <Form.Select
                            required
                            name="id_medico"
                            onChange={handleChange}
                            disabled = {disabled}
                            >                           
                            
                            <option>{agenda.nombremedico}</option>
                            {
                                medicos.map((medico)=>(
                                    <option key={medico.id} value={medico.id} >{medico.nombre} {medico.apellido}</option>
                                ))
                            }
                        </Form.Select>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button disabled = {disabled} variant="success" type="submit">{id!==undefined?"Actualizar":"Guardar"} </Button>
                    </Col>
                    <Col>
                        <Button hidden={!disabled} variant="warning" onClick={()=>setDisabled(!disabled)}>Editar</Button>
                    </Col>
                    <Col>
                        <Button onClick={returnToAgenda}>Regresar</Button>
                    </Col>
                </Row>
            </Form>

        </Container>
    )

} export { AgendaForm }
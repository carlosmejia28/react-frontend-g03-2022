import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { findAgendaById, guardarAgenda } from "../server/Server";

function CitasAgendaPage() {

    const { id } = useParams();

    const [agenda, setAgenda] = useState({});
    const [horaRadio, setHoraRadio]= useState("");

    useEffect(() => {
        findAgendaById(id).then(data => {
            setAgenda(data);
        })
    }, []);

    const handleSelect = (e) =>{
        setHoraRadio(e.target.value);
    };

    async function handleSubmit(){
        if (horaRadio!=="") {
            agenda.citas.push({hora:horaRadio,id_paciente:""});
            guardarAgenda(agenda);

        }else{
            alert("Seleccione un Horario")
        }

    }

    const franjaHoraria = ["8:00", "8:30", "9:00", "9:30", "10:00", "10:30", "11:00"];


    return (
        <Container className="my-3">

            <Row>
                <Col>
                    <p>Fecha Cita: </p>
                    <h3>{agenda.fecha}</h3>
                </Col>
                <Col>
                    <p>nombre del Medico:</p>
                    <h4>{agenda.nombremedico}</h4>
                </Col>
                <Col>
                    <p>Especialidad del Medico:</p>
                    <h4>{agenda.especialidad}</h4>
                </Col>
            </Row>
            <Row className="my-3">
                <Col xs lg="2">
                    Horarios Disponibles:
                </Col>
                <Col md="auto">
                    {
                        franjaHoraria.map((hora) => (
                            <Form.Check className="my-3"
                                key={hora}
                                label={hora + " AM"}
                                type="radio"
                                name="hora"
                                value={hora}
                                onChange={handleSelect}
                            />
                        ))
                    }

                </Col>
                {/* <Col xs lg="2">
                <Form.Label>N° de Identificación del Paciente</Form.Label>
                <Form.Control/>
                </Col> */}
            </Row>
            <Row>
                <Col>
                <Button variant="success" onClick={()=>handleSubmit()}>Registrar Cita</Button>
                </Col>
            </Row>

        </Container>
    )
} export { CitasAgendaPage }
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { existPacienteById, findAgendaById,  findPacienteByNdocumento,  guardarAgenda } from "../server/Server";

function CitasAgendaPage() {

    const { id } = useParams();

    const navigate = useNavigate();

    function returnToAgenda() {
        navigate("/agenda-citas")
    };

    const [agenda, setAgenda] = useState({});
    const [horaRadio, setHoraRadio]= useState("");
    const [ndocumento , setNdocumento]=useState("");
    const [citas , setCitas] = useState([]);

    useEffect(() => {
        findAgendaById(id).then(data => {
            setAgenda(data);
            setCitas(data.citas)
        })
    }, []);

    const handleSelect = (e) =>{
        setHoraRadio(e.target.value);
    };

    const handleChange = (e) =>{
        setNdocumento(e.target.value);
    };

    async function handleSubmit(){
        if (horaRadio!=="" && ndocumento !=="") {
             const resultado = await existPacienteById(ndocumento);
             

            if (resultado === true) {
                const paciente = await findPacienteByNdocumento(ndocumento)
                agenda.citas.push({hora:horaRadio,id_paciente:paciente.id});
                delete agenda.nombremedico
                delete agenda.especialidad
                guardarAgenda(agenda);
                alert("Cita Agendada");
                returnToAgenda();

            }else{
                alert("Número de Documento No valido")
            }

            
            

        }else{
            alert("Por favor rellené todos los campos")
        }

    }

    const franjaHoraria = ["8:00", "8:30", "9:00", "9:30", "10:00", "10:30", "11:00"];
    let horariosOcupados = []
    citas.map(cita=>(
        horariosOcupados.push(cita.hora)
    ))

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
                                disabled={horariosOcupados.includes(hora) ? true : false}
                            />
                        ))
                    }

                </Col>
                <Col xs lg="2">
                <Form.Label>N° de Identificación del Paciente</Form.Label>
                <Form.Control
                    required
                    onChange={handleChange}
                    // type="number"
                />
                </Col>
            </Row>
            <Row>
                <Col>
                <Button variant="success" onClick={()=>handleSubmit()}>Registrar Cita</Button>
                </Col>
            </Row>

        </Container>
    )
} export { CitasAgendaPage }
import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { savePaciente } from "../server/Server";

function PacienteForm() {

    const navigate = useNavigate();
    function retornarPage() {
        navigate("/pacientes")
    }

    const [paciente, setPaciente] = useState(
        {
            nombre: "",
            apellido: "",
            fnacimiento: "",
            ndocumento:"",
            alergias: "",
            ubicacion: "",
            departamento: "",
            ciudad: "",
            direccion: ""
        });

    function handleChange({ target }) {
        setPaciente({
            ...paciente,
            [target.name]: target.value
        });
    };

    async function handleSubmit(e) {
        e.preventDefault();
        paciente.alergias = paciente.alergias.split(" ").join("").split(",");

        paciente.ubicacion = {
            departamento: paciente.departamento,
            ciudad: paciente.ciudad,
            direccion: paciente.direccion,
        };
        delete paciente.departamento;
        delete paciente.ciudad;
        delete paciente.direccion;

        const response = await savePaciente(paciente);
        alert(response);
        retornarPage()

    }


    return (

        <Form className="mt-5" onSubmit={handleSubmit}>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="nombre">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        name="nombre"
                        type="text"
                        required
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group as={Col} controlId="apellido">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control
                        name="apellido"
                        type="text"
                        required
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group as={Col} controlId="fnacimiento">
                    <Form.Label>F. Nacimiento</Form.Label>
                    <Form.Control
                        name="fnacimiento"
                        type="text"
                        required
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group as={Col} >
                    <Form.Label>N° de Documento</Form.Label>
                    <Form.Control
                        name="ndocumento"
                        type="text"
                        required
                        onChange={handleChange}
                    />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="departamento">
                    <Form.Label>Departamento</Form.Label>
                    <Form.Control
                        name="departamento"
                        type="text"
                        required
                        onChange={handleChange} />
                </Form.Group>

                <Form.Group as={Col} controlId="ciudad">
                    <Form.Label>Ciudad</Form.Label>
                    <Form.Control
                        name="ciudad"
                        type="text"
                        required
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group as={Col} controlId="direccion">
                    <Form.Label>Direccion</Form.Label>
                    <Form.Control
                        name="direccion"
                        type="text"
                        required
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group as={Col} className="mb-3" id="alergias">
                    <Form.Label>Alergias</Form.Label>
                    <textarea className="form-control"
                        name="alergias"
                        onChange={handleChange}
                    ></textarea>
                </Form.Group>
            </Row>
            <Row xs={2} md={4} lg={6}>
                <Col><Button variant="primary" type="button" onClick={retornarPage}>Volver</Button></Col>
                <Col><Button variant="success" type="submit">Guardar</Button></Col>
            </Row>
        </Form>

    )

}
export { PacienteForm }
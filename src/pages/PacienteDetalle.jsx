import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { deletePacienteById, findPacienteById, savePaciente } from "../server/Server";

function PacienteDetalle() {

  const [disabled, setDisable] = useState(true);
  const [paciente, setPaciente] = useState({})

  const { id } = useParams();

  const navigate = useNavigate();
  function retornarPage() {
    navigate("/pacientes")
  }

  const getPacienteById = async () => {
    try {
      const data = await findPacienteById(id);
      setPaciente(data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getPacienteById();
  }, [id])

  async function eliminarPaciente(id) {
    let respuesta = window.confirm("Seguro de Eliminar?");
    if (respuesta) {
      const response = await deletePacienteById(id);
      alert(response);
      navigate("/pacientes")
    }
  };

  function handleChange({ target }) {
    setPaciente({
      ...paciente,
      [target.name]: target.value
    });
  };

  async function handleSubmit(e) {
    e.preventDefault();

    if (!Array.isArray(paciente.alergias)) {
      paciente.alergias = paciente.alergias.split(" ").join("").split(","); //convertir una cadena en una lista, usando la coma (,) como delimitador y quitando los espacios vacios entre items
          }

    const response = await savePaciente(paciente);
        alert(response);
        retornarPage()

    }


  return (
    <Container>
      <Row>
        <Form.Label>Id</Form.Label>
        <Col><Form.Control defaultValue={paciente.id} disabled /></Col>
        <Col md="auto"></Col>
        <Col xs lg="2">
          <Button variant="danger" onClick={() => eliminarPaciente(paciente.id)} >Eliminar</Button>
        </Col>
      </Row>

      <Form className="mt-5" onSubmit={handleSubmit}>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="nombre">
            <Form.Label>Nombre</Form.Label>
            <Form.Control defaultValue={paciente.nombre} disabled={disabled}
              name="nombre"
              type="text"
              required
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="apellido">
            <Form.Label>Apellido</Form.Label>
            <Form.Control defaultValue={paciente.apellido} disabled={disabled} 
              name="apellido"
              type="text"
              required
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="fnacimiento">
            <Form.Label>F. Nacimiento</Form.Label>
            <Form.Control defaultValue={paciente.fnacimiento} disabled={disabled} 
              name="fnacimiento"
              type="text"
              required
              onChange={handleChange}
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="departamento">
            <Form.Label>Departamento</Form.Label>
            <Form.Control disabled placeholder={paciente.ubicacion !== undefined ? paciente.ubicacion.departamento : "undefined"} />
          </Form.Group>

          <Form.Group as={Col} controlId="ciudad">
            <Form.Label>Ciudad</Form.Label>
            <Form.Control disabled placeholder={paciente.ubicacion !== undefined ? paciente.ubicacion.ciudad : "undefined"} />
          </Form.Group>

          <Form.Group as={Col} controlId="direccion">
            <Form.Label>Direccion</Form.Label>
            <Form.Control disabled placeholder={paciente.ubicacion !== undefined ? paciente.ubicacion.direccion : "undefined"} />
          </Form.Group>

          <Form.Group as={Col} className="mb-3" id="alergias">
            <Form.Label>Alergias</Form.Label>
            <textarea className="form-control" disabled={disabled} defaultValue={paciente.alergias}
              name="alergias"
              type="text"
              onChange={handleChange}
            />
          </Form.Group>
        </Row>
        <Row>
          <Col md={{ span: 3, offset: 3 }}><Button variant="success" type="submit">Guardar</Button></Col>
          <Col md={{ span: 3, offset: 3 }}><Button variant="warning" onClick={() => setDisable(!disabled)}>Editar</Button></Col>
        </Row>


      </Form>
      <Button variant="primary" type="button" onClick={retornarPage}>
        Volver
      </Button>
    </Container>

  )

}
export { PacienteDetalle }
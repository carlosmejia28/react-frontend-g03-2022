import { Container} from "react-bootstrap";

import { TablaPaciente } from "../components/TablaPaciente";

function PacientePage() {    

    return (
        <Container className='mt-3' >
        <TablaPaciente/>
        </Container>
    )
}
export { PacientePage }
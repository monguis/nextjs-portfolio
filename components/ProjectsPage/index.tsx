import { Container, Row, Col } from "react-bootstrap";
import { ProjectTile } from "./ProjectTile";

export const ProjectsPage = () => <Container>
    <Row>
        <Col xs="4">
            <ProjectTile />
        </Col>
    </Row>
</Container>
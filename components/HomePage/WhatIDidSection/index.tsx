import Link from "next/link";
import { Col, Row, Container, Button } from "react-bootstrap";
import styles from "../../../styles/componentStyles/HomePage/WhatIDidSection.module.scss"
import { ProjectTile } from "./ProjectTile";

export const WhatIDidSection: React.FC = () => {
    return <section className={styles["whati-did-section"]}>

        <Container>
            <h3>What I&apos;ve Done</h3>
            <Row>
                <Col lg="4" xs="12">
                    <ProjectTile></ProjectTile>
                    </Col>
                <Col lg="4" xs="12">
                    <div style={{ background: "black", color: "white", height: "300px" }}>project placeholder</div>
                </Col>
                <Col lg="4" xs="12">
                    <div style={{ background: "black", color: "white", height: "300px" }}>project placeholder</div>
                </Col>
            </Row>
            <Link href="/portfolio" passHref>
            <Button><span>More projects...</span></Button>
            </Link>
        </Container>

    </section>
}

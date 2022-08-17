import { Col, Row, Container } from "react-bootstrap";
import styles from "../../../styles/componentStyles/HomePage/WhatIKnowSection.module.scss"

export const WhatIKnowSection: React.FC = () => {
    return <section className={styles["what-i-know-section"]}>

        <Container>
            <h3>What I Know</h3>
            <Row>
                <Col lg="3" xs="12">
                    <div style={{ background: "black", color: "white", height: "300px" }}>project placeholder</div>
                </Col>
                <Col lg="3" xs="12">
                    <div style={{ background: "black", color: "white", height: "300px" }}>project placeholder</div>
                </Col>
                <Col lg="3" xs="12">
                    <div style={{ background: "black", color: "white", height: "300px" }}>project placeholder</div>
                </Col>

                <Col lg="3" xs="12">
                    <div style={{ background: "black", color: "white", height: "300px" }}>project placeholder</div>
                </Col>
            </Row>
        </Container>

    </section>
}

import { Col, Row, Container, Button } from "react-bootstrap";
import styles from "../../../styles/componentStyles/HomePage/AboutMeSection.module.scss"
import { HomePageSection } from "../HomePageSection";

export const AboutMeSection: React.FC = () => {
    return <HomePageSection>

        <Container>
            <h3>About Me</h3>
            <Row>
                <Col lg="8" xs="12">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quasi placeat natus maiores ducimus! Voluptas, ducimus quod rem voluptatem quibusdam, reprehenderit iste, itaque dignissimos iusto ipsa assumenda ea modi nisi!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti eos ipsam unde. Recusandae voluptates ad ea, qui earum provident molestiae ipsum at totam est, facere rem, beatae ullam placeat. At vitae perferendis quam obcaecati reprehenderit, doloremque laborum amet exercitationem iusto fugit? Harum nulla fugiat inventore minima aspernatur reiciendis sit magnam!</p>
                </Col>
                <Col lg="4" xs="12">
                    <div style={{ background: "black", color: "white", height: "100%" }}>image placeholder</div>
                </Col>
            </Row>
        </Container>

    </HomePageSection>
}

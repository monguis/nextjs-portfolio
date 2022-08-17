import { Col, Row, Container } from "react-bootstrap";
import styles from "../../../styles/componentStyles/HomePage/AboutMeSection.module.scss"

export const AboutMeSection: React.FC = () => {
    return <section className={styles["about-me-section"]}>

        <Container>
            <h3>About Me</h3>
            <Row>
                <Col lg="8" xs="12">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quasi placeat natus maiores ducimus! Voluptas, ducimus quod rem voluptatem quibusdam, reprehenderit iste, itaque dignissimos iusto ipsa assumenda ea modi nisi!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti eos ipsam unde. Recusandae voluptates ad ea, qui earum provident molestiae ipsum at totam est, facere rem, beatae ullam placeat. At vitae perferendis quam obcaecati reprehenderit, doloremque laborum amet exercitationem iusto fugit? Harum nulla fugiat inventore minima aspernatur reiciendis sit magnam!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem voluptate quos nihil libero eius cum eligendi repellat, delectus velit vero quaerat saepe ea dolore iusto consectetur nulla unde nobis voluptates deleniti ducimus explicabo ex. Deleniti mollitia itaque aperiam voluptates quasi.</p>
                </Col>
                <Col lg="4" xs="12">
                    <div style={{background:"black",color:"white", height:"100%"}}>image placeholder</div>
                </Col>
            </Row>
        </Container>

    </section>
}

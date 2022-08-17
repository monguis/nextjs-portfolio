import { relative } from "path";
import { Col, Row, Container } from "react-bootstrap";
import { ParallaxChild } from "../../shared/ParallaxElement/Children";
import { ParallaxLayer } from "../../shared/ParallaxElement/Children/LayerClass";
import styles from "/styles/componentStyles/HomePage/Header.module.scss"

const Header: React.FC<any> = () => {

    

    return <section className={styles["main_header"]}>
            <Container className="text-center position-relative">
                <h1 className={styles["main_header__headline"]}>World is full of susprises!</h1>
                <p className={styles["main_header__blurb"]}>Hey, I&apos;m Juan, and this is my story</p>
                <button className={styles["main_header__learn-more-btn"]}>Learn More</button>
            </Container>

        </section>


}

export default Header;
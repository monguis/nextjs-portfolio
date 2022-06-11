import { relative } from "path";
import { Col, Row, Container } from "react-bootstrap";
import { ParallaxChild } from "../../shared/ParallaxElement/Children";
import { ParallaxLayer } from "../../shared/ParallaxElement/Children/Layer";
import styles from "/styles/componentStyles/HomePage/Header.module.scss"

const Header: React.ForwardedRef<any> = () => {

    const layers = [new ParallaxLayer(
        50, <>
        <div style={{
            position: "absolute", top: "100px", left: "50px", width: '50px', height: "50px",
            background: "red",
            zIndex: 1000
        }}></div>

        <div style={{
            position: "absolute", bottom: "100px", left: "50px", width: '50px', height: "50px",
            background: "red",
            zIndex: 1000
        }}></div>

        <div style={{
            position: "absolute", top: "100px", right: "50px", width: '50px', height: "50px",
            background: "red",
            zIndex: 1000
        }}></div>
    </>
    ),
    new ParallaxLayer(
        150, <>
        <div style={{
            position: "absolute", top: "100px", left: "50px", width: '50px', height: "50px",
            background: "blue",
            zIndex: 1000
        }}></div>

        <div style={{
            position: "absolute", bottom: "100px", left: "50px", width: '50px', height: "50px",
            background: "blue",
            zIndex: 1000
        }}></div>

        <div style={{
            position: "absolute", top: "100px", right: "50px", width: '50px', height: "50px",
            background: "blue",
            zIndex: 1000
        }}></div>
    </>
    ),
    new ParallaxLayer(
        0, <>
        <div style={{
            position: "absolute", top: "100px", left: "50px", width: '50px', height: "50px",
            background: "blue",
            zIndex: 1000
        }}></div>

        <div style={{
            position: "absolute", bottom: "100px", left: "50px", width: '50px', height: "50px",
            background: "blue",
            zIndex: 1000
        }}></div>

        <div style={{
            position: "absolute", top: "100px", right: "50px", width: '50px', height: "50px",
            background: "blue",
            zIndex: 1000
        }}></div>
    </>
    )]

    return <><ParallaxChild layers={layers}>
        <section className={styles["main_header"]}>
            <Container className="text-center position-relative">

                <h1 className={styles["main_header__headline"]}>World is full of susprises!</h1>
                <p className={styles["main_header__blurb"]}>Hey, I&apos;m Juan, and this is my story</p>
                <button className={styles["main_header__learn-more-btn"]}>Learn More</button>
            </Container>

        </section>
    </ParallaxChild>

        <section className={styles["main_header"]}>
            <Container className="text-center position-relative">

                <h1 className={styles["main_header__headline"]}>World is full of susprises!</h1>
                <p className={styles["main_header__blurb"]}>Hey, I&apos;m Juan, and this is my story</p>
                <button className={styles["main_header__learn-more-btn"]}>Learn More</button>
            </Container>

        </section><section className={styles["main_header"]}>
            <Container className="text-center position-relative">

                <h1 className={styles["main_header__headline"]}>World is full of susprises!</h1>
                <p className={styles["main_header__blurb"]}>Hey, I&apos;m Juan, and this is my story</p>
                <button className={styles["main_header__learn-more-btn"]}>Learn More</button>
            </Container>

        </section></>
}

export default Header;
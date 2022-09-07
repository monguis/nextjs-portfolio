import { faAngular, faCss3, faReact, faSquareJs } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Row, Container } from "react-bootstrap";
import styles from "../../../styles/componentStyles/HomePage/WhatIKnowSection.module.scss"
import content from "./content/skillTileContent";
import { SkillTile } from "./SkillTile";

export const WhatIKnowSection: React.FC = () => {
    return <section className={styles["what-i-know-section"]}>

        <Container>
            <h3>Top Skills</h3>
            <hr/>
            <Row>
                

                {
                    content.map(tileData => <Col lg="2" xs="12" key={"key"+tileData.title}>
                        <SkillTile {...tileData} />
                    </Col>)
                }



                {/* <Col lg="2" xs="12">
                    
                    <div style={{ background: "black", color: "white", height: "300px" }}>
                    <FontAwesomeIcon icon={faReact}className={`${styles["what-i-know-section__skill-tile__icon"]} ${styles["react-icon"]}`} />

                    <h4>React</h4></div>
                </Col>
                <Col lg="2" xs="12">
                    <div style={{ background: "black", color: "white", height: "300px" }}>
                    <FontAwesomeIcon icon={faAngular}/>
                        <h4>Angular</h4></div>
                </Col>

                <Col lg="2" xs="12">
                    <div style={{ background: "black", color: "white", height: "300px" }}>
                    <FontAwesomeIcon icon={faCss3}/>
                        <h4>CSS</h4>
                    </div>
                </Col>

                <Col lg="2" xs="12">
                    <div style={{ background: "black", color: "white", height: "300px" }}>C#</div>
                </Col>
                <Col lg="2" xs="12">
                    <div style={{ background: "black", color: "white", height: "300px" }}>JavaScript</div>
                </Col> */}
            </Row>
        </Container>

    </section>
}

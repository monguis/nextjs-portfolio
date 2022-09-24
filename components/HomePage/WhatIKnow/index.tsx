import { Col, Row, Container } from "react-bootstrap";
import { HomePageSection } from "../HomePageSection";
import content from "./content/skillTileContent";
import { SkillTile } from "./SkillTile";

export const WhatIKnowSection: React.FC = () => {
    return <HomePageSection>

        <Container>
            <h3>Top Skills</h3>
            <hr />
            <Row>


                {
                    content.map(tileData => <Col lg="2" xs="12" key={"key" + tileData.title}>
                        <SkillTile {...tileData} />
                    </Col>)
                }

            </Row>
        </Container>

    </HomePageSection>
}

import { Container } from "react-bootstrap"
import { HomePageSection } from "../HomePageSection";
import { AccomplishmentTile } from "./AccomplishmentTile";
import accomplishments from "./content";

export const WhatIAccomplishedSection = () => {

    return <HomePageSection>
        <Container>
            <h3>
                What I have accomplished
            </h3>
            <div>
                {accomplishments.map(accomplishment => <AccomplishmentTile key={accomplishment.title + " tile"}
                    {...accomplishment} />)
                }
            </div>
        </Container>
    </HomePageSection>
}
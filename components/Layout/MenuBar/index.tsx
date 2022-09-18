import Link from "next/link"
import { Container, Navbar } from "react-bootstrap";
import { menuLinksArray } from "./content/menuLinksArray";
import styles from "../../../styles/componentStyles/Layout/menu-bar.module.scss"
import { SkipContentLink } from "./SkipContentLink";

export type navBarLinkType = {
    address: string;
    name: string;
    rel?: string;
    target?: string;
}

const MenuBar: React.FC = () => {
    return <>
    <SkipContentLink href="#main-content">Skip to main content</SkipContentLink>
    <SkipContentLink href="#footer">Skip to footer</SkipContentLink>
        <header style={{ position: "fixed", top: "0", width: "100%", height: "60px" }}>
            <Navbar className={styles["menu-navbar"]}>
                <Container>
                    <Link href="/" passHref>
                        <Navbar.Brand className={`${styles["menu-navbar__brand-icon"]} ${styles["frame-animation"]}`} >
                            JCCN Portfolio
                        </Navbar.Brand>
                    </Link>
                    <Navbar.Collapse className="justify-content-end">
                        <ul className={styles["menu-navbar__navlinks-wrapper"]}>
                            {menuLinksArray.map((navBarLink: navBarLinkType) =>
                                <li
                                    className={styles["__navlink"]}
                                    key={"navBarLink" + " + " + navBarLink.address} >
                                    <Link href={navBarLink.address} passHref>
                                        <a>
                                            {navBarLink.name}
                                        </a>
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
        <div style={{ height: "55px" }}></div>
    </>

}

export default MenuBar
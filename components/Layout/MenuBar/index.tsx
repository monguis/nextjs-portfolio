import Image from "next/image"
import Link from "next/link"
import { Container, Navbar } from "react-bootstrap";
import { menuLinksArray } from "./content/menuLinksArray";
import styles from "/styles/componentStyles/Layout/menubar.module.scss"

export type navBarLinkType = {
    address: string;
    name: string;
    rel?: string;
    target?: string;
}

const MenuBar: React.FC = () => {
    return <header>
        <Navbar className={styles["menu-navbar"]}>
        <Container>
            <Navbar.Brand href="#home" className={styles["menu-navbar__brand-icon"]} >
                JCCN Portfolio
            </Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
                <ul className={styles["menu-navbar__navlinks-wrapper"]}>
                    {menuLinksArray.map((navBarLink: navBarLinkType) =>
                        <li
                        className={styles["menu-navbar__navlink"]}
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
        
}

export default MenuBar
import Link from "next/link"
import { Container, Navbar } from "react-bootstrap";
import { menuLinksArray } from "./content/menuLinksArray";
import styles from "../../../styles/componentStyles/Layout/menu-bar.module.scss"

export type navBarLinkType = {
    address: string;
    name: string;
    rel?: string;
    target?: string;
}

const MenuBar: React.FC = () => {
    return <>
    <header style={{position:"fixed", top:"0", width:"100%", height:"60px"}}>
        <Navbar className={styles["menu-navbar"]}>
        <Container>
            <Navbar.Brand href="#home" className={`${styles["menu-navbar__brand-icon"]} ${styles["frame-animation"]}`} >
                JCCN Portfolio
            </Navbar.Brand>
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
        <div style={{height:"55px"}}></div>
    </>
        
}

export default MenuBar
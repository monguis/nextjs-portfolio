import Image from "next/image"
import Link from "next/link"
import { Container, Navbar } from "react-bootstrap";
import { menuLinksArray } from "./content/menuLinksArray";

export type navBarLinkType = {
    address: string;
    name: string;
    rel?: string;
    target?: string;
}

const MenuBar: React.FC = () => {
    return <Navbar bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="#home">
                <Image
                    alt=""
                    src="/logo.svg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />
                JCCN Portfolio
            </Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
                <ul>
                    {menuLinksArray.map((navBarLink: navBarLinkType) =>
                        <li key={"navBarLink" + " + " + navBarLink.address} >
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
}

export default MenuBar
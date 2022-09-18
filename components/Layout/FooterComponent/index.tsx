import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Container, Row } from "react-bootstrap";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import styles from "../../../styles/componentStyles/Layout/footerComponent/index.module.scss";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { menuLinksArray } from "../MenuBar/content/menuLinksArray"
import Link from "next/link";

const FooterComponent = () => {
    return <footer className={styles["footer"]} id="footer">
        <div className={styles["footer__content"]}>
            <div className={styles["footer__content__info-container"] + " " + styles["hover-effect"]}>
                <h3>Wanna learn more<br /> about me?</h3>
                <ul className={styles["links-list"]}>
                    <li>
                        <a href="https://www.linkedin.com/in/jccnlkdin/" target="_blank" rel="noreferrer noopener">
                            <FontAwesomeIcon icon={faLinkedin} />&nbsp;LinkedIn
                        </a>
                    </li><li>
                        <a href="https://github.com/monguis" target="_blank" rel="noreferrer noopener">
                            <FontAwesomeIcon icon={faGithub} />&nbsp;GitHub
                        </a>
                    </li><li><a href="mailto:jccnnetwork@gmail.com"><FontAwesomeIcon icon={faAt} />&nbsp;Email</a>

                    </li>

                </ul>
            </div>
            <div className={styles["footer__content__site-links-container"]}>
                <div className={styles["footer__content__site-links-container__top"] + " " + styles["hover-effect"]}>

                    <h3>Portal</h3>
                    <ul className={styles["links-list"]}>
                        {
                            menuLinksArray.map(link => <li key={link.address + "-footer-link"}>
                                <Link href={link.address} >
                            {link.name}
                        </Link></li>
                            )
                        }
                    </ul>

                </div>
                <div className={styles["footer__content__site-links-container__bottom"] + " " + styles["hover-effect"]}>
                    this was a work of Juan Castellanos, hope you enjoyed the ride
                </div>
            </div>
        </div>


    </footer>
}

export default FooterComponent;
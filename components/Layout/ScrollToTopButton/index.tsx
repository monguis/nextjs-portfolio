import { Button } from "react-bootstrap";
import {useEffect, useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronUp } from "@fortawesome/free-solid-svg-icons";
import styles from "../../../styles/componentStyles/Layout/scroll-to-top-button.module.scss"

export const ScrollToTopButton = () => {
    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    };

    useEffect(()=>{
        window.addEventListener('scroll', toggleVisible);
    },[])

    const scrollToTop = () => {
        console.log("test")
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
            /* you can also use 'auto' behaviour
               in place of 'smooth' */
        });
    };


    return (
        <button className={`${styles["scroll-to-top-button"]} ${!visible? styles.hidden:""}`}  onClick={scrollToTop} title="Scroll back to top" 
        >
            <FontAwesomeIcon icon={faCircleChevronUp}
                 />
                <span style={{display:"none"}}>Scroll to top</span>
                
        </button>
    );
}
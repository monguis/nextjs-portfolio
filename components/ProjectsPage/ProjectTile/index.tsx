import Image from "next/image";
import styles from "../../../styles/componentStyles/ProjectsPage/projectTile.module.scss"

export const ProjectTile = () =>
    <div className={styles["project-tile"]}>
        <h3 className={styles["project-tile__header"]}>Digitech Systems</h3>
        <div className={styles["project-tile__image-section"]}>
            <Image
                layout="fill"
                className={styles["project-tile__feature-image"]}
                src={"/images/Screenshot 2022-08-11 at 21-19-57 Any Document Anywhere Anytime® - Digitech Systems LLC.png"} alt="{title}-img" />
        </div>

        <div className={styles["project-tile__content"]}>
            <p className={styles["project-tile__content__description"]}>Digitech Systems is a website combining react and static html/css/vanilla JS</p>
            <div className={styles["project-tile__content__links-wrapper"]}>
                <a href="" className={styles["project-tile__content__links-wrapper__related-links"] + " btn"}>repo</a>
                <a href="" className={styles["project-tile__content__links-wrapper__related-links"] + " btn"}>link</a>
                <a href="" className={styles["project-tile__content__links-wrapper__related-links"] + " btn"}>tech used?</a>
            </div>
        </div>
    </div>


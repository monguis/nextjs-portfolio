import Image from "next/image"
import styles from "../../../../styles/componentStyles/HomePage/project-tile.module.scss"

export const ProjectTile:React.FC = () => {
    return <div className={styles["project-tile"]}>
       <h4>Project Title</h4>
       <Image layout='fill' src="/images/Screenshot 2022-08-11 at 21-19-57 Any Document Anywhere Anytime® - Digitech Systems LLC.png"></Image>
    </div>
}
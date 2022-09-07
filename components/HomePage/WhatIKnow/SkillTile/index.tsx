import { faReact, IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../../../styles/componentStyles/HomePage/skill-tile.module.scss"

export interface SkillTypeProps {
    title: string;
    icon: IconDefinition;
    cssModifierClass?: string;
}

export const SkillTile: React.FC<SkillTypeProps> = ({
    title,
    icon,
    cssModifierClass = "javascript"
}) =>
    <div className={`${styles["skill-tile__wrapper"]}`}>
        <div className={`${styles["skill-tile"]} ${styles[cssModifierClass]}`}>
            <FontAwesomeIcon icon={icon}
                className={`${styles["skill-tile__icon"]} ${styles["react-icon"]}`} />
            <p>{title}</p>
        </div>

    </div>



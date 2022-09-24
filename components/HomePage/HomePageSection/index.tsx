import { ReactNode } from "react";
import styles from "../../../styles/componentStyles/HomePage/home-page-section.module.scss";

export const HomePageSection: React.FC<{ children: ReactNode }> = ({children}) => <section className={styles["main"]}>
    {children}
</section>
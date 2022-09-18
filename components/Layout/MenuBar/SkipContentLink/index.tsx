import { ReactNode } from "react"
import styles from "../../../../styles/componentStyles/Layout/skip-link.module.scss"

//this component is exported to the _document.tsx file in the pages  

export const SkipContentLink: React.FC<{ children: ReactNode, href: string }> = ({ children, href }) => {
    return <a className={styles["skip-link"]} href={href}>{children}</a>
}
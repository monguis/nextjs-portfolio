import { ReactNode } from "react"
import styles from "../../../../styles/componentStyles/shared/Parallax/parallaxWrapper.module.scss"

type ParallaxWrapperProps = {
    children: ReactNode
}

export const ParallaxWrapper: React.FC<ParallaxWrapperProps> = ({children}) => {
    return <div className={styles['parallax-wrapper']}>
        {children}
    </div>
}


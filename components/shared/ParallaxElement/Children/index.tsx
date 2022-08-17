import { useRef, cloneElement, Children, ReactElement, createRef, useEffect, useState } from "react"
import styles from "../../../../styles/componentStyles/shared/Parallax/parallaxChildren.module.scss"
import { useRefDimensions } from "../../../../hooks/useRefDimensions"
import { ParallaxLayer } from "./LayerClass";

interface ParallaxChildProps {
    children: React.ReactNode;
    layers?: ParallaxLayer[]
}

export const ParallaxChild: React.FC<ParallaxChildProps> = ({ children, layers = [] }) => {
    const parentRef = useRef<HTMLElement>(null);
    const dimensions = useRefDimensions(parentRef)

    return <>
        {layers.map(
            layer => <div key={"parallax-layer-" + Math.random()}
                className={styles["parallax-child"]}
                style={{

                    transform: `translateZ(-${layer.translateZ}px) scale(${layer.scale})`
                }}
            >{layer.children}</div>)
        }
        {
            Children.map(children, (child) =>
                cloneElement(
                    (child as ReactElement),
                    { ref: parentRef }
                ))
        }
    </>

}
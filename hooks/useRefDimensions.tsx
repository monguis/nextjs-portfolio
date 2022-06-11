import { useState, useEffect } from "react"

export const useRefDimensions = (ref: any) => {
    const [dimensions, setDimensions] = useState({ width: 1, height: 2 })

    useEffect(() => {
        if (ref.current !== null) {
            const { current } = ref
            const resizeObserver = new ResizeObserver(entries => {
                for (let entry of entries) {
                    const { width, height } = entry.target.getBoundingClientRect()
                    setDimensions({ width: Math.round(width), height: Math.round(height) })
                }
            })

            resizeObserver.observe(ref.current)

            return () => resizeObserver.unobserve(current)
        }
    }, [ref])

    return dimensions
}
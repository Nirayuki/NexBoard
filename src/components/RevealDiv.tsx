import React, { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from "framer-motion";

interface Props {
    children: JSX.Element | JSX.Element[],
    style?: React.CSSProperties,
    className: string
}

export const ReavelDiv = ({ children, style, className }: Props) => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const mainControls = useAnimation();

    useEffect(() => {
        console.log(isInView);
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView])

    return (
        <div ref={ref} style={{ ...style }} className={className}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                animate={mainControls}
                transition={{
                    durantion: 0.5,
                    delay: 0.25,

                }}
                className="title"
            >
                {children}
            </motion.div>
        </div>
    )
}
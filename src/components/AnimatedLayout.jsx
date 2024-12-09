import { motion } from "framer-motion";

const variants = {
    hidden: {
        opacity: 0,
        z: 0,
        x: 1000,
        y: 0,
        scale: 1,
        rotateY: 180
    },
     enter: {
        opacity: 1,
        z: 0,
        x: 0,
        y: 0,
        scale: 1,
        rotateY: 0
    },
     exit: {
        opacity: 0,
        z: 0,
        x: -1000,
        y: 0,
        scale: 1,
        rotateY: -180
    },
}

const transition = {
    type: 'spring',
    stiffness: 50,
    mass: 1
}

export const AnimatedLayout = ({ children }) => {
    return (
        <motion.div 
            initial='hidden'
            animate='enter'
            exit='exit'
            variants={variants}
            transition={transition}>
{children}
        </motion.div>
    )
}
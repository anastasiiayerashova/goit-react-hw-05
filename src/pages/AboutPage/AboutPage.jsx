import { useEffect } from 'react'
import s from './AboutPage.module.css'
import { AnimatedLayout } from '../../components/AnimatedLayout'
import { motion } from 'framer-motion'

export default function AboutPage() {

 useEffect(() => {
    document.title = 'About'
 })
    
    const textAnimation = {
    hidden: { 
        scale: 0.5, 
        opacity: 0 
    },
    visible: custom => ({
        scale: 1,
        opacity: 1,
        transition: { delay: custom * 0.3, duration: 0.5 }
    })
};

    return (
    <AnimatedLayout>
        <div>  
           <motion.h1 custom={1} variants={textAnimation} initial='hidden' animate='visible' className={s.title}>About Us</motion.h1>
                <div className={s.firstDiv}>
                    <motion.img src='/poster.png' animate={{ scale: [1, 1.05, 1] }} 
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }} />
                    <motion.p className={s.text} custom={2} variants={textAnimation} initial='hidden' animate='visible'>FilmFinder is a modern single-page application
                        designed for movie enthusiasts. Stay updated with the most trending and popular films,
                        or search for specific titles to dive into their world. Each movie page features comprehensive
                        details, including descriptions, reviews, cast and crew information, country of origin, budget,
                        and much more. With a user-friendly interface and advanced search functionality, FilmFinder
                        makes it simple to explore, learn about, and enjoy your favorite films. Whether you’re
                        looking for the latest blockbusters or hidden gems, FilmFinder is your ultimate guide
                        to the world of cinema</motion.p>
                    </div>
            </div>
    </AnimatedLayout>
    )
}
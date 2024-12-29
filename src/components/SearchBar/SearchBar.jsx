import s from './SearchBar.module.css'
import { Formik, Form, Field } from 'formik'
import toast from 'react-hot-toast';
import { LiaSearchSolid } from "react-icons/lia";
import { motion } from 'framer-motion';

export default function SearchBar({ onSubmit }) {
    
    const initialValues = {
        query: ''
    }

    const handleSubmit = (values) => {
        values.query.trim() !== '' ? onSubmit(values.query) : toast.error('Please, enter something', {
            iconTheme: {
                primary: '#551a8b'
            }
        })
    }

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
    <div className={s.firstDiv}>
        <motion.p className={s.text} custom={1} variants={textAnimation} initial='hidden' animate='visible'>Search for the latest films, explore detailed descriptions,
        reviews, cast, and more. Discover your next favorite movie in just a few clicks!</motion.p>
           <div className={s.wrapper}> 
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                <Form className={s.form}>
                    <button type='submit' className={s.icon}>
                            <LiaSearchSolid size={28} className={s.icon} />
                    </button>
                    <Field type='text' name='query' className={s.input} />
                </Form>
            </Formik>
           </div>
    </div>
    )
}
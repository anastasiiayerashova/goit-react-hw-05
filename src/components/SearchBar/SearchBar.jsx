import s from './SearchBar.module.css'
import { Formik, Form, Field } from 'formik'
import { HiSearch } from 'react-icons/hi';

export default function SearchBar({onSubmit}) {
    const initialValues = {
        query: ''
    }
    const handleSubmit = (values) => {
        if (values.query.trim() !== '') {
        onSubmit(values.query)
    }
    }
    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form>
                <HiSearch className={s.icon}/>
                <Field type='text' name='query' className={s.input} />
                <button type='submit'>search</button>
                
            </Form>
        </Formik>
    )
}
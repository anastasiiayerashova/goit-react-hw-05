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
        <div className={s.wrapper}> 
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                <Form>
                    <button type='submit' className={s.icon}>
<HiSearch size={24}/>
                    </button>
                
                <Field type='text' name='query' className={s.input} />
              
                
            </Form>
            </Formik>
            </div>
    )
}

import React from 'react';
import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik';
import { connect } from 'react-redux';
import * as yup from 'yup';
import { actions } from '../redux-modules/reducers/actions';

const NewProductForm = (props) => {
    const formik = useFormik({
        initialValues: {
            title: '',
            author: '',
            year: '',
            rating: '',
        },
        validationSchema: yup.object({
            title: yup.string()
                .min(3, 'Must be at least 3 characters')
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
            author: yup.string()
                .max(20, 'Must be 20 characters or less')
                .min(2, 'Must be at least 2 characters')
                .required('Required'),
            year: yup.number('Must be number').required(),
            rating: yup.number('Must be number').required(),
        }),
        onSubmit: values => {
            let newProduct = values
            props.addProduct(newProduct);
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="firstName">Title</label>
            <input
                id="title"
                name="title"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.title}
            />
            {formik.touched.title && formik.errors.title ? (
                <div className="error">{formik.errors.title}</div>
            ) : null}

            <label htmlFor="author">Author</label>
            <input
                id="author"
                name="author"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.author}
            />
            {formik.touched.author && formik.errors.author ? (
                <div className="error">{formik.errors.author}</div>
            ) : null}

            <label htmlFor="year">Year</label>
            <input
                id="year"
                name="year"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.year}
            />
            {formik.touched.year && formik.errors.year ? (
                <div className="error">{formik.errors.year}</div>
            ) : null}

            <label htmlFor="rating">Rating</label>
            <input
                id="rating"
                name="rating"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.rating}
            />
            {formik.touched.rating && formik.errors.rating ? (
                <div >{formik.errors.rating}</div>
            ) : null}
            <button type="submit" className="submitButton">Submit</button>
        </form>
    );
};

const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = (dispatch) => {
    return {
        addProduct: (productsData) => dispatch({ type: actions.ADD_NEW_PRODUCT, productsData })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewProductForm);
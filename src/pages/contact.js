import React, { useState } from "react";
import { graphql } from "gatsby";
import styles from './index-css-modules.module.css';
import clsx from 'clsx';
import axios from 'axios';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { checkValidity } from "../utils/helpers";

export default function Contact({data, location}) {

    const [values, setValues] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [errors, setErrors] = useState({
        name: null,
        email: null,
        message: null,
        form: null,
    });

    const [status, setStatus] = useState('unsubmitted');

    const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
        setErrors({ ...errors, form: null });
    };

    const handleValidityCheck = (event, rules) => {
        const { name, value } = event.target;
        const results = checkValidity(value, rules);
        results[0] ? setErrors({ ...errors, [name]: null }) : setErrors({ ...errors, [name]: results[1] });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (Object.values(values).filter(val => val === '').length > 0) {
            return setErrors({ ...errors, form: 'Please complete all fields before submitting' });
        } else if (Object.entries(errors).filter(err => err[1] && err[0] !== 'form').length > 0) {
            return setErrors({ ...errors, form: 'Please correct the above errors before submitting' });
        };

        const { name, email, message } = values;
        setStatus('submitting');

        axios.post(
            event.target.action,
            {
                name,
                email,
                message,
                _replyto: email,
                _subject: `Email to Brian Friel from ${name}`,
                _gotcha: document.getElementById(`bottrap`).value, //If the _gotcha hidden element has a value, Formspree will silently ignore it on their end!
            }
        )
        .then((resp) => {
            console.log('CONTACT SUBMIT RESP ', resp);
            setStatus('submitted');
            setValues({
                name: '',
                email: '',
                message: '',
            });
            setTimeout(() => setStatus('unsubmitted'), 5000);
        })
        .catch((err) => {
            console.log('CONTACT SUBMIT ERROR ', err);
            setStatus('submitted');
            setErrors({...errors, form: 'Something went wrong! Please try again'});
        });
    };

    const renderSubmit = () => {
        if (status === 'submitted') {
            return <div className="text-center" style={{ color: `#4BB543` }}>Thanks! I&#39;ll get back to you as soon as I can.</div>
        } else if (status === 'submitting') {
            return <button className="submit-button" disabled type="submit">Submitting..</button>;
        }; 
        return <button className="submit-button" type="submit">Submit</button>;
    }

    return (
        <Layout location={location} title={data.site.siteMetadata.title}>
            <SEO title="About" />
            <h1 className={clsx(styles.title, `text-center`)}>
                Contact Me
            </h1>
            <form
                onSubmit={handleSubmit}
                action="https://formspree.io/xrgzjzap"
                method="POST"
            >
                <label>
                    <h5 
                        className="light-subheader"
                        style={{color: errors.name ? `red` : `#000`}}
                    >
                        Name
                    </h5>
                    <input 
                        type="text" 
                        name="name" 
                        className="user-input"
                        value={values.name}
                        onChange={event => handleChange(event)}
                        onBlur={event => handleValidityCheck(event, {required: true})}
                        style={{borderColor: errors.name ? `red` : `#999`}}
                        placeholder="Your name"
                    />
                    <p className="error-text">{errors.name}</p>
                </label>
                <label>
                    <h5 
                        className="light-subheader"
                        style={{color: errors.email ? `red` : `#000`}}
                    >
                        Email
                    </h5>
                    <input 
                        type="text" 
                        name="email" 
                        className="user-input"
                        value={values.email}
                        onChange={event => handleChange(event)}
                        onBlur={event => handleValidityCheck(event, {required: true, isEmail: true})}
                        style={{borderColor: errors.email ? `red` : `#999`}}
                        placeholder="Your email"
                    />
                    <p className="error-text">{errors.email}</p>
                </label>
                <label>
                    <h5 
                        className="light-subheader"
                        style={{color: errors.message ? `red` : `#000`}}
                    >
                        Message
                    </h5>
                    <textarea 
                        name="message" 
                        className="user-input"
                        value={values.message}
                        onChange={event => handleChange(event)}
                        onBlur={event => handleValidityCheck(event, {required: true})}
                        style={{borderColor: errors.message ? `red` : `#999`}}
                        placeholder="Your message..."
                    />
                    <p className="error-text">{errors.message}</p>
                </label>
                <input id="bottrap" type="text" name="_gotcha" style={{ display: `none` }} />
                {renderSubmit()}
                <p className="error-text text-center" style={{marginTop: `7px`}}>{errors.form}</p>
            </form>
        </Layout>
    );
};

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
}
`;
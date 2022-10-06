import { useState, useRef, useCallback } from "react";
import emailjs from '@emailjs/browser'
import { emptyFields, handleValidation } from "../../helpers";
import { EmailForm, StatusField } from './styled'

const {REACT_APP_EMAIL_SERVICE_ID, REACT_APP_EMAIL_SERVICE_TEMPLATE, REACT_APP_EMAIL_SERVICE_PUBLIC_KEY} = process.env

const ContactForm = ({container}) => {

    const formRef = useRef(null)

    const [formData, setFormData] = useState({
        name: '', email: '', subject: '', message: ''
    })
    const [status, setStatus] = useState({
        code: null, msg: ''
    })

    const handleChange = (event) => {
        const {name, value} = event.target
        if(name === 'message') autogrow(event)
        setFormData({...formData, [name]: value})
        setStatus({...status, code: null})
    }

    const autogrow = useCallback((event) => {
        const {target} = event
        target.style.height = 'auto'
        target.style.height = target.scrollHeight+'px'
        container.current.scrollTo({top:container.current.scrollHeight})
    },[container])

    const handleSubmit = (event) => {
        event.preventDefault()
        if(emptyFields(formData)) return setStatus({code: 1, msg:'Please fill all fields'})
        if(!handleValidation(formData.email)) return setStatus({code: 2, msg: 'Invalid email'})
        emailjs.sendForm(REACT_APP_EMAIL_SERVICE_ID, REACT_APP_EMAIL_SERVICE_TEMPLATE, formRef.current, REACT_APP_EMAIL_SERVICE_PUBLIC_KEY)
        formRef.current.reset()
        setStatus({code: 0, msg:'Message sent'})
    }

    return (
        <EmailForm onSubmit={handleSubmit} onBlur={() => formData.email && !handleValidation(formData.email) && setStatus({code: 2, msg: 'Invalid email'})} ref={formRef}>
            <input placeholder="Your name or corporation" name='name' onChange={handleChange}/>
            <input placeholder="Your email address" name='email' onChange={handleChange} />
            <input placeholder="Subject" name='subject' onChange={handleChange}/>
            <textarea placeholder="Message" name='message' onChange={handleChange}/>
            <div >
                <StatusField code={status.code}>{status.msg}</StatusField>
                <button type='submit'>Submit</button>
            </div>
        </EmailForm>
    )
}

export default ContactForm

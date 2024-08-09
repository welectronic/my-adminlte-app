// src/components/ContactForm.js
import React, {useState} from 'react';

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
        subscribe: false,
        contactMethod: 'email'
      });

      const [errors,setErrors] =useState({});

      const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
          ...formData,
          [name]: type === 'checkbox' ? checked : value
        });
      };

      const validate = () => {
        let newErrors = {}; 
        if (!formData.name.trim()) {
          newErrors.name = 'Name is required';
        }
        if (!formData.email.trim()) {
          newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          newErrors.email = 'Email is invalid';
        }
        if (!formData.subject.trim()) {
          newErrors.subject = 'Subject is required';
        }
        if (!formData.message.trim()) {
          newErrors.message = 'Message is required';
        }
        if (!formData.contactMethod) {
            newErrors.contactMethod = 'Please select a contact method';
        }
        return newErrors;
      }

      const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validate();
        if (Object.keys(newErrors().length > 0)){
            setErrors(newErrors);
        } else {
            console.log('Form submitted:', formData);
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: '',
                subscribe: false,
                contactMethod: 'email'
              });
              setErrors({});
        }
      };


  return (
    <div className="card card-primary">
      <div className="card-header">
        <h3 className="card-title">Contact Us</h3>
      </div>
      <form>
        <div className="card-body">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" id="name" placeholder="Enter your name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email" className="form-control" id="email" placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <select className="form-control" id="subject">
              <option>Feedback</option>
              <option>Support</option>
              <option>General Inquiry</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea className="form-control" id="message" rows="4" placeholder="Enter your message"></textarea>
          </div>
          <div className="form-group">
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="subscribe" />
              <label className="form-check-label" htmlFor="subscribe">Subscribe to newsletter</label>
            </div>
          </div>
          <div className="form-group">
            <label>Preferred Contact Method</label>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="contactMethod" id="emailMethod" value="email" />
              <label className="form-check-label" htmlFor="emailMethod">Email</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="contactMethod" id="phoneMethod" value="phone" />
              <label className="form-check-label" htmlFor="phoneMethod">Phone</label>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;


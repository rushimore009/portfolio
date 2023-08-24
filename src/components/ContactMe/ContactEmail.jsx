import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './ContactEmail.css'; // Make sure to create and import your CSS file
import contactGif from './contact.gif'
import EmailIcon from '@mui/icons-material/Email';
import PendingIcon from '@mui/icons-material/Pending';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Button } from '@mui/material';
import axios from 'axios';
import $ from "jquery"
import { NavLink } from 'react-router-dom';
import SendIcon from '@mui/icons-material/Send';
import ReplyIcon from '@mui/icons-material/Reply';

const ContactEmail = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error,setError]=useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setError("");
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
    setError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if(!email && message){
        setError('Please Enter Your Email Id');
        return;
    }
    else if(email && !message){
        setError('Please Enter Your Email Message');
        return;
    }
    else if(!email && !message) {
        setError("Please fill in both email and message fields.");
      return;
    }

    setIsSending(true);

    // Replace these values with your own
    const service_id = process.env.EmailJs_SERVICE_ID;
    const template_id = process.env.EmailJs_TEMPLATE_ID;
    const user_id = process.env.EmailJs_PUBLIC_API_KEY;
    const myEmail = process.env.EMAIL_ID;

    var data = {
        service_id: service_id,
        template_id: template_id,
        user_id: user_id,
        to_email: myEmail,
        from_email: email, 
        message:message
    };

    $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json'
        }).done(()=> {
            alert('Your mail is sent!');
            
        }).fail((error)=> {
            alert('Oops... Mail is not Sent');
            setIsSent(false);
            setIsSending(false)
            setError('Oops... Mail is not Sent');
        });

    // axios.post('https://api.emailjs.com/api/v1.0/email/send', data)
    //   .then((response)=> {
    //     console.log(response.data);
    //   })
    //   .catch((error)=> {
    //     console.log(error);
    //   });

    // emailjs.send(service_id, template_id, { to_email: myEmail, from_email: email, message }, publicId)
    //   .then(() => {
    //     setIsSending(false);
    //     setIsSent(true);
    //   })
    //   .catch((error) => {
    //     setIsSending(false);
    //     console.error('Error sending email:', error);
    //   });
  };

  return (
<div className="email-form-container shadow p-4">        
    <div className="card">
        <div className='card-title center shadow p-2'> <EmailIcon fontSize='large'/>Send an Email </div>
        <div className="card-body">
            <span className='error'>{error}</span>
        <form className="email-form" onSubmit={handleSubmit}>
        <table className='table table-striped table-bordered table-hover table-light text-center'>
            <tbody>
                <tr>
                    <td><label htmlFor="email">Your Email:</label></td>
                    <td><input
                        type="email"
                        id="email"
                        value={email}
                        onChange={handleEmailChange}
                        disabled={isSending || isSent}
                        /></td>
                </tr>
                <tr>
                    <td> <label htmlFor="message">Message:</label></td>
                    <td> <textarea
                            id="message"
                            rows="4"
                            value={message}
                            onChange={handleMessageChange}
                            disabled={isSending || isSent}
                            /></td>
                </tr>
                
                <tr className='justify-content-end'>
                    <td>
                        <NavLink to='/contact' className='nav-link'>
                            <Button variant='contained' color='warning' endIcon={<ReplyIcon />}>Back</Button>
                        </NavLink>
                    </td>
                    <td>
                        <PendingIcon fontSize='large' style={{display:isSending?"block":"none"}}/>
                        <CheckCircleIcon fontSize='large' style={{display:isSent?"block":"none"}}/>
                        &nbsp;
                        <Button variant="contained" type="submit" disabled={isSending || isSent} endIcon={<SendIcon />}>
                        {isSending ? 'Sending...' : isSent ? 'Sent!' : 'Send'}
                        </Button>
                    </td>
                    
                </tr>
            </tbody>
        </table>
      </form>
            </div>
        </div>
    </div>
  );
};

export default ContactEmail;

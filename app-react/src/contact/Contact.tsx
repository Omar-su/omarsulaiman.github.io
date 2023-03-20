import { NavBar } from "../utils/NavigationBar";
import "./Contact.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import ReCAPTCHA from 'react-google-recaptcha';
import { useState } from "react";
import emailjs from '@emailjs/browser';

const SITEKEY_ENV = process.env.REACT_APP_RECAPTCHA_TOKEN;
const service_id = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const template_id = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const public_api = process.env.REACT_APP_EMAILJS_PUBLIC_API;

export function ContactPage(){

  return(<div>
    <div>
      <NavBar></NavBar>
    </div>
    <div className="contact-info">
      <div>
        <span>CONTACT</span>
        <p>In case you have any questions, are curious about a particular topic, or are interested in a project collaboration, fill out the form below and it will send an email directly to me. </p> 
      </div>
    </div>
    <div className="contact-form">
        <ContactForm></ContactForm>
    </div> 
  </div>);

}



function ContactForm(){

  const [isHuman, setIsHuman] = useState(false);

  function handleSubmit(e: { preventDefault: () => void; }) {
    e.preventDefault();
    if(isHuman){
      const name = (document.getElementById("inputName") as HTMLInputElement).value;
      const lastName = (document.getElementById("inputLastName") as HTMLInputElement).value;
      const email = (document.getElementById("inputEmail") as HTMLInputElement).value;
      const subject = (document.getElementById("inputSubject") as HTMLInputElement).value;
      const message = (document.getElementById("inputMessage") as HTMLTextAreaElement).value;

      const template = {
        from_name : name,
        last_name : lastName,
        email : email,
        subject : subject,
        message : message
      };

      sendEmail(template);

      console.log("submitted ");
      console.log(`Name: ${name}\nLast Name: ${lastName}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`);

    } else {
      // show error message or redirect to CAPTCHA
      console.log("not submitted");
    }
  }
  
  function sendEmail(template: { from_name: string; last_name: string; email: string; subject: string; message: string; }) {


    if (service_id && template_id && public_api) {
      emailjs.send(service_id, template_id, template, public_api)
        .then((result: { text: any; }) => {
          console.log(result.text);
        }, (error: any) => {
          console.log(error.text);
        });
    } else {
      console.log("One or more emailjs variables are undefined", process.env);
    }
  }

  // function verifyToken(token: string) {
  //   axios.post('/api/verify-recaptcha', { token }, {
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   })
  //   .then((response: { data: any; }) => {
  //     const data = response.data;
  //     if (data.success) {
  //       setIsHuman(true);
  //     } else {
  //       setIsHuman(false);
  //     }
  //   })
  //   .catch((error: any) => {
  //     console.error('Error verifying reCAPTCHA token:', error);
  //   });
  // }

  function onChange(value: any) {
    // send the reCAPTCHA token to the server for verification
    // verifyToken(value);
    setIsHuman(true);
  }

  function onExpired() {
    setIsHuman(false);
  }

  return(
      <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="inputEmail4">Name*</label>
          <input type="text" className="form-control" id="inputName" placeholder="First Name"/>
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="inputPassword4">Last Name</label>
          <input type="text" className="form-control" id="inputLastName" placeholder="Last Name"/>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="inputEmail">Email *</label>
        <input type="email" className="form-control" id="inputEmail" placeholder="name@gmail.com"/>
      </div>
      <div className="form-group">
        <label htmlFor="inputSubject">Subject *</label>
        <input type="text" className="form-control" id="inputSubject" placeholder="Work opportunity"/>
      </div>
      <div className="form-group message-form">
        <label htmlFor="inputSubject">Message *</label>
        <textarea className="form-control" id="inputMessage" placeholder=""></textarea>
      </div>
      {SITEKEY_ENV ? (<div className="recaptcha">
        <ReCAPTCHA sitekey={SITEKEY_ENV} onChange={onChange} onExpired={onExpired}/>
      </div>) : 
      (<div>Loading...</div>)}
      <button type="submit" className="btn" disabled={!isHuman}>Submit</button>
  </form>
  );
}
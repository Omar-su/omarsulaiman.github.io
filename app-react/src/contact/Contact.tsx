import { NavBar } from "../utils/NavigationBar";
import "./Contact.css"
import 'bootstrap/dist/css/bootstrap.min.css';

export function ContactPage(){

  return(<div>
    <div>
      <NavBar></NavBar>
    </div>
    <div className="contact-info">
      <div>
        <h1>CONTACT</h1>
        <p>In case you have any questions, are curious about a particular topic, or are interested in a project collaboration, fill out the form below and it will send an email directly to me. </p> 
      </div>
    </div>
    <div className="contact-form">
        <ContactForm></ContactForm>
    </div> 
  </div>);

}



function ContactForm(){

  return(
      <form>
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
        <textarea className="form-control" id="inputSubject" placeholder=""></textarea>
      </div>

    <button type="submit" className="btn">Submit</button>
  </form>
  );
}
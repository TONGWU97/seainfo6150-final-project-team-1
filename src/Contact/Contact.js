import React from 'react';
import style from './Contact.module.css';

const Contact = () => (
<div>
  <div className = {style.contact_background}></div>
  <div className = {style.contact}>

  <div className = {style.contact_text}>
  <h1>Contact</h1>
  <p>Feel free to contact us.</p>

  <table>
      <tr>
        <td><img src = "./assets/img/contact/email.png" alt='Email'/></td>
        <td>Email</td>
        <td>contact@vechicledealer.com</td>
      </tr>
      <tr>
        <td><img src = "./assets/img/contact/phone.png" alt='Phone'/></td>
        <td>Phone</td>
        <td>(206)382-4327</td>
      </tr>
      <tr>
        <td><img src = "./assets/img/contact/address.png" alt='Address' /></td>
        <td>Address</td>
        <td>401 Terry Street, Seattle, WA98109</td>
      </tr>
  </table>
  </div>

  <div className = {style.contact_messagebox}>
  <h1>Leave your message, we will contact you as soon as possible.</h1>
    <form name = "Contact_Form">

    <br></br>
    Name:
    <input type = "text" name = "Name" value = "Your Fullname"></input>

    <br></br>
    Email Address:
    <input type = "text" name = "email" value = "Email Address"></input>

    <br></br>
    Subject:
    <input type = "text" name = "subject" value = "subject"></input>

    <br></br>
    Message:
    <textarea>Leave your message.</textarea>
    <br></br>
    <button type = "submit" name = "submit" value = "Submit">Submit</button>
    </form>
  </div>

  </div>
</div>

)



export default Contact;

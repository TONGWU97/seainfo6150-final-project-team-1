import React from 'react';
import style from './Contact.module.css';

const Contact = () => (
<div>

  <div className = {style.contact_background}></div>

  <div className = {style.container}>

  <div className = {style.contact_text}>
  <h1>Contact</h1>
  <p>Feel free to contact us.</p>

  <table>
  <tbody>
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
  </tbody>
  </table>
  </div>

  <div className = {style.contact_messagebox}>
  <h2>Leave your message, we will contact you as soon as possible.</h2>
    <form name = "Contact_Form">

    <br></br>
    Name
    <br></br>
    <input type = "text" name = "Name" value = "Your FullName"></input>

    <br></br>
    Email Address
    <br></br>
    <input type = "text" name = "email" value = "Email Address"></input>

    <br></br>
    Subject
    <br></br>
    <input type = "text" name = "subject" value = "Subject"></input>

    <br></br>
    Message
    <br></br>
    <textarea>Leave your message.</textarea>
    <br></br>
    <button type = "submit" name = "submit" value = "Submit">Submit</button>
    </form>
  </div>

  </div>
</div>


)



export default Contact;

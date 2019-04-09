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

  </div>
</div>

)



export default Contact;
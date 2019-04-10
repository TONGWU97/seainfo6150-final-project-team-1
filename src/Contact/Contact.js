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
<<<<<<< HEAD
    <tr>
      <td><img src = "./assets/img/contact/email.png"  alt = " " / ></td>
      <td>Email</td>
      <td>contact@vechicledealer.com</td>
    </tr>
    <tr>
      <td><img src = "./assets/img/contact/phone.png" alt = " " /></td>
      <td>Phone</td>
      <td>(206)382-4327</td>
    </tr>
    <tr>
      <td><img src = "./assets/img/contact/address.png" alt = " " /></td>
      <td>Address</td>
      <td>401 Terry Street, Seattle, WA98109</td>
    </tr>
=======
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
>>>>>>> fb612c2d0f6dd465b83e758b36f5cc25e336b4a8
  </table>
  </div>

  </div>
</div>

)



export default Contact;

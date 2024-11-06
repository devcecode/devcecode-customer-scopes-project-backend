import {Resend} from "resend";
import axios from "axios";

export async function SendEmail() {
  const { data: htmlContent } = await axios.get('https://customer-scopes-project.netlify.app/email-template.html');

  const resend = new Resend('re_FbfJ8kd1_Q8etDXxyW1ESCVQfPusoncze');

  try {
    const response = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'anthony@customerscoops.com ',
      subject: 'Test FE Developer',
      html: htmlContent
    });
  
    console.log(response)
    
  } catch (error) {
    console.log(error.message)
  }
}
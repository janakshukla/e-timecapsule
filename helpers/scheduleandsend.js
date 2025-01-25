import EmailTemplate  from '../components/Email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function SendCapsule(capsule,user)  {
 try {
     const { data, error } = await resend.emails.send({
       from: 'Capsule@janak2004.tech',
       to: user.primaryEmailAddress.emailAddress,
       subject: 'Your Capsule is Ready!',
       react: EmailTemplate({ 
           title: capsule.title,
           description: capsule.description,
           image: capsule.image,
           buttonUrl: ''
        }),
     });
   
     if (error) {
       return json(error);
     }
   
     return json(data);
 } catch (error) {
    console.error('error occur while sending email',error);
 }
};

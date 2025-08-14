import React, { useState } from 'react'
import emailjs from '@emailjs/browser';
import Alert from '../components/Alert';
import { Particles } from '../components/Particles';
//service_s3vf0zk
//template_rp9frb6
const Contact = () => {
  const[formData, setFormData] = useState({
    name:"",
    email:"",
    msg:"",
  });
  const handleChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value});
  }

  const [isLoading, setIsLoading] = useState(false);
  const [showAlert,setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("Success");
  const [alertMessage, setAlertMessage] = useState("");

  const handleSubmit = async (e)=>{
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send("service_s3vf0zk", "template_rp9frb6",{
        from_name: formData.name,
        to_name: "Kishore Rajesh",
        from_email: formData.email,
        to_email: "sparkablekishore@gmail.com",
        message: formData.msg,    
      },"y5l3E11qh2DJfBSLG");
      setIsLoading(false);
      setAlertType("success");
      alert("Success!!  :)");
      setFormData({name:"",email:"",msg:""});
      setAlertMessage("Your Message has been sent and Kishore will Reply You soon !");
      setShowAlert("true");
      setTimeout(()=>{
        setShowAlert(false);
      },5000);
    } catch (error) { 
      setIsLoading(false);
      alert("failed!!   :(");
      setAlertType("Failed");
      setAlertMessage("Your Message didnt reach Kishore , Try Again later ! ");
      setShowAlert("true");
      setTimeout(()=>{
        setShowAlert(false);
      },5000);
    }
  };


  return (
   <section className="relative flex items-center c-space section-spacing">
      <Particles
      className="absolute inset-0 -z-50"
      quantity={100}
      ease={80}
      color="#ffffff"
      refresh
      />   
        {showAlert && <Alert type={alert} text={alertMessage} />}
        <div className='flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary'>
           <div className='flex flex-col items-start w-full gap-5 mb-10 '>
                <h2 className='text-heading'> Lets Talk</h2>
                <p className='font-normal text-neutral-400'> Whether you're   looking to build a new website, improve your existing platform, or bring a unique project to life, I'm here to help
                </p>
            </div>
            <form className='w-full' onSubmit={handleSubmit}>
              <div className='mb-5'>
                <label htmlFor='name' className='feild-label'>Full Name</label>
                <input 
                id='name' 
                name='name' 
                type='text' 
                className='field-input field-input-focus'
                placeholder='Enter your name'
                autoComplete='name'
                value={formData.name}
                onChange={handleChange}
                required
                
                />
              </div>
               <div className='mb-5'>
                <label htmlFor='name' className='feild-label'>Email</label>
                <input 
                id='email' 
                name='email' 
                type='email' 
                className='field-input field-input-focus'
                placeholder='Enter your mail id'
                autoComplete='email'
                value={formData.email}
                onChange={handleChange}
                required
                />
              </div>
               <div className='mb-5'>
                <label htmlFor='name' className='feild-label'>Message</label>
                <textarea 
                id='msg' 
                name='msg' 
                type='text' 
                className='field-input field-input-focus'
                placeholder='Share your thoughts...'
                rows='4'
                autoComplete='message'
                value={formData.msg}
                onChange={handleChange}
                required
                />
              </div>
              <button type="submit" className='w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation'>
                {!isLoading ? "Send":"Sending..."}
              </button>
            </form>
        </div>
    </section>
  )
}

export default Contact
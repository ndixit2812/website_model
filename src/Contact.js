import React, { useState } from 'react'

const Contact = () => {
  const [userData, setUserData] = useState({
          firstName:"",
          lastName:"",
          phone:"",
          email:"",
          address:"",
          message:""
  });


  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({...userData, [name]:value })
  }

  const submitData = async(e) => {
      e.preventDefault();
      const {firstName, lastName, phone, email, address, message} =userData;

      if(firstName && lastName && phone && email && address && message){

      const res = fetch('https://reactfirebasewebsite-6fe51-default-rtdb.firebaseio.com/userDataRecord.json',
      {
          method:"POST",
          headers:{
              "Content-Type" : "application/json",
          },
          body:JSON.stringify({
            firstName, 
            lastName, 
            phone, 
            email, 
            address, 
            message
          })
      });
      
    if(res) {
        setUserData({
            firstName:"",
            lastName:"",
            phone:"",
            email:"",
            address:"",
            message:"" 
        })
        alert('Data stored successfully');
    }
    else{
        alert('Please, fill the data')
    }
}
else{
    alert('Please, fill the data')
}
  }

    return (
        <>
            <section className="contactus-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-10 mx-auto">
                            <div className="row">
                                <div className="contact-leftside col-12 col-lg-5">
                                    <h1 className="main-heading fw-bold">Connect with our <br />Sales Team.</h1>
                                    <p className="main-hero-para">It is the page where you can interact with the team and also able to know the work flow.</p>
                                    <figure>
                                        <img src="./ImagePay/herosales.jpg" alt="hero1" className="img-fluid" />
                                    </figure>
                                </div>
                                <div className="contact-rightside col-12 col-lg-7">
                                    <form method="POST">

                                        <div className="row">
                                            <div className="col-12 col-lg-6 contact-input-field">
                                                <input type="text" 
                                                placeholder="First Name"
                                                 name="firstName" 
                                                 className="form-control" 
                                                 id="" 
                                                 value={userData.firstName}
                                                 onChange={postUserData}
                                                 />
                                            </div>
                                            <div className="col-12 col-lg-6 contact-input-field">
                                                <input type="text" 
                                                placeholder="Last Name" 
                                                name="lastName" 
                                                className="form-control" 
                                                id=""
                                                value={userData.lastName}
                                                 onChange={postUserData}
                                                 />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-12 col-lg-6 contact-input-field">
                                                <input type="text"
                                                 placeholder="Phone no." 
                                                 name="phone" 
                                                 className="form-control" 
                                                 id=""
                                                 value={userData.phone}
                                                 onChange={postUserData}
                                                 />
                                            </div>
                                            <div className="col-12 col-lg-6 contact-input-field">
                                                <input type="text" 
                                                placeholder="Email id" 
                                                name="email" 
                                                className="form-control"
                                                 id=""
                                                 value={userData.email}
                                                 onChange={postUserData}
                                                 />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 contact-input-field">
                                                <input type="text" 
                                                placeholder="Add address" 
                                                name="address" 
                                                className="form-control" 
                                                id="" 
                                                value={userData.address}
                                                 onChange={postUserData}
                                                 />
                                            </div>
                                            <div className="col-12">
                                                <input type="text" 
                                                placeholder="Enter your message" 
                                                name="message" 
                                                className="form-control" 
                                                id="" 
                                                value={userData.message}
                                                 onChange={postUserData}
                                                 />
                                            </div>
                                        </div>
                                        <div class="form-check form-checkbox-style">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                            <label class="form-check-label" className="main-hero-para">
                                                I agree terms and condition and also the policy that the webDeveloper may contact me at the email address
                                                or phone number which is mentioned above.
                                            </label>
                                        </div>
                                        <button type="submit" className="btn btn-style w-100" onClick={submitData}>Submit</button>


                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Contact;

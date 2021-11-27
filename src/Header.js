import React from 'react'

const Header = () => {
    return (
        <>
           <header>
               <section className="container main-hero-container">
                 <div className="row">
                     <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start order-lg-first order-last">
                         <h1 className="display-2">Online Payment Made <br />
                         Easy for You</h1>
                         <p className="main-hero-para">
                             Lorem ipsum, dolar sit amet consetmentator adipsicing elit. Et,
                             quia quis? Ipsa deprecate officia and desreumnt volume quam, 
                             nisi adia temproc recumsamea volupmetce quam, nisi adisas tempac 
                             recumasac.
                         </p>
                         <h3>Get early access for you</h3>
                         <div className="input-group mt-3">
                             <input type="text" className="rounded-pill w-75 w-lg-75 me-3 p-2 form-control-text" placeholder="Enter your email" />
                             <div className="input-group-button">Get it now</div>
                         </div>
                     </div>

                     <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images order-md-first order-sm-first">
                         <img src="./ImagePay/hero2.jpg" alt="hero2" className="img-fluid" />
                         <img src="./imagePay/herosales.jpg" alt="herosales"  className="img-fluid main-hero-img2" />

                     </div>
                     
                 </div>

               </section>
           </header>
        </>
    )
}

export default Header

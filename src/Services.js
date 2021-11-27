import React, { useState } from 'react';
import ServiceAPI from './API/ServiceAPI';

const Services = () => {
    const [serviceData, setServiceData] = useState(ServiceAPI);
    return (
        <>
            <section className="services-main-container">
                <div className="container service-container">
                    <h1 className="main-heading text-center fw-bold">how to send Money</h1>
                    <div className="row">

                        {
                            serviceData.map((curElem) => {
                                const { id, logo, title, info } = curElem
                                return <>
                                    <div className="col-12 col-lg-4 col-xxl-4 work-container-subdiv" key={id}>
                                        <i className={`fontawesome-style ${logo}`}></i>
                                        <h2 className="sub-heading">{title}</h2>
                                        <p className="main-hero-para">{info}</p>
                                    </div>
                                </>
                            })
                        }

                    </div>
                </div>
            </section>

        </>
    )
}

export default Services;

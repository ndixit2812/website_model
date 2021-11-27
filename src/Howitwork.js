import React, { useState } from 'react';
import WorkAPI from './API/WorkAPI';

const Howitwork = () => {

    const [workData, setWorkData] = useState(WorkAPI);
    console.log(WorkAPI);
    return (
        <>
            <section>
                <div className="work-container container">
                    <h1 className="main-heading text-center">How does it work</h1>
                    <div className="row">
                        {
                            workData.map((currEle) => {
                                const { id, logo, title, info } = currEle;
                                return (
                                    <>
                                        <div className="col-12 col-lg-4 work-container-subdiv">
                                            <i class={`fontawesome-style ${logo}`}></i>
                                            <h2 className="sub-heading">{title}</h2>
                                            <p className="main-hero-para w-100">{info}</p>
                                        </div>
                                    </>
                                )

                            })
                        }

                    </div>
                </div>
            </section>
        </>
    )
}

export default Howitwork;

import React from 'react';
import image from '../../../images/img.png';
const About = () => {
      return (
                  <div className="container d-flex mt-5">
                        <div className="col-md-6 col-sm-6 col-12 mt-5">
                              <h1 className='fw-bold mt-5 ps-5'>About <span className='text-success'> Service Boy</span></h1>
                              <p className='text-muted mt-5 ps-5'> Service Boy is No. 1 on-demand cleaning service platform in Bangladesh. We connect our users with verified professional cleaners. You can book hourly, one-off clean or schedule a regular cleaning for your home and office. We launched pilot in mid 2021, ran beta till mid 2021. So far we have trained and created jobs for over 2,000 professionals, who have served over 70,000 households and 5000 businesses. Our vision is to train, certify and employ 10,000 people by next 5 years. We are a team of 35 passionate full-time people, including 10 brilliant software engineers. We are building a technology that is scalable in international market.</p>
                        
                        </div>
                        <div className="col-md-6 col-sm-6 col-12 mt-5 ps-5">
                              <img src={image} alt="" srcset=""/>
                        </div>
                  </div>
      );
};

export default About;
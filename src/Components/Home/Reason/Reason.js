import React from 'react';
import './Reason.css';
import c1 from '../../../images/c1.png';
import c2 from '../../../images/c2.png';
import c3 from '../../../images/c3.png';
import c4 from '../../../images/c4.png';
import c5 from '../../../images/c5.png';
import c6 from '../../../images/c6.png';

const chooseData = [
      {
            img:c1,
            title:'Online Booking',
            description:'Book any service instantly using a secure mobile app or website. Track your booking with real time data feed and service boy location. Rate your service boy and give feedback.'
      },
      {
            img:c2,
            title:'Easy & Secured',
            description:'Getting things done with Service Boy is easy. Besides, your data is secured in our cloud system, powered by latest technologies and security tools.'
      },
      {
            img:c3,
            title:'Verified & Insured Pro',
            description:'All Service Boy registered service professionals are thoroughly verified, 4-steps trained and covered safety and health insurance.'
      },
      {
            img:c4,
            title:'Fastest Job Delivery',
            description:'Don’t wait days, weeks. You book a service with Service Boy, you get it done in hours.'
      },
      {
            img:c5,
            title:'Service Warranty',
            description:'All the services are covered under 7 days service warranty. No questions asked.'
      },
      {
            img:c6,
            title:'Satisfaction Guaranteed',
            description:'If you are not happy with our service, we do it again and again until you smile.'
      }
]

const Reason = () => {
      return (
            <div>
                  <h1 className='text-center fw-bold mt-5'>Why Choose <span className='text-success'> Service Boy?</span></h1>
                  <div className="container d-flex flex-wrap mt-5 p-5">
                        {
                              chooseData.map(choose=>
                              <div className="col-md-3 m-5 p-5 reason-card">
                                    <img className="img-fluid mx-auto d-block" width={60} src={choose.img} alt=""/>
                                    <h3 className='text-center mt-3 fw-bold'>{choose.title}</h3>
                                    <p className='text-center mt-3 text-muted'>{choose.description}</p>
                              </div>            
                        )
                        }
                  </div>
            </div>
      );
};

export default Reason;
import React from 'react';
import f1 from '../../../images/f1.png';
import f2 from '../../../images/f2.png';
import f3 from '../../../images/f3.png';

const featuredData = [
      {
            img:f1,
            name:'Book',
            description:'Easiest way to book a service is online! Provide necessary details while we take you through a quick booking journey. If you find it difficult, call +88 01611 404405. Our team should guide you through.'
      },
      {
            img:f2,
            name:'Confirm',
            description:'Get a call from our customer manager, confirm your schedule right away!'
      },
      {
            img:f3,
            name:'Relax',
            description:'Sit back & relax while a verified service professional do your job and help you become more productive in life!'
      }
]

const FeaturedService = () => {
      return (
            <div>
                  <h1 className='text-center mt-5 fw-bold'>How<span className='text-success'> Service Boy</span> Works</h1>
                  <div className="container d-flex flex-wrap mt-5">
                        {
                              featuredData.map(featured=>
                              <div className="col-md-4 mt-5 p-5">
                                    <img className="img-fluid mx-auto d-block" width={100} src={featured.img} alt=""/>
                                    <h3 className='text-center mt-3 fw-bold'>{featured.name}</h3>
                                    <p className='text-center mt-3 text-muted'>{featured.description}</p>
                              </div>            
                        )
                        }
                  </div>
            </div>
      );
};

export default FeaturedService;
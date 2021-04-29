import React from 'react';
import matilda from '../../../images/s2.jpg'
import trudo from '../../../images/s1.jpg'
import franklin from '../../../images/s3.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTicketAlt } from '@fortawesome/free-solid-svg-icons';

const teamData = [
      {
            image:trudo,
            name:'Trudo Hasan',
            role:'Carpenter',
            experience:10
      },
      {
            image:matilda,
            name:'MatilDa Akter',
            role:'Baby Sitter',
            experience:15
      },
      {
            image:franklin,
            name:'Franklin Rahman',
            role:'Handy Man',
            experience:20
      }
]
const Team = () => {
      return (
            <div>
                  <h1 className='text-center mt-5 fw-bold'>Meet Our <span className='text-success'>Team</span></h1>
                  <div className="container d-flex flex-wrap mt-5">
                  {
                        teamData.map(service=> 
                              
                              <div className="col-md-4 p-5">
                              <div class="card">

                                    <div class="view overlay">
                                          <img class="card-img-top" style={{height:'500px'}} src={service.image}
                                                alt="" />
                                          <a href="/home">
                                                <div class="mask rgba-white-slight"></div>
                                          </a>
                                    </div>

                                    <div class="card-body">

                                          <h4 className="card-title">{service.name}</h4>
                                          <p className="card-text">{service.role}</p>
                                          <h3>Experience: {service.experience}+ years</h3>
                                          <a href="/home" class="btn btn-success mt-3">Hire Now <FontAwesomeIcon icon={faTicketAlt} /></a>

                                    </div>

                              </div>
                        </div>
                              )
                  }
                  </div>
            </div>
      );
};

export default Team;
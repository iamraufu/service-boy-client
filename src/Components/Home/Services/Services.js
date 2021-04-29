import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router';

const Services = () => {
      const history = useHistory();
      const [service, setService] = useState([])

      useEffect(() => {
            fetch('https://secret-lake-77755.herokuapp.com/services')
                  .then(res => res.json())
                  .then(data => {
                        setService(data);
                  })
      }, [])

      const handleClick = id => {
            history.push(`/bookings/${id}`)
      }

      return (
            <div>
                  <h1 className='text-center mt-5 fw-bold'>Our <span className='text-success'>Services</span></h1>

                  <div className="container d-flex flex-wrap mt-5">
                        {
                              service.map(service =>

                                    <div className="col-md-4 col-sm-6 col-12 p-5">
                                          <div className="card">

                                                <div class="view overlay">
                                                      <img class="card-img-top" src={service.imageURL}
                                                            alt="" />
                                                      <a href="/home">
                                                            <div class="mask rgba-white-slight"></div>
                                                      </a>
                                                </div>

                                                <div class="card-body">

                                                      <h4 class="card-title">{service.name}</h4>
                                                      <h3>${service.price}</h3>
                                                      {/* <a href="" onClick={<Bookings service={service}></Bookings>} class="btn btn-success mt-3"><FontAwesomeIcon icon={faDollarSign} /> Book Now</a> */}
                                                      <button onClick={()=>handleClick(service._id)} class="btn btn-success mt-3"><FontAwesomeIcon icon={faDollarSign} /> Book Now</button>
                                                </div>

                                          </div>
                                    </div>
                              )
                        }
                  </div>
            </div>
      );
};

export default Services;
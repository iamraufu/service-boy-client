import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ProcessPayment from '../../ProcessPayment/ProcessPayment';
const Bookings = () => {

      const { id } = useParams();
      const [service, setService] = useState([])

      useEffect(() => {
            fetch(`https://secret-lake-77755.herokuapp.com/services/` + id)
                  .then(res => res.json())
                  .then(data => {
                        setService(data);
                  })
      }, [id])

      return (
            <div>
                  <h1 className='text-center mt-5 fw-bold'>Checkout Now !</h1>
                  <div className="container d-flex">
                        <div className="col-md-6 col-sm-6 col-12">
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
                                    </div>

                              </div>
                        </div>
                        <div className="col-md-6 col-sm-6 col-12 m-5 p-5">
                              <ProcessPayment />
                        </div>
                  </div>
            </div>
      );
};

export default Bookings;
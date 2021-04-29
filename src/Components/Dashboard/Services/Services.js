import React, { useEffect, useState } from 'react';

const Services = () => {

      const [service, setService] = useState([])

      useEffect(() => {
            fetch('https://secret-lake-77755.herokuapp.com/services')
                  .then(res => res.json())
                  .then(data => {
                        setService(data);
                  })
      }, [])

      const deleteProduct = (id)=>{

            fetch(`https://secret-lake-77755.herokuapp.com/delete/${id}`, {
                  method: 'DELETE'
              })
              .then(res => res.json())
              .then(result => {
                  if (result) {
                        alert("Service Deleted Successfully")
                        window.location.href = "/home";
                  
                  }
              })
      }

      return (
            <div className="container mt-5">
                  <h1 className='text-center mt-5'>Services List</h1>
                        <div className="col-md-12 col-sm-12 col-12">
                              {service.map(service => 
                              

                                    <div className="col-md-12 col-sm-12 mt-5 d-flex">
                                          <p className='text-center'>{service.name} - ${service.price}</p>
                                          <button onClick={()=>deleteProduct(service._id)} className='btn mx-5'>Delete</button>
                                    </div>
                              
                              )}
                        </div>
            </div>
      );
};

export default Services;
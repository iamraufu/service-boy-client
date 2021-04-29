import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";

const ManageService = () => {
      const { register, handleSubmit, formState: {errors} } = useForm();
      const [imageURL, setIMageURL] = useState(null);

      const onSubmit = data => {
            
            const serviceData = {
                  name: data.name,
                  price: data.price,
                  imageURL: imageURL
            };
            const url = `https://secret-lake-77755.herokuapp.com/addService`;

            fetch(url, {
                  method: 'POST',
                  headers: {
                        'content-type': 'application/json'
                  },
                  body: JSON.stringify(serviceData)
            })
                  .then(res => console.log('server side response', res))

            alert('Service Added!')
            window.location.href = "/home";
      };

      const handleImageUpload = event => {
            console.log(event.target.files[0])
            const imageData = new FormData();
            imageData.set('key', '5cefbb444c23d3daef1b910f94e2524d');
            imageData.append('image', event.target.files[0]);

            axios.post('https://api.imgbb.com/1/upload',
                  imageData)
                  .then(function (response) {
                        setIMageURL(response.data.data.display_url);
                  })
                  .catch(function (error) {
                        console.log(error);
                  });

      };

      return (
            <div className='container mt-5 h-100'>
                  <h1>Add New Service</h1>
                  <div className='col-md-12 col-12 col-sm-12'>
                        <form onSubmit={handleSubmit(onSubmit)}>
                              <div className="d-flex">
                                    <input className='form-control' {...register("name", { required: true })} placeholder='Enter Service Name' />

                                    {errors.name && <span class='text-danger  px-3'>*required</span>}

                                    <input className='form-control mx-3' {...register("price", { required: true })} placeholder='Enter Price' />

                                    {errors.price && <span class='text-danger'>*required</span>}
                              </div>
                              <input className='form-control mt-3' {...register("fileRequired", { required: true })} type='file' onChange={handleImageUpload} />

                              {errors.file && <span class='text-danger px-3'>*required</span>}

                              <input className='btn btn-primary mt-3' type="submit" />
                        </form>
                  </div>

            </div>
      );
};

export default ManageService;
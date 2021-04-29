import React from 'react';
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
      const { register, handleSubmit, formState: { errors } } = useForm();

      const onSubmit = data => {

            fetch('https://secret-lake-77755.herokuapp.com/addAdmin',{
                  method:'POST',
                  headers: { 'Content-Type': 'application/json'},
                  body: JSON.stringify({email:data.email})
            })
            alert("Admin Added");
      }

      return (
            <div className="container mt-5">
                  <h1>Make Admin</h1>
                  <div className='col-md-12 col-12 col-sm-12'>
                        <form onSubmit={handleSubmit(onSubmit)}>
                              <input className='form-control' {...register("email", { required: true })} placeholder='Enter email' />
                              
                              {errors.email && <span class='text-danger p-3'>*This field is required</span>}

                              <input className='btn btn-primary mt-3' type="submit" />
                        </form>
                  </div>
            </div>
      );
};

export default MakeAdmin;
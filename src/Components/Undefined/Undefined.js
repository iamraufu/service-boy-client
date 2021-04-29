import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import logo from '../../images/logo.png'
const Undefined = () => {
      return (
            <div>
                  <img className='rounded mx-auto d-block' src={logo} alt=""/>
                  <h1 className='text-center mt-5'>404 <br/> Not Found</h1>   
                  <a className="position-absolute top-50 start-50 translate-middle" href="/home"><button className='btn btn-success'><FontAwesomeIcon icon={faHome} /> Go Home</button></a> 
            </div>
      );
};

export default Undefined;     
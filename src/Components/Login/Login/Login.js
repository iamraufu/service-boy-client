import React, { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router-dom';
import { initializeLoginFramework, handleGoogleSignIn } from './loginManger';
import portrait from '../../../images/portrait.jpg';
import logo from '../../../images/logo.png';

function Login() {
      // eslint-disable-next-line
      const [user, setUser] = useState({
            isSignedIn: false,
            name: '',
            email: '',
            password: '',
            photo: ''
      });

      initializeLoginFramework();
      // eslint-disable-next-line
      const [loggedInUser, setLoggedInUser] = useContext(UserContext);
      const history = useHistory();
      const location = useLocation();
      let { from } = location.state || { from: { pathname: "/" } };

      const googleSignIn = () => {
            handleGoogleSignIn()
                  .then(res => {
                        handleResponse(res, true);
                  })
      }

      const handleResponse = (res, redirect) => {
            setUser(res);
            setLoggedInUser(res);
            if (redirect) {
                  history.replace(from);
            }
      }

      return (
            <div className="container">
                  <div className="d-flex">
                        <a className='mx-auto d-block float-middle' href="/home"><img className='img-fluid' src={logo} alt="" /></a>
                  </div>

                  <div className="row d-flex align-items-center mt-5">
                        <div className="col-md-6 col-sm-6 col-12 mt-5 p-4">
                              <h1>To Proceed You Need To Sign In</h1>
                              <button className="btn btn-success m-2" onClick={googleSignIn}>Google Sign In</button>
                        </div>
                        <div className="col-md-6 col-sm-6 col-12 mt-5">
                              <img style={{ height: '500px' }} className='img-fluid mx-auto d-block float-end' src={portrait} alt="" srcset="" />
                        </div>
                  </div>


            </div>
      );
};

export default Login;
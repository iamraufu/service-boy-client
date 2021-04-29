import React from 'react';
import NavBar from '../../Shared/NavBar/NavBar';
import logo from '../../../images/logo.png';
import tools from '../../../images/main.jpg'
import person from '../../../images/1.jpg'
import person2 from '../../../images/2.jpg'
import person3 from '../../../images/3.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChalkboard } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
      return (
            <div>
                  <NavBar />
                  <main className='"row d-flex align-items-center'>
                        <div className="col-md-8 p-5">
                              <img width={150} className='img-fluid' src={logo} alt="" />
                              <h1 className='fw-bold'>No.1 Cleaning Service <br /> Platform of Bangladesh</h1>
                              <p className='text-muted'>Book professional cleaning and handyman services, on-demand!</p>
                              <br />
                              <button className='btn btn-success'>Learn More <FontAwesomeIcon icon={faChalkboard} /> </button>
                        </div>
                        <div className="col-md-4 p-5">
                              <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                                    <div class="carousel-inner">
                                          <div class="carousel-item active" data-bs-interval="2000">
                                                <img height={400} src={tools} class="d-block w-100" alt="..." />
                                          </div>
                                          <div class="carousel-item" data-bs-interval="2000">
                                                <img height={400} src={person} class="d-block w-100" alt="..." />
                                          </div>
                                          <div class="carousel-item" data-bs-interval="2000">
                                                <img height={400} src={person2} class="d-block w-100" alt="..." />
                                          </div>
                                          <div class="carousel-item" data-bs-interval="2000">
                                                <img height={400} src={person3} class="d-block w-100" alt="..." />
                                          </div>

                                    </div>
                              </div>
                        </div>
                  </main>

            </div>
      );
};

export default Header;
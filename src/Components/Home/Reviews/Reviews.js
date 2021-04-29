import React, { useEffect, useState } from 'react';

import { useSpring, animated } from 'react-spring';
const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const Reviews = () => {

      const [reviews, setReviews] = useState([])

      const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))

      useEffect(() => {
            fetch('https://secret-lake-77755.herokuapp.com/reviews')
                  .then(res => res.json())
                  .then(data => {
                        setReviews(data);
                  })
      }, [])

      return (
            <div>
                  <h1 className='text-center fw-bold mt-5'><span className="text-success">Clients</span> Reviews</h1>
                  <p className='text-muted text-center mt-4'>Service Boy is humbled by its customers and their heartiest reviews. Our client’s feedbacks motivate us and make us a stronger team.</p>
                  <div className="container d-flex flex-wrap mt-3">
                        {
                              reviews.map(review=> 
                                    <animated.div
                                    class="card col-md-4 mt-5 p-5"
                                    onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                                    onMouseLeave={() => set({ xys: [0, 0, 1] })}
                                    style={{ transform: props.xys.interpolate(trans) }}
                                    >
                                    
                                          <img className='img-fluid mx-auto d-block' style={{borderRadius:'50%'}} src={review.imageURL} alt="" srcset=""/>
                                          <h3 className='fw-bold mt-3 text-center'>{review.name}</h3>
                                          <p className='text-muted mt-2 text-center'>{review.designation}</p>
                                          <p className='text-center text-muted'>{review.quote}</p>
                                   
                                    </animated.div>
                              )
                        }
                  </div>
            </div>
      );
};

export default Reviews;
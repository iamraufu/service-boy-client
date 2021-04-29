import React from 'react';

const Footer = () => {
  return (

    <footer class="bg-success text-center text-white mt-5">

      <div class="container p-4">

        <section class="mb-4">

          <a class="btn btn-outline-light btn-floating m-1" href="https://facebook.com/iamraufu" role="button"
          ><i class="fab fa-facebook-f"></i></a>


          <a class="btn btn-outline-light btn-floating m-1" href="https://twitter.com/iamraufu" role="button"
          ><i class="fab fa-twitter"></i
          ></a>


          <a class="btn btn-outline-light btn-floating m-1" href="mailto:raufu.dev@gmail.com" role="button"
          ><i class="fab fa-google"></i
          ></a>


          <a class="btn btn-outline-light btn-floating m-1" href="https://instagram.com/iamraufu" role="button"
          ><i class="fab fa-instagram"></i
          ></a>


          <a class="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/eftykharrahman/" role="button"
          ><i class="fab fa-linkedin-in"></i
          ></a>


          <a class="btn btn-outline-light btn-floating m-1" href="https://github.com/iamraufu" role="button"
          ><i class="fab fa-github"></i
          ></a>
        </section>

        <section class="">
          <form action="">

            <div class="row d-flex justify-content-center">

              <div class="col-auto">
                <p class="pt-2">
                  <strong>Sign up for our newsletter</strong>
                </p>
              </div>

              <div class="col-md-5 col-12">

                <div class="form-outline form-white mb-4">
                  <input type="email" id="form5Example2" class="form-control" />
                  <label class="form-label" for="form5Example2">Email address</label>
                </div>
              </div>

              <div class="col-auto">

                <button type="submit" class="btn btn-outline-light mb-4">
                  Subscribe
            </button>
              </div>

            </div>

          </form>
        </section>

        <section class="mb-4">
          <p>
            Convenient service provider in Bangladesh. Cleaning, computer services, interior designing, painting and household chores are just a call away! Operating since 2021, Service Boy is a proud team of professionals destined to make your hectic life easier.
      </p>
        </section>

        <section class="">

          <div class="row">

            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 class="text-uppercase">Categories</h5>

              <ul class="list-unstyled mb-0">
                <li>
                  <a href="/home" class="text-white">Hire</a>
                </li>
                <li>
                  <a href="/home" class="text-white">Book Now</a>
                </li>
                <li>
                  <a href="/home" class="text-white">Admin</a>
                </li>
                <li>
                  <a href="/home" class="text-white">Dashboard</a>
                </li>
              </ul>
            </div>
            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 class="text-uppercase">Links</h5>

              <ul class="list-unstyled mb-0">
                <li>
                  <a href="/home" class="text-white">Hire</a>
                </li>
                <li>
                  <a href="/home" class="text-white">Book Now</a>
                </li>
                <li>
                  <a href="/home" class="text-white">Admin</a>
                </li>
                <li>
                  <a href="/home" class="text-white">Dashboard</a>
                </li>
              </ul>
            </div>
            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 class="text-uppercase">Information</h5>

              <ul class="list-unstyled mb-0">
                <li>
                  <a href="/home" class="text-white">Hire</a>
                </li>
                <li>
                  <a href="/home" class="text-white">Book Now</a>
                </li>
                <li>
                  <a href="/home" class="text-white">Admin</a>
                </li>
                <li>
                  <a href="/home" class="text-white">Dashboard</a>
                </li>
              </ul>
            </div>
            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 class="text-uppercase">Useful Links</h5>

              <ul class="list-unstyled mb-0">
                <li>
                  <a href="/home" class="text-white">Hire</a>
                </li>
                <li>
                  <a href="/home" class="text-white">Book Now</a>
                </li>
                <li>
                  <a href="/home" class="text-white">Admin</a>
                </li>
                <li>
                  <a href="/home" class="text-white">Dashboard</a>
                </li>
              </ul>
            </div>

          </div>

        </section>
      </div>
      <div class="text-center p-3">
        © {(new Date()).getFullYear()} All Rights Reserved by
    <a class="text-white" href="https://github.com/iamraufu"> Raufu Prezens</a>
      </div>
    </footer>

  );
};

export default Footer;
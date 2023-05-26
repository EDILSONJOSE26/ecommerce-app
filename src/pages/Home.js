import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
      <>
      <section className='home-wrapper-1 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-6'>
              <div className='main-banner position-relative'>
                <img src='images/main-banner-1.jpg'
                className='img-fluid rounded-3'
                alt=''
                />
                <div className='main-banner-content position-absolute'>
                  <h4></h4>
                  <h5>iPad s13+ Pro</h5>
                  <p>Por R$ 2.000.00</p>
                  <Link className='button'>Comprar Agora</Link>
                </div>
              </div>
            </div>
            <div className='col-6'>
              <div className='d-flex flex-wrap gap-10 justify-content-betwee align-items-center'>
              <div className='small-banner position-relative'>
                <img src='images/catbanner-01.jpg'
                className='img-fluid rounded-3'
                alt=''
                />
                <div className='small-banner-content position-absolute'>
                  <h4></h4>
                  <h5>MacBook Pro</h5>
                  <p>A partir de R$ 1.274,92/mês <br/>ou R$ 15.299*</p>
                </div>
              </div>

              <div className='small-banner position-relative'>
                <img src='images/catbanner-03.jpg'
                className='img-fluid rounded-3'
                alt=''
                />
                <div className='small-banner-content position-absolute'>
                  <h4>256GB</h4>
                  <h5>iPad Air</h5>
                  <p>A partir de R$ 6.999</p>
                </div>
              </div>

              <div className='small-banner position-relative'>
                <img src='images/catbanner-02.jpg'
                className='img-fluid rounded-3'
                alt=''
                />
                <div className='small-banner-content position-absolute'>
                  <h4></h4>
                  <h5>Watch</h5>
                  <p>A partir de R$ 441,58/mês <br/>ou R$ 5.299*.</p>
                </div>
              </div>

              <div className='small-banner position-relative'>
                <img src='images/catbanner-04.jpg'
                className='img-fluid rounded-3'
                alt=''
                />
                <div className='small-banner-content position-absolute'>
                  <h4></h4>
                  <h5>iPad s13+ Pro</h5>
                  <p>Por R$ 2.000.00</p>
                </div>
              </div>
              
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='home-wrapper-1 py-5'>
      </section>
      <section className='home-wrapper-2 py-5'>
        <div className='cotainer-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='servies d-flex align-items-center justify-content-between'>
                <div>
                  <img src='images/service.png' alt='services' />
                  <div>
                    <h6></h6>
                    <p></p>
                  </div>
                </div>
                <div>
                  <img src='images/service-02.png' alt='services' />
                  <div>
                    <h6></h6>
                    <p></p>
                  </div>
                </div>
                <div>
                  <img src='images/service-03.png' alt='services' />
                  <div>
                    <h6></h6>
                    <p></p>
                  </div>
                </div>
                <div>
                  <img src='images/service-04.png' alt='services' />
                  <div>
                    <h6></h6>
                    <p></p>
                  </div>
                </div>
                <div>
                  <img src='images/service-05.png' alt='services' />
                  <div>
                    <h6></h6>
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </>
  );
};

export default Home;
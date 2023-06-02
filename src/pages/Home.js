import React from 'react';
import { Link } from 'react-router-dom';
import Marquee from "react-fast-marquee";
import BlogCard from '../components/BlogCard';
import ProductCard from '../components/ProductCard';

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
                    <p>A partir de R$ 1.274,92/mês <br />ou R$ 15.299*</p>
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
                    <p>A partir de R$ 441,58/mês <br />ou R$ 5.299*.</p>
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
      <section className='home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='servies d-flex align-items-center justify-content-between'>
                <div className='d-flex align-items-center gap-10'>
                  <img src='images/service.png' alt='services' />
                  <div>
                    <h6>Frete Grátis</h6>
                    <p className='mb-0' >Apenas para compras acima de R$100</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src='images/service-02.png' alt='services' />
                  <div>
                    <h6>Ofertas surpresa diárias</h6>
                    <p className='mb-0' >Economize 25% de desconto</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src='images/service-03.png' alt='services' />
                  <div>
                    <h6>Suporte 24h</h6>
                    <p className='mb-0' >Compre com um Proficional</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src='images/service-04.png' alt='services' />
                  <div>
                    <h6>Preços acessíveis</h6>
                    <p className='mb-0' >Obitenha o preço de fábrica</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src='images/service-05.png' alt='services' />
                  <div>
                    <h6>Pagamentos seguros</h6>
                    <p className='mb-0' >Pagamento 100% seguro</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class1="home-wrapper-2 py-5">
        <div className='container-xxl'>
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex justify-content-between flex-wrap align-items-center">
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/tv.jpg" alt="camera" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Smart Watches</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="camera" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/tv.jpg" alt="camera" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Smart Watches</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="camera" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="featured-wrapper py-5 home-wrapper-2">
        <div className='container-xxl'>
          <div className="row">
            <div className='col-12'>
              <h3 className='section-heading'>featured</h3>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
      <section className='special-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          
        </div>
      </section>
      <section className="marque-wrapper home-wrapper-2 py-5">
        <div className='container-xxl'>
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper card-wrapper">
                <Marquee className="d-flex">
                  <div className="mx-4 w-25">
                    <img src="images/brand-01.png" alt="marcas" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-02.png" alt="marcas" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-03.png" alt="marcas" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-04.png" alt="marcas" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-05.png" alt="marcas" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-06.png" alt="marcas" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-07.png" alt="marcas" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-08.png" alt="marcas" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className='container-xxl'>
          <div className="row">
            <div className='col-12'>
              <h3 className='section-heading'>our last blogs</h3>
            </div>
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
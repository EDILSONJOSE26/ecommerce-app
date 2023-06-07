import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';

const OurStore = () => {
  return (
    <>
    <Meta title={'Nossa Loja'} />
    <BreadCrumb title='Nossa Loja' />
    <div className='store-wrapper home-wrapper-2 py-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-3'>
            <div className='filter-card mb-3'>
              <h3 className='filter-title'>Categorias</h3>
              <div>
                <ul className='ps-0'>
                  <li>Watch</li>
                  <li>Tv</li>
                  <li>Câmera</li>
                  <li>Laptop</li>
                </ul>
              </div>
            </div>
            <div className='filter-card mb-3'>
              <h3 className='filter-title'>Filtrar Por</h3>
            </div>
            <div className='filter-card mb-3'>
              <h3 className='filter-title'>
                Tag do Produto
              </h3>
            </div>
            <div className='filter-card mb-3'>
              <h3 className='filter-title'>
                Ver depois
              </h3>
            </div>
          </div>
          <div className='col-9'></div>
        </div>
      </div>
    </div>
    </>
  );
};

export default OurStore;
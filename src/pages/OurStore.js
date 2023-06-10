import React, { useState } from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import ReactStars from 'react-rating-stars-component';
import ProductCard from '../components/ProductCard';

const OurStore = () => { 
  const [grid, setGrid] = useState(4);


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
                <div>
                  <h5 className='sub-title'>Disponivel</h5>
                  <div>
                    <div className='form-check'>
                      <input className='form-check-input' type='checkbox' value='' id='' />
                      <label className='form-check-label' htmlFor=''>
                        Em estoque {500}
                      </label>
                    </div>
                    <div className='form-check'>
                      <input className='form-check-input' type='checkbox' value='' id='' />
                      <label className='form-check-label' htmlFor=''>
                        Esgotado {0}
                      </label>
                    </div>
                  </div>
                  <h5 className='sub-title'>Preço</h5>
                  <div className='d-flex aling-items-center gap-10'>
                    <div className="form-floating">
                      <input type="email" className="form-control"
                        id="floatingInput"
                        placeholder="Minimo" />
                      <label htmlFor="floatingInput">Minimo</label>
                    </div>
                    <div className="form-floating">
                      <input type="email" className="form-control"
                        id="floatingInput1"
                        placeholder="Máximo" />
                      <label htmlFor="floatingInput">Máximo</label>
                    </div>
                  </div>
                  <h5 className='sub-title'>Cor</h5>
                  <div>
                    <ul className='colors ps-0'>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </div>
                  <h5 className='sub-title'>Tamanho</h5>
                  <div>
                    <div className='form-check'>
                      <input className='form-check-input' type='checkbox' value='' id='color-1' />
                      <label className='form-check-label' htmlFor='color-1'>
                        xx {20}
                      </label>
                    </div>
                    <div className='form-check'>
                      <input className='form-check-input' type='checkbox' value='' id='color-2' />
                      <label className='form-check-label' htmlFor='color-2'>
                        x {50}
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className='filter-card mb-3'>
                <h3 className='filter-title'>
                  tags de produtos
                  <div>
                    <div className='product-tags d-flex flex-wrap align-items-center gap-10'>
                      <span className='badge bg-lingt text-secondary round-3 py-2 px-3'>
                        Headphone
                      </span>
                      <span className='badge bg-lingt text-secondary round-3 py-2 px-3'>
                        Laptop
                      </span>
                      <span className='badge bg-lingt text-secondary round-3 py-2 px-3'>
                        Smartphone
                      </span>
                      <span className='badge bg-lingt text-secondary round-3 py-2 px-3'>
                        Cabos
                      </span>
                    </div>
                  </div>
                </h3>
              </div>
              <div className='filter-card mb-3'>
                <h3 className='filter-title'>
                  Produto Aleatório
                </h3>
                <div>
                  <div className='random-products mb-3 d-flex'>
                    <div className='w-50'>
                      <img src='images/watch.jpg' className='img-fluid' alt='watch' />
                    </div>
                    <div className='w-50'>
                      <h5>Com cada tic-tac do relógio, surge uma oportunidade única. Descubra a elegância e a precisão do nosso watch</h5>
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor='#ffd700'
                      />
                      <b>R$ 8.000.00</b>
                    </div>
                  </div>
                  <div className='random-products d-flex'>
                    <div className='w-50'>
                      <img src='images/headphone.jpg' className='img-fluid' alt='watch' />
                    </div>
                    <div className='w-50'>
                      <h5>Aproveite a oferta e desfrute de momentos musicais intensos e cheios de emoção. Seus ouvidos merecem essa experiência!</h5>
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor='#ffd700'
                      />
                      <b>R$ 3.000.00</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-9'>
            <div className="filter-sort-grid mb-4">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-10">
                  <p className="mb-0 d-block" style={{ width: "100px" }}>
                  classificar por:
                  </p>
                  <select
                    name=""
                    defaultValue={"manula"}
                    className="form-control form-select"
                    id=""
                  >
                    <option value="manual">Em destaque</option>
                    <option value="best-selling">Mais vendidos</option>
                    <option value="title-ascending">Ordem alfabética, A-Z</option>
                    <option value="title-descending">
                    Ordem alfabética, Z-A
                    </option>
                    <option value="price-ascending">Preço, de baixo para cima</option>
                    <option value="price-descending">Preço, de alto a baixo</option>
                    <option value="created-ascending">Data, do antigo ao novo</option>
                    <option value="created-descending">Data, do novo ao antigo</option>
                  </select>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <p className="totalproducts mb-0">21 Produtos</p>
                  <div className="d-flex gap-10 align-items-center grid">
                    <img
                      onClick={() => {
                        setGrid (3);
                      }}
                     src='images/gr4.svg'
                     className='d-block img-fluid'
                      alt=''
                      />
                    <img
                      onClick={() => {
                        setGrid (4);
                      }}
                     src='images/gr3.svg'
                     className='d-block img-fluid'
                      alt=''
                      />
                    <img
                      onClick={() => {
                        setGrid (6);
                      }}
                     src='images/gr2.svg'
                     className='d-block img-fluid'
                      alt=''
                      />
                    <img
                      onClick={() => {
                        setGrid (12);
                      }}
                     src='images/gr.svg'
                     className='d-block img-fluid'
                      alt=''
                      />
                  </div>
                </div>
              </div>
            </div>
            <div className="products-list pb-5">
              <div className="d-flex gap-10 flex-wrap">
                <ProductCard grid={grid} />
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurStore;
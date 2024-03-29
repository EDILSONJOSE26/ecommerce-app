import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Color from "../components/Color";
import Meta from "../components/Meta";



const CompareProduct = () => {
  return (
    <>
      <Meta title={"Compare Products"} />
      <BreadCrumb title="Comparar Produtos" />
      <div className="compare-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
        <div className="row">
          <div className="col-3">
            <div className="compare-product-card position-relative">
              <img
                src='images/cross.svg'
                alt="cross"
                className="position-absolute cross img-fluid"
              />
              <div className="product-card-image">
                <img src="images/watch.jpg" alt="watch" />
              </div>
              <div className="compare-product-details">
                <h5 className="title">
                  Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wi-Fi+3G Tablet
                </h5>
                <h6 className="price mb-3 mt-3">R$ 2.000.00</h6>

                <div>
                  <div className="product-detail">
                    <h5>Marca:</h5>
                    <p>Havels</p>
                  </div>
                  <div className="product-detail">
                    <h5>Tipo:</h5>
                    <p>Watch</p>
                  </div>
                  <div className="product-detail">
                    <h5>Disponibilidade:</h5>
                    <p>Em estoque</p>
                  </div>
                  <div className="product-detail">
                    <h5>Cor:</h5>
                    <Color />
                  </div>
                  <div className="product-detail">
                    <h5>Tamanho:</h5>
                    <div className="d-flex gap-10">
                      <p>S</p>
                      <p>M</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="compare-product-card position-relative">
              <img
                src="images/cross.svg"
                alt="cross"
                className="position-absolute cross img-fluid"
              />
              <div className="product-card-image">
                <img src='images/watch.jpg' alt="watch" />
              </div>
              <div className="compare-product-details">
                <h5 className="title">
                Tablet Samsung Galaxy Tab S6 Lite com Caneta - Android 14 4G 10,4”
                </h5>
                <h6 className="price mb-3 mt-3">R$ 2500.00</h6>

                <div>
                  <div className="product-detail">
                    <h5>Marca:</h5>
                    <p>Samsung</p>
                  </div>
                  <div className="product-detail">
                    <h5>Tipo:</h5>
                    <p>Tablet</p>
                  </div>
                  <div className="product-detail">
                    <h5>Disponibilidade:</h5>
                    <p>Em estoque</p>
                  </div>
                  <div className="product-detail">
                    <h5>Cor:</h5>
                    <Color />
                  </div>
                  <div className="product-detail">
                    <h5>Tamanho:</h5>
                    <div className="d-flex gap-10">
                      <p>S</p>
                      <p>M</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default CompareProduct;

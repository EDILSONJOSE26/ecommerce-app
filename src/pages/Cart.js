import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <>
      <Meta title={"Cart"} />
      <BreadCrumb title="Carrinho" />
      <div className="container-xxl">
      <div className="cart-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="cart-header py-3 d-flex justify-content-between align-items-center">
              <h4 className="cart-col-1">Produto</h4>
              <h4 className="cart-col-2">Preço</h4>
              <h4 className="cart-col-3">Quantidade</h4>
              <h4 className="cart-col-4">Total</h4>
            </div>
            <div className="cart-data py-3 mb-2 d-flex justify-content-between align-items-center">
              <div className="cart-col-1 gap-15 d-flex align-items-center">
                <div className="w-25">
                  <img src="https://a-static.mlcdn.com.br/800x560/apple-watch-series-6-gps-40mm-caixa-prateada-de-aluminio-com-pulseira-esportiva-nike-platina-preta/apple10/311604/20065e974a2a7ee716c47cc61878e9cb.jpeg" 
                  className="img-fluid" alt="product image" />
                </div>
                <div className="w-75">
                  <p>watch</p>
                  <p>Tamanho: !</p>
                  <p>Cor: !</p>
                </div>
              </div>
              <div className="cart-col-2">
                <h5 className="price">R$ 5.000</h5>
              </div>
              <div className="cart-col-3 d-flex align-items-center gap-15">
                <div>
                  <input
                    className="form-control"
                    type="number"
                    name=""
                    min={1}
                    max={10}
                    id=""
                  />
                </div>
                <div>
                  <AiFillDelete className="text-danger " />
                </div>
              </div>
              <div className="cart-col-4">
                <h5 className="price">R$ 5.000</h5>
              </div>
            </div>
          </div>
          <div className="col-12 py-2 mt-4">
            <div className="d-flex justify-content-between align-items-baseline">
              <Link to="/product" className="button">
              Continuar comprando
              </Link>
              <div className="d-flex flex-column align-items-end">
                <h4>SubTotal: $ 1000</h4>
                <p>Impostos de envio calculados no correios</p>
                <Link to="/checkout" className="button">
                  Correios
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Cart;

import React from "react"
import ReactStars from 'react-rating-stars-component';
import { Link, useLocation } from "react-router-dom";

const ProductCard = (props) => {
  const { grid } = props;
  let location = useLocation();
  
  return (
    <>
          <div className={` ${ location.pathname == "/store" ? `gr-${grid}` : "col-3"} `} >
      <Link to=':id' className="product-card position-relative">
      <div className="wishlist-icon position-absolute">
        <Link>
              <img src="images/wish.svg" accessKey="" />
        </Link>
      </div>
        <div className="product-image">
          <img src='images/watch.jpg' className="img-fluid" alt='imagem do produto'/>
          <img src='images/watch-1.jpg' className="img-fluid" alt='imagem do produto'/>
        </div>
        <div className="product-details">
          <h6 className="brand">Apple</h6>
          <h5 className="product-title">
          Conheça o elegante relógio inteligente Watch SE.
          </h5>
          <ReactStars
          count={5}
          size={24}
          value={4}
          edit={false}
          activeColor='#ffd700'
          />
          <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
            Não perca a chance de adquirir o Watch e aproveitar
           a combinação perfeita de estilo, funcionalidade e tecnologia avançada. 
           Ele é o parceiro ideal para acompanhar você em todas as ocasiões, 
           desde reuniões de negócios até atividades ao ar livre. 
           Experimente agora o Watch e eleve o seu estilo e conveniência a um novo patamar.</p>
          <p className="price">R$5.000</p>
        </div>
        <div className="action-bar position-absolute">
          <div className="d-flex flex-column gap-15">
            <Link>
              <img src="images/prodcompare.svg" accessKey="" />
            </Link>
            <Link>
              <img src="images/view.svg" accessKey="" />
            </Link>
            <Link>
              <img src="images/add-cart.svg" accessKey="" />
            </Link>
          </div>
        </div>
      </Link>
    </div>
    <div className={` ${ location.pathname == "/store" ? `gr-${grid}` : "col-3"} `} >
      <Link className="product-card position-relative">
      <div className="wishlist-icon position-absolute">
        <Link>
              <img src="images/wish.svg" accessKey="" />
        </Link>
      </div>
        <div className="product-image">
          <img src='images/watch.jpg' className="img-fluid" alt='imagem do produto'/>
          <img src='images/watch-1.jpg' className="img-fluid" alt='imagem do produto'/>
        </div>
        <div className="product-details">
          <h6 className="brand">Apple</h6>
          <h5 className="product-title">
          Conheça o elegante relógio inteligente Watch SE
          </h5>
          <ReactStars
          count={5}
          size={24}
          value={4}
          edit={false}
          activeColor='#ffd700'
          />
          <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
            Não perca a chance de adquirir o Watch e aproveitar
           a combinação perfeita de estilo, funcionalidade e tecnologia avançada. 
           Ele é o parceiro ideal para acompanhar você em todas as ocasiões, 
           desde reuniões de negócios até atividades ao ar livre. 
           Experimente agora o Watch e eleve o seu estilo e conveniência a um novo patamar.</p>
          <p className="price">R$5.000</p>
        </div>
        <div className="action-bar position-absolute">
          <div className="d-flex flex-column gap-15">
            <Link>
              <img src="images/prodcompare.svg" alt="" accessKey="" />
            </Link>
            <Link>
              <img src="images/view.svg" alt="" accessKey="" />
            </Link>
            <Link>
              <img src="images/add-cart.svg" alt="" accessKey="" />
            </Link>
          </div>
        </div>
      </Link>
    </div>
    </>
  );
};

export default ProductCard;
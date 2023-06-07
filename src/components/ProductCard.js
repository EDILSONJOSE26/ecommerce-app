import React from "react"
import ReactStars from 'react-rating-stars-component';
import { Link } from "react-router-dom";

const ProductCard = () => {
  return (
    <Link className="col-3">
      <div className="product-card position-relative">
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
          <h6 className="brand">HAVELS</h6>
          <h5 className="product-title">
            jwebfwehbchbhb whcwevchevch wicbhwbech
          </h5>
          <ReactStars
          count={5}
          size={24}
          value={4}
          edit={false}
          activeColor='#ffd700'
          />
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
      </div>
    </Link>
  );
};

export default ProductCard;
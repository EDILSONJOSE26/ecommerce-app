import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <div className="col-3">
      <div className="blog-card">
        <div className="card-image">
          <img src="images/blog-1.jpg" className="img-fluid w-100" alt="blog" />
        </div>
        <div className="blog-content">
          <p className="date">28/05/2023</p>
          <h5 className="title">Um belo renascimento numa manhã de domingo</h5>
          <p className="desc">
            Numa manhã de domingo, enquanto o mundo desperta para um novo dia,
             um produto surge como um belo renascimento. Suas características inovadoras e seu design elegante trazem uma nova perspectiva para a rotina diária.
          </p>
          <Link to="/blog/:id" className="button">
            Ler mais
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;

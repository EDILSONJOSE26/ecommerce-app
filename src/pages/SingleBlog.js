import React from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import { HiOutlineArrowLeft } from "react-icons/hi";
import Meta from "../components/Meta";



const SingleBlog = () => {
    return (
        <>
            <Meta title={"Dynamic Blog Name"} />
            <BreadCrumb title="Dynamic Blog Name" />
            <div className="blog-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="single-blog-card">
                                <Link to="/blogs" className="d-flex align-items-center gap-10">
                                    <HiOutlineArrowLeft className="fs-4" /> Voltar
                                </Link>
                                <h3 className="title">Uma bela manhã de domingo</h3>
                                <img src='images/blog-1.jpg' className="img-fluid w-100 my-4" alt="blog" />
                                <p>
                                    "Bem-vindo a uma manhã de domingo, onde os raios de sol pintam o céu com tons dourados e a 
                                    brisa suave traz consigo uma serenidade indescritível. Neste momento precioso, permita-se 
                                    saborear cada instante, onde o tempo se alonga e os afazeres do dia a dia parecem 
                                    desvanecer-se. Acalme a mente, entregue-se ao prazer de um café fresco e abraçado por 
                                    uma manta macia, enquanto as páginas de um livro transportam você para mundos desconhecidos.
                                     Permita-se a um momento de reflexão, onde os pensamentos fluem sem pressa e as inspirações 
                                     ganham vida. Que essa manhã de domingo seja um oásis de paz e renovação, preenchido com 
                                     pequenos prazeres e aconchego, para iniciar a semana com o coração leve e a alma revitalizada."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleBlog;

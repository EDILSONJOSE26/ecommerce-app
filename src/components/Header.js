import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
const Header = () => {
    return (
        <>
            <header className="header-top-strip py-3">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6">
                            <p className="text-white">
                            Frete Grátis com Compras Acima de R$100 & Devoluções Grátis
                            </p>
                        </div>
                        <div className="col-6">
                            <p className="text-end text-white mb-0">
                                Linha direta:<a className="text-white" href="tel:(86) 9.9945-71??">(86) 9.9945-71??</a></p>
                        </div>
                    </div>
                </div>
            </header>
            <header className="header-upper py-3">
                <div className="container-xxl">
                    <div className="row aling-items-center">
                        <div className="col-2">
                            <h2>
                                <Link className="text-white">EVOLUTION</Link>
                            </h2>
                        </div>
                        <div className="col-5">
                            <div className="input-group">
                                <input type="text"
                                    className="form-control py-2"
                                    placeholder="Pesquise o produto aqui..."
                                    aria-label="Pesquise o produto aqui..."
                                    aria-describedby="basic-addon2"
                                />
                                <span className="input-group-text p-3" id="basic-addon2">
                                    <BsSearch className="fs-6" />
                                </span>
                            </div>
                        </div>
                        <div className="col-5">
                            <div className="header-upper-links d-flex align-items-center justify-content-between">
                                <div>
                                    <Link className="d-flex aling-items-center gap-10 text-white">
                                        <img src="images/compare.svg" alt="Comparar" />
                                        <p className="mb-0" >
                                            Comparar <br /> Produtos
                                        </p>
                                    </Link>
                                </div>
                                <div>
                                    <Link className="d-flex aling-items-center gap-10 text-white">
                                        <img src="images/wishlist.svg" alt="Lista de desejos" />
                                        <p className="mb-0">
                                            Lista de <br /> Desejos
                                        </p>
                                    </Link>
                                </div>
                                <div>
                                    <Link className="d-flex aling-items-center gap-10 text-white">
                                        <img src="images/user.svg" alt="Usuario" />
                                        <p className="mb-0">
                                            Login  <br />
                                        </p>
                                    </Link>
                                </div>
                                <div>
                                    <Link className="d-flex aling-items-center gap-10 text-white">
                                        <img src="images/cart.svg" alt="Carrinho" />
                                        <div className="d-flex flex-column">
                                            <span className="badge bg-white text-dark">100</span>
                                            <p className="mb-0" >R$ 10.000</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <header className="header-bottom py-3">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="menu-bottom d-flex align-items-center gap-30">
                                <div>
                                <div className="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex aling-items-center" 
                                        type="button" id="dropdownMenuButton1" 
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        <img src="images/menu.svg" alt=""/><span className="me-5 d-inline-block">Categorias</span>
                                    </button>
                                    <ul className="dropdown-menu"
                                    aria-labelledby="dropdownMenuButton1">
                                        <li><Link className="dropdown-item text-white" to=''>Action</Link></li>
                                        <li><Link className="dropdown-item text-white" to=''>Another action</Link></li>
                                        <li><Link className="dropdown-item text-white" to=''>Something else here</Link></li>
                                    </ul>
                                    </div>



                                </div>
                                <div className="menu-links">
                                    <div className="d-flex align-items-center gap-15">
                                        <NavLink className="text-white" to="/">
                                            Home
                                        </NavLink>
                                        <NavLink className="text-white" to="/">
                                            Nossa loja
                                        </NavLink>
                                        <NavLink className="text-white" to="/">
                                        Blogs
                                        </NavLink>
                                        <NavLink className="text-white" to="/">
                                            Contato
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
const Resetpassword = () => {
    return (
        <>
            <Meta title={"Reset Password"} />
            <BreadCrumb title="Resetar Senha" />
            <div className="login-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="container-xxl">
                        <div className="col-12">
                            <div className="auth-card">
                                <h3 className="text-center mb-3">Resetar Senha</h3>
                                <form action="" className="d-flex flex-column gap-15">
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Senha"
                                        className="form-control"
                                    />
                                    <input
                                        type="password"
                                        name="confpassword"
                                        placeholder="Digite sua senha novamente"
                                        className="form-control"
                                    />
                                    <div>
                                        <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                                            <button className="button border-0">Ok</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Resetpassword;

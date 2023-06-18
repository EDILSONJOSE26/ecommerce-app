import React from 'react'
import { Link } from 'react-router-dom';
import {AiFillLinkedin, BsGithub, BsWhatsapp, BsInstagram, BsLinkedin, BsTelegram} from 'react-icons/bs';

const Footer = () => {
  return (
    <>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row align-items-center'>
            <div className='col-5'>
              <div className='footer-top-data d-flex gap-30 align-items-center'>
                <img src='images/newsletter.png' alt='' />
                <h2 className='mb-0 text-white'>Cadastre-se e GANHE R$150</h2>
              </div>
            </div>
            <div className='col-7'>
              <div className="input-group">
                <input type="text"
                  className="form-control py-1"
                  placeholder="Qual o seu e-mail?"
                  aria-label="Qual o seu e-mail?"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Enviar
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer>
        <footer className='py-4'>
          <div className='container-xxl'>
            <div className='row'>
              <div className='col-4'>
                <h4 className='text-white mb-4'>Contatos</h4>
                <div>
                  <address className='text-white fs-6'>EVOLUTION STORE,<br />
                  Teresina - PI,<br />
                  CEP 6400-0000
                  </address>
                  <a href='Fone: +55 (86) 99945-****' className='mt-3 d-block mb-1 text-white'>
                  +55 (86) 99945-****
                  </a>
                  <a href='G-mail:edilsonjoseexemplo@gmail.com' className='mt-2 d-block mb-0 text-white'>
                  edilsonjoseexemplo@gmail.com
                  </a>
                  <div className='social-icons d-flex align-items-center gap-30 mt-4'>
                    <a className='text-white' href='#'>
                      <BsLinkedin  className='fs-4'/>
                    </a>
                    <a className='text-white' href='#'>
                      <BsInstagram className='fs-4'/>
                    </a>
                    <a className='text-white' href='#https://github.com/EDILSONJOSE26'>
                      <BsGithub className='fs-4'/>
                    </a>
                    <a className='text-white' href='#'>
                      <BsWhatsapp className='fs-4'/>
                    </a>
                    <a className='text-white' href='#'>
                      <BsTelegram className='fs-4'/>
                    </a>
                  </div>
                  </div>
              </div>
              <div className='col-3'>
                <h4 className='text-white mb-4'>Informação</h4>
                <div className='footer-links d-flex flex-column'>
                  <Link to='/privacy-policy' className='text-white py-2 mb-1'>Políticia de Privacidade</Link>
                   <Link to='/refund-policy' className='text-white py-2 mb-1'>Política de Reembolso</Link>
                    <Link to='/shipping-policy' className='text-white py-2 mb-1'>Política de Envio</Link>
                     <Link to='/term-conditions' className='text-white py-2 mb-1'>Termos de Serviço</Link>
                     <Link className='text-white py-2 mb-1'>Blogs</Link>
                </div>
              </div>
              <div className='col-3'>
                <h4 className='text-white mb-4'>Conta</h4>
                <div className='footer-links d-flex flex-column'>
                 <Link className='text-white py-2 mb-1'>Procurar</Link>
                  <Link className='text-white py-2 mb-1'>Quem somos</Link>
                   <Link className='text-white py-2 mb-1'>Perguntas Freqüentes</Link>
                    <Link className='text-white py-2 mb-1'>Contato</Link>
                    <Link className='text-white py-2 mb-1'>Chart</Link>
                </div>
              </div>
              <div className='col-2'>
                <h4 className='text-white mb-4'>Links Rápidos</h4>
                <div className='footer-links d-flex flex-column'>
                  <Link className='text-white py-2 mb-1'>Laptops</Link>
                   <Link className='text-white py-2 mb-1'>Headphones</Link>
                    <Link className='text-white py-2 mb-1'>Tablets</Link>
                     <Link className='text-white py-2 mb-1'>Watch</Link>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <footer className='py-4'>
          <div className='container-xxl'>
            <div className='row'>
              <div className='col-12'>
                <p className='text-center mb-0 text-white'>
                  &copy; {new Date().getFullYear()}; Powered by EDILSON
                </p>
              </div>
            </div>
          </div>
        </footer>
      </footer>
    </>
  );
};


export default Footer
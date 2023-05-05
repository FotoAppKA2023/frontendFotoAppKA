import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="p-3 bg-secondary bg-opacity-10">
      <div className="row">
        <div className="col-6 col-md-2 mb-3">
          <h5>Filmoteka</h5>
          <ul className="nav flex-column border-top">
            <li className="nav-item mb-2">
              <Link to={"/"} className="nav-link p-0 text-muted">
                Inicio
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to={"/"} className="nav-link p-0 text-muted">
                Filmoteka
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to={"/"} className="nav-link p-0 text-muted">
                Nosotros
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to={"/"} className="nav-link p-0 text-muted">
                FAQs
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-6 col-md-2 mb-3">
          <h5> . </h5>
          <ul className="nav flex-column border-top">
            <li className="nav-item mb-2">
              <Link to={"/"} className="nav-link p-0 text-muted">
                Crear cuenta
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to={"/"} className="nav-link p-0 text-muted">
                Iniciar Sesión
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-md-5 offset-md-1 mb-3">
          <form>
            <h5>Síguenos</h5>
            <div className="d-flex flex-column flex-sm-row w-100 gap-2">
              <label htmlFor="newsletter1" className="visually-hidden">
                Email address
              </label>
              <input
                id="newsletter1"
                type="text"
                className="form-control"
                placeholder="Email address"
              />
              <button className="btn btn-primary" type="button">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
        <p>&copy; 2022 Company, Inc. All rights reserved.</p>
        <ul className="list-unstyled d-flex">
          <li className="ms-3">
            <Link to={"/"} className="link-dark">
              <svg className="bi" width="24" height="24">
                <use href="#twitter" />
              </svg>
              twitter
            </Link>
          </li>
          <li className="ms-3">
            <Link to={"/"} className="link-dark">
              <svg className="bi" width="24" height="24">
                <use href="#instagram" />
              </svg>
              instagram
            </Link>
          </li>
          <li className="ms-3">
            <Link to={"/"} className="link-dark">
              <svg className="bi" width="24" height="24">
                <use href="#facebook" />
              </svg>
              facebook
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

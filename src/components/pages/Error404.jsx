import { Button } from 'react-bootstrap';
import error from '../../assets/error404.png'
import {NavLink } from 'react-router-dom';

const Error404 = () => {
    return (
        <section className="mainSection text-center">
            <img src={error} alt="error 404" />
            <div>
                <NavLink className='mb-5 btn btn-success' to="/">Volver al inicio</NavLink>
            </div>
        </section>
    );
};

export default Error404;
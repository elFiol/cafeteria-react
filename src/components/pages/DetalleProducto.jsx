import { Container } from "react-bootstrap";

const DetalleProducto = () => {
    return (
        <Container className="w-100 mainSection my-4 detalle">
            <img src="https://images.pexels.com/photos/414555/pexels-photo-414555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="cafe" className="imagenDetalle" />
            <div className="mx-3 mt-4">
                <h3 className="text-start">Cafe</h3>
                <hr />
                <p className="fs-4 my-3">El cafe muy rico recontra rico muy rico, es demasiado rico... dije rico? da igual es muy rico lo recomiendo</p>
                <p className="mt-5 mb-0 fs-5"><b className=" text-success">Categoria:</b> infusiones</p>
                <p className="fs-5 mb-0 text-success"><b>Precio: $1000</b></p>
            </div>
        </Container>
    );
};

export default DetalleProducto;
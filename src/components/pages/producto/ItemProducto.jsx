import { Button } from "react-bootstrap";
import Swal from 'sweetalert2'
import { borrarProductoAPI } from "../../../helpers/queries";

const ItemProducto = ({producto}) => {
  const borrarProducto = (id) => {
    Swal.fire({
      title: "¿estas seguro de eliminar el producto?",
      text: "no se puede revertir este proceso",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar"
    }).then((result) => {
      if (result.isConfirmed) {
        borrarProductoAPI(id)
        Swal.fire({
          title: "Eliminado",
          text: "El producto fue eliminado",
          icon: "success"
        });
      }
    });
  }
  return (
    <tr>
      <td className="text-center">1</td>
      <td>{producto.nombreProducto}</td>
      <td className="text-end">{producto.precio}</td>
      <td className="text-center">
        <img
          src={producto.imagen}
          className="img-thumbnail"
          alt={producto.nombreProducto}
        ></img>
      </td>
      <td>{producto.categoria}</td>
      <td className="text-center">
        <Button variant="warning" className="me-lg-2">
          <i className="bi bi-pencil-square"></i>
        </Button>
        <Button variant="danger" onClick={() => {
          borrarProducto(producto.id)
        }}>
          <i className="bi bi-trash"></i>
        </Button>
      </td>
    </tr>
  );
};

export default ItemProducto;

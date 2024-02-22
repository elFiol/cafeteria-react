import { Form, Button } from "react-bootstrap";
import { useForm, Controller } from "react-hook-form";
import { CrearProductoAPI } from "../../../helpers/queries";

const FormularioProducto = () => {
  const { register, handleSubmit, formState: { errors }, control } = useForm();

  const productoValidado = (producto) => {
    console.log(producto)
    CrearProductoAPI(producto)
  }
  return (
    <section className="container mainSection">
      <h1 className="display-4 mt-5">Nuevo producto</h1>
      <hr />
      <Form className="my-4" onSubmit={handleSubmit(productoValidado)}>
        <Form.Group className="mb-3" controlId="formNombreProdcuto">
          <Form.Label>Producto*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Cafe"
            {...register('nombreProducto', {
              required: "El nombre es obligatorio",
              minLength: {
                value: 2,
                message: "el nombre del producto debe tener como minimo 2 caracteres"
              },
              maxLength: {
                value: 20,
                message: "el nombre del producto debe tener como maximo 20 caracteres"
              }
            })}
          />
          <Form.Text className="text-danger">
            {errors.nombreProducto?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Precio*</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ej: 50"
            {
            ...register("precio", {
              required: "el Precio es obligatorio",
              max: {
                value: 100000,
                message: "El Precio no puede sobresalir de los 100.000"
              },
              min: {
                value: 1,
                message: "el producto no puede ser gratis aqui"
              },
              pattern: {
                value: /^\d+$/,
                message: "El precio debe ser un número"
              },
              maxLength: {
                value: 10,
                message: "El precio solo puede tener 10 caracteres como maximo"
              }
            })
            }
          />
          <Form.Text className="text-danger">
            {errors.precio?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Imagen URL*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: https://www.ejemplo.com"
            {...register("imagen", {
              pattern: {
                value: /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)/,
                message: "Por favor, ingresa una URL de imagen válida"
              },
              required: "la imagen es obligatoria"
            })}
          />
          <Form.Text className="text-danger">
            {errors.imagen?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formCategoria">
          <Form.Label>Categoría*</Form.Label>
          <Controller
            name="categoria"
            control={control}
            rules={{ required: "Seleccione una categoría" }}
            render={({ field }) => (
              <Form.Select {...field}>
                <option value="">Seleccione una opcion</option>
                <option value="Infusiones">Infusiones</option>
                <option value="Batidos">Batidos</option>
                <option value="Dulce">Dulce</option>
                <option value="Salado">Salado</option>
              </Form.Select>
            )}
          />
          <Form.Text className="text-danger">
            {errors.categoria?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formDescripcionBreve">
          <Form.Label>Descripción breve*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Una taza de café suave y aromático."
            as="textarea"
            {
              ...register("descripcionBreve", {
                required: "la descripcion breve es requerida",
                maxLength: {
                  value: 60,
                  message: "la descripcion breve solo puede tener 60 caracteres como maximo"
                },
                minLength: {
                  value: 10,
                  message: "las descripcion debe contener por lo menos 10 caracteres"
                }
              })
            }
          />
          <Form.Text className="text-danger">
            {errors.descripcionBreve?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formDescripcionAmplia">
          <Form.Label>Descripción Amplia*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: El café americano es una bebida caliente que consiste en un espresso diluido con agua caliente, lo que resulta en una taza de café suave y aromático. Es una opción popular para aquellos que prefieren un café menos intenso que el espresso tradicional. Perfecto para disfrutar en cualquier momento del día."
            as="textarea"
            {
              ...register("descripcionAmplia",{
                required: "la descripcion Amplia es requerida",
                minLength: {
                  value: 30,
                  message: "la descripcion debe contener por lo menos 30 caracteres"
                },
                maxLength: {
                  value: 200,
                  message: "la descripcion amplia solo puede tener 200 caracteres como maximo"
                }
              })
            }
          />
          <Form.Text className="text-danger">
            {errors.descripcionAmplia?.message}
          </Form.Text>
        </Form.Group>

        <Button type="submit" variant='success'>
          Guardar
        </Button>
      </Form>
    </section>
  );
};

export default FormularioProducto;

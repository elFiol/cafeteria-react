const URL_PRODUCTO = import.meta.env.VITE_API_PRODUCTO;

console.log(URL_PRODUCTO);

export const leerProductoAPI = async () => {
  try {
    const respuesta = await fetch(URL_PRODUCTO)
    const productos = await respuesta.json()
    return productos
  } catch (error) {
    console.log(error);
  }
};
// post

export const CrearProductoAPI = async (productoNuevo) => {
  try {
    const respuesta = await fetch(URL_PRODUCTO,{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(productoNuevo)
    })
    console.log(respuesta)
    return respuesta
  } catch (error) {
    console.log(error);
  }
};

// put - patch
// delete
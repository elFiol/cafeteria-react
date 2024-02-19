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

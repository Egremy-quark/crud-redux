import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR
} from '../types';
import clienteAxios from '../config/axios';

//Crear nuevos productos
export function crearNuevoProductoAction(producto) {
    return (dispatch) => {
        dispatch( agregarProducto() );

        try {
            //insertar la API
            clienteAxios.post('/productos', producto)

            // Si todo sale bien, actualiza al state
            dispatch( agregarProductoExito(producto) );
        }catch (error) {
            console.log(error)
            //Si hay un error cambia el state
            dispatch( agregarProductoError(true) );
        }
    }
}

const agregarProducto = () => ({
    type: AGREGAR_PRODUCTO,
    payload: true
})


const agregarProductoExito = producto => ({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto
})

const agregarProductoError = estado => ({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: estado
})
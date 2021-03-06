import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Actions de Redux
import { crearNuevoProductoAction } from '../actions/productoActions'

const NuevoProducto = () => {

    //state del componente
    const [nombre, guardarNombre] = useState('');
    const [precio, guardarPrecio] = useState(0);

    // utilizar use dispatch y te crea una función
    const dispatch = useDispatch();

    //mandar llamar el action de productoAction 
    const agregarProducto = producto => dispatch( crearNuevoProductoAction(producto) );

    // cuando el usuario haga submit
    const submitNuevoProducto = e => {
        e.preventDefault();

        //Validar formulario
        if(nombre.trim() === '' || precio <= 0) {
            return 
        }

        //Si no hay errores

        //crear el nuevo producto
        agregarProducto({
            nombre,
            precio
        });
    }

    return (
        <div className='row justify-content-center'>
            <div className='col-md-8'>
                <div className='card'>
                    <div className='card-body'>
                        <h2 className='text-center mb-4 font-weight-bold'>
                            AGREGAR NUEVO PRODUCTO
                        </h2>

                        <form
                            onSubmit={submitNuevoProducto}
                        >
                            <div className='form-group'>
                                <label>Nombre producto</label>
                                <input
                                    type='text'
                                    className='form-control'
                                    placeholder='Nombre del producto'
                                    name='nombre'
                                    value={nombre}
                                    onChange={e => guardarNombre(e.target.value)}
                                />
                            </div>

                            <div className='form-group'>
                                <label>Precio producto</label>
                                <input
                                    type='number'
                                    className='form-control'
                                    placeholder='Precio del producto'
                                    name='precio'
                                    value={precio}
                                    onChange={e => guardarPrecio( Number(e.target.value))}
                                />
                            </div>

                            <button
                                type='submit'
                                className='btn btn-primary font-weight-bold text-uppercase d-block w-100'
                            >Agregar</button>

                            
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default NuevoProducto
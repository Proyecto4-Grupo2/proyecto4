import React from "react";
import { useForm } from "react-hook-form";
import "../style/newsletter.css";

const Newsletter = () => {
    
    const { register, formState: { errors }, watch, handleSubmit} = useForm();
    
    const onSubmit = (data) => {
        console.log(data);
    }

    return <div className="contenedor-newsletter">
        <h2>Newsletter</h2>
        <p>Si deseas información sobre nuestras rutas, suscríbete{watch('nombre')}</p>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Email</label>
                <input type="text" {...register('email', {
                    required: true,
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
                })} />
                {errors.email?.type === 'pattern' && <p>El formato del email es incorrecto</p>}
                {errors.email?.type === 'required' && <p>El campo 'email' es requerido</p>}
                </div>
                <input type="submit" className="btn-enviar" value="Enviar"/>
            </form>
    </div>
}

export default Newsletter;
import React, {useRef} from "react";
import {useForm} from "react-hook-form";
import "../style/formulario.css";
import ReCAPTCHA from "react-google-recaptcha"; 


const Formulario = () => {
    
    const { register, formState: { errors }, watch, handleSubmit} = useForm();
    
    const onSubmit = (data) => {
        console.log(data);
    }

    const incluirProvincia = watch('incluirProvincia')

    const dni = watch('dni')

    const nie = watch('nie')

    const captcha = useRef(null);

    const onChange =() => {
        if(captcha.current.getValue()){
            console.log('el usuario no es un robot');
        }
    }

    return <div className="contenedor-formulario">
        <h2>Contáctanos</h2>
        <p>Bienvenid@ {watch('nombre')}</p>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Nombre</label>
                <input type="text" {...register('nombre', { 
                    required: true,
                    minLength: 3,
                    maxLength: 20,
                })}/>
                {errors.nombre?.type === 'required' && <p>El campo 'nombre' es requerido</p>}
                {errors.nombre?.type === 'minLength' && <p>El campo 'nombre' debe tener al menos 3 caracteres</p>}
                {errors.nombre?.type === 'maxLength' && <p>El campo 'nombre' debe tener máximo 20 caracteres</p>}
            </div>
            <div>
                <label>Email</label>
                <input type="text" {...register('email', {
                    required: true,
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
                })} />
                {errors.email?.type === 'pattern' && <p>El formato del email es incorrecto</p>}
                {errors.email?.type === 'required' && <p>El campo 'email' es requerido</p>}
            </div>
            <div>
                <label>DNI</label>
                <input type="checkbox" {...register('dni')} />
            </div>
            { dni && (
            <div>
                <label>DNI</label>
                <input type="text" {...register('dni',{
                    pattern: /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/i,
                })}/>
                {errors.dni && <p>El formato del DNI es incorrecto</p>}
            </div>
            )}
            <div>
                <label>NIE</label>
                <input type="checkbox" {...register('nie')} />
            </div>
            { nie && (
                <div>
                <label>NIE</label>
                <input type="text" {...register('nie',{
                    pattern: /^[XYZ][0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKE]$/i,
                })}/>
                {errors.nie && <p>El formato del NIE es incorrecto</p>}
            </div>
            )}
            <div>
                <label>¿Nos indicas tu provincia?</label>
                <input type="checkbox" {...register('incluirProvincia')} />
            </div>
            { incluirProvincia && (
                <div>
                <label>Provincia</label>
                <input type="text" {...register('provincia')}/> <br/>
            </div>
            )}
            <br/>
            <div className="contenedor-mensaje">
                <label>Mensaje</label>
                <input type="text" {...register('mensaje')}/>
            </div>
            <div className="recaptcha"> 
                <ReCAPTCHA 
                    ref={captcha}
                    sitekey ="6Le2F_MhAAAAAPzMMFth2MvpZXjW9FgyUozVCtWK"
                    onChange={onChange}
                />
                <div className="g-recaptcha" data-sitekey="6Le2F_MhAAAAAPzMMFth2MvpZXjW9FgyUozVCtWK"></div>
            </div>
            <input type="submit" className="btn-enviar" value="Enviar"/>
        </form>
    </div>
}

export default Formulario; 

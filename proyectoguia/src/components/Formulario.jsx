import { useForm } from "react-hook-form";

const Formulario = () => {
    
    const { register, formState: { errors }, watch, handleSubmit} = useForm();
    
    const onSubmit = (data) => {
        console.log(data);
    }

    const incluirProvincia = watch('incluirProvincia')

    const dni = watch('dni')

    const nie = watch('nie')

    return <div>
        <h2>Formulario</h2>
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
                <input type="text" {...register('provincia')}/>
            </div>
            )}
            <div>
                <label>Mensaje</label>
                <input type="text" {...register('mensaje')}/>
            </div>
            <input type="submit" value="Enviar"/>
        </form>
    </div>
}

export default Formulario;
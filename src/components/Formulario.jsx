function Formulario(){

    return(
       <div className="md:w-1/2 lg:w-2/5">
         <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
         <p className="text-lg mt-5 text-center mb-10">Añade Pacientes  y {''}
            <span className="text-indigo-600 font-bold ">Administralos</span>
         </p>

         <form action="" className="bg-white shadow-md rounded-lg py-10 px-5">

            <div className="mb-5">
                <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>
                <input 
                id="mascota"
                type="text" 
                placeholder="Nombre de la mascota" 
                 className="border-2 w-full p-2 mt-2 rounded-md"
                 />
            </div>


            <div className="mb-5">
                <label htmlFor="nombrepropietario" className="block text-gray-700 uppercase font-bold">Nombre Propietario</label>
                <input 
                id="nombrepropietario"
                type="text" 
                placeholder="Nombre  del propietario" 
                 className="border-2 w-full p-2 mt-2 rounded-md"
                 />
            </div>

            <div className="mb-5">
                <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email</label>
                <input 
                id="email"
                type="email" 
                placeholder="Email contacto propietario" 
                 className="border-2 w-full p-2 mt-2 rounded-md"
                 />
            </div>


            <div className="mb-5">
                <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">Alta</label>
                <input 
                id="alta"
                type="date" 
                
                 className="border-2 w-full p-2 mt-2 rounded-md"
                 />
            </div>

            <div className="mb-5">
                <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">Alta</label>
              <textarea name="" id="sintomas" className="border-2 w-full p-2 mt-2 rounded-md"
                placeholder="Describe los sintomas" 
              ></textarea>
            </div>


            <input type="submit" 
            className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 rounded-md" 
            value='Agregar Paciente' 
            />
         </form>
       </div>
    )
}
export default Formulario;
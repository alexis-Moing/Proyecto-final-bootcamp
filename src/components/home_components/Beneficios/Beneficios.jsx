import teachers from './iconsbeneficios/teachers.png'
import certificados from './iconsbeneficios/certificados.png'
import clases from './iconsbeneficios/clases.png'
import cursosa from './iconsbeneficios/cursosa.png'

const Beneficios = () => {
  return (
    <>
    <section className='bg-[#4E4FEB] p-20'>
       
                <h2 className='text-white text-5xl font-bold text-center'>¿Porque escogernos?</h2>

                <div className='md:mx-20 my-20 flex flex-col md:flex-row gap-20'>

                    <div className='box-border w-96 h-40 flex rounded-lg bg-black p-5 md:flex-col justify-center items-center shadow-2xl md:w-60 md:h-60'>
                        <img className='' src={teachers} alt="logoprofesores" />

                        <div className='ml-5 md:ml-0'>
                            <strong className='text-white flex text-center'>TENEMOS LOS MEJORES</strong>
                            <p className='text-white flex md:text-center md:text-sm'>Profesores especializados que se encuentran en la industria</p>
                        </div>
                    </div>

                    <div className='box-border w-96 h-40 rounded-lg bg-black p-5 flex md:flex-col justify-center items-center shadow-2xl  md:w-60 md:h-60'>
                        <img src={clases} alt="logoclases" />
                        <div className='ml-5 md:ml-0'>
                            <strong className='text-white flex text-center'>CLASES 100% ONLINE</strong>
                            <p className='text-white flex md:text-center md:text-sm'>Clases 100% online en vivo, con material y grabaciones personalizadas</p>

                        </div>
                    </div>

                    <div className='box-border w-96 h-40 rounded-lg bg-black p-5 flex md:flex-col justify-center items-center shadow-2xl  md:w-60 md:h-60'>
                        <img src={cursosa} alt="logocursos" />
                        <div className='ml-5 md:ml-0'>
                            <strong className='text-white flex text-center'>CURSOS APROBADOS</strong>
                            <p className='text-white flex md:text-center md:text-sm'>Nuestros cursos an sido aprobados por los mejores de muchas universidades</p>

                        </div>
                    </div>

                    <div className='box-border h-40 w-96 rounded-lg bg-black p-5 flex md:flex-col justify-center items-center shadow-2xl  md:w-60 md:h-60'>
                        <img src={certificados} alt="logocertificados" />
                        <div className='ml-5 md:ml-0'>
                            <strong className='text-white flex text-center'>CERTIFICADOS VERIFICADOS</strong>
                            <p className='text-white flex md:text-center md:text-sm'>Obten un certificado valido y aumenta tu nivel</p>

                        </div>
                    </div>

                </div>
        
    </section>
 
    </>
  )
}

export default Beneficios
import { useState } from "react";
import './Alumno.css'; 

function Alumno(props){

  let semestre = props.alumnoComp.semestre;
  let promedio = props.alumnoComp.promedio;

  const [semestre1, setSemestre1] = useState (semestre);


  function calcularSemestre(){
    if (promedio>=70)
        setSemestre1(semestre1 + 1);

  } 
    return(
        <div>
        <table>      
            <thead>
                <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Matricula</th>
                    <th scope="col">Promedio</th>
                    <th scope="col">Semestre</th>
                    <th scope="col">Calcular Semestre</th>
                </tr>
            </thead>
            <tbody>
                <tr width="100%">
                    <td width="50px">{props.alumnoComp.nombre}</td>
                    <td>{props.alumnoComp.matricula}</td>
                    <td>{promedio}</td>
                    <td>{semestre1}</td>
                    <td> <button className='boton' onClick={calcularSemestre}>Calcular</button></td>
                </tr>
            </tbody>
        </table>        
        </div>
    )
}

export default Alumno;
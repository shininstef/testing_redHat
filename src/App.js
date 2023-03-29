import './App.css';
import './Alumno.css';
import Alumno from './Alumno.js';
import Nuevo from './Nuevo.js';

function App() {
  //class alumno {
const alumno1 =  [
  {
    nombre: 'Stephanie Ruiz Díaz',
    matricula: 'A00227730',
    promedio: 95,
    semestre: 5,
  },
  {

    nombre: 'Alejandro Vazquez',
    matricula: 'A00220213',
    promedio: 98,
    semestre: 5,
  },
];

  const alumnos = [...alumno1, {

    nombre: 'Silvana Ruiz',
    matricula: 'A01254897',
    promedio: 100,
    semestre: 5,
  }];

  return (
    <div className="App">
      <Nuevo></Nuevo>
      {alumnos.map((alumno) => (<Alumno alumnoComp={alumno}></Alumno>))}
    </div>
  );
}

export default App;

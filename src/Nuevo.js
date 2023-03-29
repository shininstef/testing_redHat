import './Alumno.css';
function Nuevo ()
{
    function nuevoalumno(event) {
        event.preventDefault();
        console.log('hola');
    }


    //returning table
    return (
        <form onSubmit={nuevoalumno}>
        <div className="alumno-item">
            <div>
                <table>
                    <tbody>
                        <tr> 
                            <td className= "td"><input name= 'nombre' type="text"></input></td>
                            <td className="td"><input name= "td" type="text"></input></td>
                            <td className="td"><input name="promedio" type="text"></input></td>
                            <td> <input className="td" type="text"></input></td>
                            <button className="boton" type="submit">Nuevo Alumno</button>
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
        </form>
    )
}
export default Nuevo;
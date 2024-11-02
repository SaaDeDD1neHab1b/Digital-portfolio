import { useState } from 'react';
import Task from './Task';


let artists = [
    { id: 0, title: 'Marta Colvin Andrade', desc: "desc", completed: true },
    { id: 1, title: 'Lamidi Olonade Fakeye', desc: "desc", completed: false },
    { id: 2, title: 'Louise Nevelson', desc: "desc", completed: false },
];

let nextId = 0;

if (artists.length > 0) {
    nextId = artists[artists.length - 1].id + 1
}

export default function List() {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [task, setTasks] = useState(artists);


    return (
        <>
            {/* Añadir tarea*/}
            <h1>Inspiring sculptors:</h1>
            <input value={title} onChange={e => setTitle(e.target.value)} />
            <input value={desc} onChange={e => setDesc(e.target.value)} />
        
            <button onClick={() => {
                setTasks([...task, { id: nextId++, title: title, desc: desc , completed: false}]);
                artists = [...task, { id: nextId++, title: title, desc: desc, completed: false}]
            }}>Add
            </button>

            <select name="cars" id="cars" onChange={() => {
                console.log(document.getElementById("cars").value)

                if (document.getElementById("cars").value === "completados") {
                    setTasks(
                        artists.filter((s) => s.completed)
                    )
                } else if (document.getElementById("cars").value === "pendientes") {
                    setTasks(
                        artists.filter((s) => !s.completed)
                    )
                } else {
                    setTasks(
                        [...artists]
                    )
                }

            }}>
                <option value="todos">todos</option>
                <option value="completados">completados</option>
                <option value="pendientes">pendientes</option>
            </select>



            {/* Rendirizar lista */}
            {task.map(artist => (
                <div>
                    <Task title={artist.title} desc={artist.desc} completed={artist.completed} />
                    {/* Button eliminar */}
                    <button onClick={() => {
                        setTasks(
                            task.filter(a =>
                                a.id !== artist.id
                            )
                        );
                    }}>
                        delete
                    </button>
                    {/* Marcar completado*/}
                    <button onClick={() => {
                        if (artist.completed) {
                            artist.completed = false
                        } else {
                            artist.completed = true
                        }

                        setTasks([...task])
                    }}>{artist.completed ? "uncomplete" : "complete"}</button>
                </div>
            ))}

            {console.log(artists)}






        </>
    );
}

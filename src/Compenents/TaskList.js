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

const Tasklist = () => {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [task, setTasks] = useState(artists);


    function addTask() {
        setTasks([...task, { id: nextId++, title: title, desc: desc, completed: false }]);
        artists = [...task, { id: nextId++, title: title, desc: desc, completed: false }]
    }


    function filterTasks(e) {
        if (e.target.value === "completados") {
            setTasks(
                artists.filter((s) => s.completed)
            )
        } else if (e.target.value  === "pendientes") {
            setTasks(
                artists.filter((s) => !s.completed)
            )
        } else {
            setTasks(
                [...artists]
            )
        }
    }

    function removeTask(actualTask) {
        setTasks(task.filter(a => a.id !== actualTask.id))
    }

    function completeTask(actualTask) {
        actualTask.completed ? actualTask.completed = false : actualTask.completed = true
        setTasks([...task])
    }

    return (
        <>
            {/* Añadir tarea*/}
            <h1>Inspiring sculptors:</h1>
            <input value={title} onChange={e => setTitle(e.target.value)} />
            <input value={desc} onChange={e => setDesc(e.target.value)} />
            <button onClick={addTask}>Add</button>

        
            <select name="cars" id="cars" onChange={e => filterTasks(e)}>
                <option value="todos">todos</option>
                <option value="completados">completados</option>
                <option value="pendientes">pendientes</option>
            </select>

            {/* Rendirizar lista */}
            {task.map(artist => (
                <div>
                    <Task title={artist.title} desc={artist.desc} completed={artist.completed} />
                    <button onClick={() => removeTask(artist)}>delete</button>
                    <button onClick={() => completeTask(artist)}>{artist.completed ? "uncomplete" : "complete"}</button>
                </div>
            ))}

        </>
    );
}


export default Tasklist

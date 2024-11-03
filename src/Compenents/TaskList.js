import { useState } from 'react';
import Task from './Task';


/**
 * Compenent TaskList represents a list of tasks.
 */

const Tasklist = ({name, templateTasks}) => {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [tasks, setTasks] = useState(templateTasks);


    /**
     * Get the last id depending of the last object id.
     * If doesn't exist assign a zero id.
     */

    function getLastId() {
        let nextId = 0

        if (templateTasks.length > 0) {
            nextId = tasks[tasks.length - 1].id + 1
        } else {
            nextId++;
        }

        return nextId
    }

    /**
     * Updates the actual useState hook of an object array and 
     * the template array with new task object. 
     */

    function addTask() {
        let lastId = getLastId()
        setTasks([...tasks, { id: lastId, title: title, desc: desc, completed: false }]);
        templateTasks = [...tasks, { id: lastId, title: title, desc: desc, completed: false }]
        taskAlert(title)
    }

    /**
     * Alerts the user that the task has been created 
     */

    function taskAlert(name) {
        alert("Created the task with name: " + name)
    }

    /**
     * Filter the tasks list returning from the template array 
     * an array with the specified proprety completed.
     */

    function filterTasks(dropDownList) {
        if (dropDownList.target.value === "completed tasks") {
            setTasks(
                templateTasks.filter((s) => s.completed)
            )
        } else if (dropDownList.target.value === "pending tasks") {
            setTasks(
                templateTasks.filter((s) => !s.completed)
            )
        } else {
            setTasks(
                [...templateTasks]
            )
        }
    }

    /**
     * Remove the actual task returning a array without the task.
     */

    function removeTask(actualTask) {
        setTasks(tasks.filter(a => a.id !== actualTask.id))
    }

    /**
     * Complete the actual task updating the proprety
     * "completed" from the object on task array
     */

    function completeTask(actualTask) {
        actualTask.completed ? actualTask.completed = false : actualTask.completed = true
        setTasks([...tasks])
    }



    return (
        <>
        <div className='list'>
        <h1>List of {name}</h1>
            <label for="filter">Filter</label>
            <select name="filter" id="filter" onChange={dropDownList => filterTasks(dropDownList)}>
                <option value="All">All</option>
                <option value="completed tasks">completed tasks</option>
                <option value="pending tasks">pending tasks</option>
            </select>
            <br />
            <h3>Add task</h3>

            <label for="title">Title</label>
            <input id="title" value={title} placeholder='Enter the name of task' onChange={e => setTitle(e.target.value)} />
            <br />
            <label for="desc">Description</label>
            <input id="desc" value={desc} placeholder='Enter the description of task' onChange={e => setDesc(e.target.value)} />
            <br />
            <button className="myButton" onClick={addTask}>Add</button>
            <br />

            {/**
             * Rendering the list of tasks
             */}

            {tasks.map(task => (
                <div className='task'>
                    <Task title={task.title} desc={task.desc} completed={task.completed} />
                    <button className="myButton" onClick={() => removeTask(task)}>delete</button>
                    <button className="myButton" onClick={() => completeTask(task)}>{task.completed ? "uncomplete" : "complete"}</button>
                </div>
            ))}
        </div>
        </>
    );
}


export default Tasklist

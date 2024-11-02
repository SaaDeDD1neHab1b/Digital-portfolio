const Task = (props) => {
    if (props.completed) {
        return (
            <div className="completed">
                <h3>{props.title}</h3>
                <p>{props.desc}</p>
            </div>
        )
    } else {
        return (
            <div>
                <h3>{props.title}</h3>
                <p>{props.desc}</p>
            </div>
        )
    }



}

export default Task
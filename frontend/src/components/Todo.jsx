import React from 'react'

const Todo = ({id, topic, description, date, done}) => {
    return (
        <tr>
            <td>{id}</td>
            <td>{topic}</td>
            <td>{description}</td>
            <td>{done}</td>
            <td>{date}</td>
        </tr>
    )
}

export default Todo
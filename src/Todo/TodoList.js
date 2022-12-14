import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';
const styles={
    ul: {
        listStyle: 'none',
        color: 'red',
        margin: 0,
        padding: 0
    }
}

function TodoList(props){
    return(
        <ul style={styles.ul}>
            {props.todos.map((todo, index) => {
                return (
                    <TodoItem 
                        key = {todo.id} 
                        todo ={todo} 
                        index={index} 
                        onChange={props.onToggle} />
                )
            })}
        </ul>
    )
}

TodoList.propTypes ={
    todos: PropTypes.arrayOf(PropTypes.object),
    onToggle: PropTypes.func.isRequired
}
export default TodoList;
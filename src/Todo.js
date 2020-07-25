import React from "react";
import {connect} from "react-redux";


const Todo = ({todoArray}) => {
    return <div>
        <ul>
            {todoArray.map((todo, index) => <li key={index}>{todo}</li>)}
        </ul>
    </div>
}


const mapStateToProps = (state) => {
    return {
        todoArray: state.todo
    }
}

export default connect(mapStateToProps)(Todo);

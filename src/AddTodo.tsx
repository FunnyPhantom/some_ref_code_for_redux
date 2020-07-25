import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import { addTodo} from "./redux/todoAction";


interface AddTodoProps {
  onAddTodo?: (text: string) => void
}

const AddTodo : React.FC<AddTodoProps> = ({onAddTodo}) => {

  const [textInput, setTextInput] = useState<string>('');




  return <div>
    <input value={textInput} onChange={(e) => {setTextInput(e.target.value)}} />
    <button onClick={() => {
      onAddTodo && onAddTodo(textInput);
      setTextInput('')
    }
    }>
      addTodo
    </button>
  </div>
}

const mapStateToProps = (state: any) => ({})

const mapDispatchToProps = (dispatch: any) => {

  return bindActionCreators({
    onAddTodo: addTodo
  }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(AddTodo)

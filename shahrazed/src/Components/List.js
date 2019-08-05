import React from "react";
import {connect} from 'react-redux'
import {supp} from "../redux/action"

const List = (props) => {
  return (
    <div className="shadow-sm p-3 mb-5 bg-white rounded w-50    ">
      <ul className="list-group list-group-flush">
        {props.todoList.map((e, i) => (
          <div >
            <li className="list-group-item d-flex justify-content-between w-100" key={i}>
              {e}

              <button onClick={()=>props.supprimer(i)} type="button" className="btn btn-danger">
                X
              </button>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps=(state)=>{
  return{ 
    todoList:state.list
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{ 
    supprimer:(x)=>dispatch(supp(x))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(List);

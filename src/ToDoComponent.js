import React from "react";
import MiniMenu from "./MiniMenu";


function ToDoComponent(props){
let {data, num, formType, setFormType, editId, setEditId} = props

console.log(data)

console.log({fancy:[formType, setFormType, editId, setEditId]})

function openMiniMenu(e){
    e.preventDefault()
    if(document.querySelector(`#miniMenu${num}`).classList.contains('display')){
        document.querySelector(`#miniMenu${num}`).classList.remove('display')
    } else {
        document.querySelector(`#miniMenu${num}`).classList.add('display')
    }


}




    return (
        <>
        <div className="to_do_component">
            
            
            {data.completed ? <div className="comp_button green_button"><div className="lines"></div><div className="lines"></div></div> : <div className="comp_button"></div>}
            
            <div className="list_item">{data.title}</div>
            <div className="list_user">
                <span>{`User: ${data.userId}`}</span>
            </div>
            {data.completed ? "" : <div className="list_menu" onClick={(e) => openMiniMenu(e)}><div className="dots"></div><div className="dots"></div><div className="dots"></div></div>}
        </div>
        <MiniMenu ide={num} data={data} formType={formType} setFormType={setFormType} editId={editId} setEditId={setEditId}/>
        </>
    )
}

export default ToDoComponent
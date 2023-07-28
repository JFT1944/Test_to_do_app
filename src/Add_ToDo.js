import React from "react";



function Add_ToDO(props){
    let {formType, setFormType, editId, setEditId} = props


function addTab(e){
    e.preventDefault()
    setFormType('add')
    document.querySelector('#tab').classList.add('openTab')

}


    return(
        <>
        <div className="add_too_do" onClick={(e) => addTab(e)}>
            <div className="lines"></div>
            <div style={{transform:'rotate(90deg)'}} className="lines"></div>
        </div>
        </>
    )
}

export default Add_ToDO
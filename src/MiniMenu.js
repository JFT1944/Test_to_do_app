import React from "react";



function MiniMenu(props){
let {ide, data, formType, setFormType, editId, setEditId} = props

function openEditTab(e){
    e.preventDefault()
    setFormType('edit')
    setEditId(data.id)
    document.querySelector('#tab').classList.add('openTab')
    
    }

function markComplete(e){
    e.preventDefault();
    alert('To Do Marked Complete')
    alert(`Couldn't get the update route to work`)
}










    return(
        <>
        <div className="mini_menu" id={`miniMenu${ide}`}>
            <div className="triangle"></div>
            <div className="MiniMenuOptions">
                <span onClick={(e) => openEditTab(e)}>Edit ToDO</span>
                <hr  style={{width: '90%'}}/>
                <span onClick={(e) => markComplete(e, ide)}>Mark Completed</span>
                
            </div>
        </div>
        </>
    )
}


export default MiniMenu
import React, { useState } from "react";
import ToDoApi from "./API";



function Tab(props){
let {formType, setFormType, editId, setEditId} = props

let [newFormData, getNewFormData] = useState({
    title:'',
    completed:'',
    userId:'',
    id:''
})
function handleChange(e){
    const {name, value} = e.target;
    console.log([name, value])
    getNewFormData(data => ({
        ...data,
        [name]: value
    }))

}
function handleClick(e){
    e.preventDefault();
    console.log(newFormData)
    if(formType === 'add'){
        ToDoApi.addToDos(newFormData);
        
    } else {
        newFormData.id = editId;
        ToDoApi.updateToDO(newFormData).then((res) => {
            console.log(res)
        })
        
    }
    getNewFormData({
        title:'',
    completed:'',
    userId:'',
    id:''
    })
    document.querySelector('#tab').classList.remove('openTab')
}


    function removeTab(e){
    e.preventDefault()
    document.querySelector('#tab').classList.remove('openTab')
    }




    if(formType === 'add'){
        return(
            <>
            <div className="Tab" id="tab">
            <div style={{width:"20%", height:'4px', background:"#373157", position:'absolute', top:'10px'}}></div>
            <div className="return_arrow" onClick={((e) => removeTab(e))}>
                <div className="lines"></div>
                <div className="lines"></div>
                <div className="lines"></div>
               
            </div>
            <span style={{fontFamily: "Poppins", fontSize:"24px", top:'56px', color:'white', position:'absolute'}}>
                Add To Do
            </span>
            <div className="add_form_holder">
            <form className="add_form">
                <input type="text" placeholder="New Todos" name='title' value={newFormData.title} onChange={(e) => handleChange(e)}/>
                <select name="userId" value={newFormData.userId} onChange={(e) => handleChange(e)}>
                    <option value='1'>User1</option>
                    <option value='2'>User2</option>
                    <option value='3'>User3</option>
                </select>
                <select name="completed"  value={newFormData.completed} onChange={(e) => handleChange(e)}>
                    <option value={false}>Status</option>
                    <option value={'false1'}>Uncompleted</option>
                    <option value={true}>Completed</option>
                </select>
                <input style={{width:'90%', background:'#6ADD8A'}} type="submit" onClick={(e) => handleClick(e)} placeholder="Finish"/>
                
            </form>
            <div style={{width:'100%', display:'flex', justifyContent:'center', margin:'10px 0'}} onClick={(e)=>removeTab(e)}>
                Quit
            </div>
            </div>
            
            
            
            </div>
            </>
        )
    } else {
        return(
            <>
            <div className="Tab" id="tab">
            <div style={{width:"20%", height:'4px', background:"#373157", position:'absolute', top:'10px'}}></div>
            <div className="return_arrow" onClick={((e) => removeTab(e))}>
                <div className="lines"></div>
                <div className="lines"></div>
                <div className="lines"></div>
               
            </div>
            <span style={{fontFamily: "Poppins", fontSize:"24px", top:'56px', color:'white', position:'absolute'}}>
                Edit To Do
            </span>
            <div className="add_form_holder">
            <form className="add_form">
                <input type="text" placeholder="New Todos" name='title' value={newFormData.title} onChange={(e) => handleChange(e)}/>
                <select name="userId" value={newFormData.userId} onChange={(e) => handleChange(e)} >
                    <option value='1'>User1</option>
                    <option value='2'>User2</option>
                    <option value='3'>User3</option>
                </select>
                <select name="completed" value={newFormData.completed} onChange={(e) => handleChange(e)}>
                    <option value='status'>Status</option>
                    <option value='uncompleted'>Uncompleted</option>
                    <option value='completed'>Completed</option>
                </select>
                <input style={{width:'90%', background:'#6ADD8A'}} type="submit" onClick={(e) => handleClick(e)}/>
                
            </form>
            <div style={{width:'100%', display:'flex', justifyContent:'center', margin:'10px 0'}} onClick={(e)=>removeTab(e)}>
                Quit
            </div>
            </div>
            
            
            
            </div>
            </>
        )
    }
}


export default Tab
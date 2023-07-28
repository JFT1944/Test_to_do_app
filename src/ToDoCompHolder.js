import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SearchBar from "./SearchBar";
import ToDoComponent from "./ToDoComponent";
import ToDoApi from "./API";



function ToDoCompHolder(props){
let {todolist} = useParams()
let [todo, getToDO] = useState([{
completed: true,
id:4, 
title: "et porro tempora",
userId:1
}])
let {formType, setFormType, editId, setEditId} = props
let [sData, getSData] = useState('');
// console.log(open)
// let arr = ["asdasd", "asdasd", "asdasd", "asdasd", "asdasd", "asdasd"]
let [page, newPage] = useState()

if(page !== todolist){
    newPage(todolist)
}
console.log(todolist)
useEffect(() => {
    console.log('ran')
    ToDoApi.getToDos(todolist).then((res) => {
        console.log(res)
        let newRes = res.filter(x => x.title.indexOf(sData) !== -1)
        getToDO(newRes)
        console.log(todo)
    })
}, [page, sData])
    

console.log(todo)
    return(
        <>
        {/* <div style={{height:'151px'}}></div> */}
        <div className="component_holder">
        <SearchBar sData={sData} getSData={getSData}/>
        
        <div style={{width:"30%", height:'3px', background:"#292639"}}></div>
        
        {/* <div style={{}}> */}
        <div style={{'overflow-y':'scroll', height:' calc(100vh - 284px)', position:'fixed', bottom:'20px'}}>
            {!todo ? "loading" : todo.map((x,y) => <ToDoComponent data={x} num={y} formType={formType} setFormType={setFormType} editId={editId} setEditId={setEditId}/>)}
        </div>
        <div style={{height:'20px'}}></div>
        </div>
        </>
    )
}


export default ToDoCompHolder
// Top Level Component

import react, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import ToDoCompHolder from "./ToDoCompHolder";
import Add_ToDO from "./Add_ToDo";
import Tab from "./Tab";



function ToDoTop(){
let [formType, setFormType] = useState('');
let [editId, setEditId] = useState('');
let [sData, getSData] = useState('');


return(
    <>
        <BrowserRouter>
            <NavBar />       
            <Routes >
                <Route exact path='/' element={"Click open or closed to begin"} />
                <Route exact path='/:todolist' element={<ToDoCompHolder formType={formType} setFormType={setFormType} editId={editId} setEditId={setEditId} />} />
                {/* <Route exact path='/' element={<ToDoCompHolder />}/> */}
                
            </Routes>
        <Add_ToDO formType={formType} setFormType={setFormType} editId={editId} setEditId={setEditId} />
        <Tab formType={formType} setFormType={setFormType} editId={editId} setEditId={setEditId} />
        
        
        </BrowserRouter>
    </>
)
}


export default ToDoTop
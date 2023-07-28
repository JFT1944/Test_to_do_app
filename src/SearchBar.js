import React, { useState } from "react";




function SearchBar(props){
let {sData, getSData} = props

function handleChange(e){
    e.preventDefault()
    getSData(e.target.value)

}





    return(
        <>
        
        
        
        <div className="search_bar">
            <form>
                <input type="text" name="sBar" value={sData} placeholder="Search Todo's" onChange={(e) => handleChange(e)}/>
                {/* <img style={{height:'20px', width:'20px', position:'absolute', right:0}}src="https://www.svgrepo.com/show/127033/magnifying-glass.svg" /> */}
                <div className="magnifying_glass">
                    <img src="https://i.imgur.com/PQQZOA3.png-3-24.png" alt="magnifying_glass"/>
                </div>
            </form>
        </div>
        </>
    )
}

export default SearchBar
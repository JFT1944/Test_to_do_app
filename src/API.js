// Page for API Calls 

// const axios = require('axios')
import axios from "axios"


let BASE_URL = "https://jsonplaceholder.typicode.com/users/1/todos"

class ToDoApi{





// ####################################
// User Api Function
// ####################################

static async getToDos(type){
    console.log(type)
    let res = await axios.get(BASE_URL)
    console.log(res)
    if(type === 'open'){
        let newRes = res.data.filter(x => !x.completed)
        console.log(newRes)
        return newRes
    } else if (type === 'closed'){
        let newRes = res.data.filter(x => x.completed)
        console.log(newRes)
        return newRes

    } else{

    }

    return res
}


static async addToDos(data){

    let headers = {
        'Content-type': 'application/json; charset=UTF-8'
    }

const res = await axios.post(
    BASE_URL, 
    JSON.stringify(data),
    headers
)
console.log(res)
    return ""
}

static async updateToDO(data){
    let headers = {
        'Content-type': 'application/json; charset=UTF-8'
    }
    
    // const res = await axios.patch(
    //     `${BASE_URL}/${data.id}`, 
    //     JSON.stringify(data.title),
    //     headers
    // )
    //     console.log(res)
// return""
        return "Couldn't find url to update if not todo/id"

}


}



export default ToDoApi
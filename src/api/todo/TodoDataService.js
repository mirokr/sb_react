import axios from "axios"


class TodoDataService{

    retrieveAllTodos(name){
        return axios.get(`http://localhost:8080/users/${name}/todos`)
        // console.log('executed service')
    }

deleteTodo(name, id){
    return axios.delete(`http://localhost:8080/users/${name}/todos/${id}`)
}




}
export default new TodoDataService()
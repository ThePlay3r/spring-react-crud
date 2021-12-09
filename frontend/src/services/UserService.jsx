import axios from "axios"

const URL = "http://localhost:9000/users/"

class UserService {

    saveUser(user) {
        return axios.post(URL, user)
    }

    getAllUsers() {
        return axios.get(URL)
    }

    getUserById(id) {
        return axios.get(URL + id)
    }

    updateUser(id, user) {
        return axios.put(URL + id, user)
    }

    deleteUser(id) {
        return axios.delete(URL + id)
    }
}

export default new UserService();
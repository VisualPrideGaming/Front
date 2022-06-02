import axios from "axios";

const API_URL = "http://localhost:5000/api/auth";

const register = ( username, mail, password ) => {
    return axios.post(API_URL + "singup" , {
        username,
        mail,
        password,
    });
};

const login = (username, password) => {
    return axios
        .post(API_URL + "singin", {
            username,
            password,
        })
        .then((response) => {
            localStorage.setItem("user", JSON.stringify(response.data));
            return response.data;
        });
}

const logout = ()  => {
    localStorage.removeItem("user");
    return axios.post(API_URL + "singout").then((response) => {
        return response.data;
    })        
}

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
    register,
    login,
    logout,
    getCurrentUser,
}

export default AuthService;
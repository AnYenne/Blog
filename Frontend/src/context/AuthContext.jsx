import { createContext, useState } from "react";

const AuthContext = createContext()


const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState(() => {
    const token = localStorage.getItem("accessToken");
    const user = JSON.parse(localStorage.getItem("user"));
    return token ? {accessToken: token, user} : null
})
    const login = ({token, user}) => {
    setAuth({accessToken: token, user});
    localStorage.setItem('accessToken', token);
    localStorage.setItem('user', JSON.stringify(user))
}

const logout = () => {
    setAuth(null)
    localStorage.removeItem('accessToken');
    localStorage.removeItem('user')
    window.location.reload('/admin/login')
}
    return(
        <AuthContext.Provider value = {{auth, login, logout}}>
          {children}
        </AuthContext.Provider>
    )
}

export {AuthContext, AuthProvider}


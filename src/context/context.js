// import React, { useContext, useState } from "react";

// const Auth = React.createContext();

// export const AuthContext = () => {
//   return useContext(Auth);
// };

// const Context = (props) => {
//   const [token, setToken] = useState("");

//   const userLoggedIn = !!token;

//   const login = (token, email) => {
//     console.log(token);

//     setToken(token);
//     localStorage.setItem("token", token);
//   };

//   const logout = () => {
//     setToken(null);
//     localStorage.removeItem("token");
//   };

//   let contextValue = {
//     token: token,
//     isUserLoggedIn: userLoggedIn,
//     login: login,
//     logout: logout,
//   };

//   return <Auth.Provider value={contextValue}>{props.children}</Auth.Provider>;
// };

// export default Context;

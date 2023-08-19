// import React, { useContext, useState } from "react";

// const List = React.createContext();

// export const ListContext = () => {
//   return useContext(List);
// };

// const ListContexts = (props) => {
//   const [valueUpdated, setValueUpdated] = useState(false);

//   const ItemUpdate = () => {
//     setValueUpdated(true);
//   };

//   let listValue = {
//     valueUpdated: valueUpdated,
//     itemUpdate: ItemUpdate,
//   };

//   console.log(listValue);

//   return <List.Provider value={listValue}>{props.children}</List.Provider>;
// };

// export default ListContexts;

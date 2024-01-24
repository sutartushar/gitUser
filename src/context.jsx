import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

const api = "https://api.github.com/users";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);

  const getUser = async () => {
    try {
      let response = await axios.get(api);
      setUsers(response.data);
    } catch (error) {
      console.log("error", error.message);
    }
  };

  // Function to set the selected user
  const selectUsers = async (userId) => {
    try {
      let response = await axios.get(`${api}/${userId}`);
      setSelectedUser(response.data);
    } catch (error) {
      console.log("error", error.message);
    }
  };

  useEffect(() => {
    let timer = setTimeout(() => {
      getUser();
      return () => clearTimeout(timer);
    }, 2000);
  }, []);

  return (
    <AppContext.Provider
      value={{
        users,
        query,
        setQuery,
        selectedUser,
        setSelectedUser,
        selectUsers,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppProvider, useGlobalContext };

import CardComponent from "./components/CardComponent";
import SearchBar from "./components/SearchBar";
import UserDetails from "./components/UserDetails";
import { Route, Routes } from "react-router-dom";

const Home = () => {
  return (
    <>
      <SearchBar />
      <Routes>
        <Route path="/" element={<CardComponent />} />
        <Route path="/users/:id" element={<UserDetails />} />
      </Routes>
    </>
  );
};

export default Home;

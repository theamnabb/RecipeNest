import React, { useState } from "react";
import FryingPan from "../components/FryingPan/FryingPan";
import Recipe from "../components/Recipe";

const Home = ({}) => {
  // Store user input query
  const [query, setQuery] = useState("");
  // Store GitHub user data
  const [userData, setUserData] = useState(null);


  // // Handle input change
  const handleChange = (e)=>{
    setQuery(e.target.value);
    console.log(e.target.value); 
  }

  // Fetch data from API
  useEffect(()=>{
    const fetchData = async()=>{

    }
  },[])
  return (
    <>
      {/* Search Input */}
      <div className="flex justify-center items-center mx-5 md:m-0">
        <input
          type="text"
          className="w-[500px] p-2 ps-10 text-sm text-gray-900 shadow-lg border border-red-100 rounded-full bg-gray-50 focus:outline-none focus:ring-1 focus:ring-red-600"
          placeholder="Search..."
          onChange={handleChange}
        />
      </div>

      {/* Frying Pan */}
      <p className="lg:text-4xl text-xl text-center text-red-300 font-semibold mt-6">
        Nothing to show, please search something!
      </p>
      <FryingPan />
      {/* <Recipe /> */}
    </>
  );
};

export default Home;

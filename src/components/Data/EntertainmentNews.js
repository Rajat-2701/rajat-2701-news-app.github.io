import React from "react";
import { useAPI } from "../../context/NewsContextProvider";

const EntertainmentNews = () => {
  const { entertainmentNews } = useAPI();
  console.log("usa", entertainmentNews);
  return <div>UsaNews</div>;
};

export default EntertainmentNews;

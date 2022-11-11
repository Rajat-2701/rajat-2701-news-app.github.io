import React, { useContext, useEffect, useState } from "react";
import NewsContext from "./NewsContext";

export const NewsContextProvider = ({ children }) => {
  const [businessNews, setBusinessNews] = useState([]);
  const [entertainmentNews, setEntertainmentNews] = useState([]);
  useEffect(() => {
    fetch("https://newsapi.org/v2/top-headlines?category=business&apiKey=513adca09ba64f7b9f03febaf79b2bce")
      .then((response) => response.json())
      .then((res) => setBusinessNews(res?.articles));
  }, []);
  useEffect(() => {
    fetch("https://newsapi.org/v2/top-headlines?category=entertainment&apiKey=513adca09ba64f7b9f03febaf79b2bce")
      .then((res) => res.json())
      .then((response) => setEntertainmentNews(response?.articles));
  }, []);
  return <NewsContext.Provider value={{ businessNews, entertainmentNews }}>{children}</NewsContext.Provider>;
};
export function useAPI() {
  const context = useContext(NewsContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}

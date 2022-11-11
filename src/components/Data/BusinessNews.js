import React from 'react'
import { useAPI } from '../../context/NewsContextProvider';

const BusinessNews = () => {
  const { businessNews } = useAPI();
  console.log("news", businessNews);
  return (
    <div>Data</div>
  )
}

export default BusinessNews
import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import { resolve } from 'path';
import Form from './form';
import { FormData } from './types';
import { fetchRecommendation } from './api';

// mockup function
interface RecommendationData{
  recommendedMusic: string;
}



const  App:React.FC = () => {

  const [recommendation,setRecommendation] = useState<RecommendationData | null>(null);

  const fetchData = async (data:FormData) =>{
    try{
      const result = await fetchRecommendation(data);
      console.log("Recommendation result", result);
      setRecommendation(result);
    }catch(error:unknown){
      if(error instanceof Error){
        console.log('Error:', error.message)
        alert('Error:' + error.message)
      }else{
        console.error("Unexpected error:", error)
      }
    }
  }


 
  return (
    <>
      <div>
      <h1>Music Recommendation App</h1>
            <Form onSubmit={fetchData} />
            {recommendation && (
              <div>
                <h2>Recommendation:</h2>
                <p>{recommendation.recommendedMusic}</p>
                </div>
            )}
      </div>
    
    </>
  );
}

export default App;

import { FormData } from "./types"; 

const API_BASE_URL = "http://localhost:5000/"

export const fetchRecommendation = async (data:FormData) =>{
    const response = await fetch(`${API_BASE_URL}/recommendation`,{
        method:"POST",
        headers:{
            'Content-Type': 'application/json',
        },
        body:JSON.stringify(data),
    });
    const rawResponseText = await response.text();
    console.log(await rawResponseText)
    if(!response.ok){
        throw new Error(`Failed to fetch recommendation. Status ${response.status}`);
    }
   

  const result = JSON.parse(rawResponseText)
   return result;
    
}


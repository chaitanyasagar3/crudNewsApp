import React, {useState, useEffect} from "react";
import axios from "./axios";

const NewsList =() =>{
    const[articles, setArticles] = useState([])

    useEffect(()=>{
        const getArticles = async ()=>{
            const response = await axios.get('https://newsapi.org/v2/everything?q=Apple&from=2023-03-16&sortBy=popularity&apiKey=d14ab07bf14c4d76b0ec22664d41e33e')
            console.log(response)
        }
        
        getArticles()
    },[])
    return (
        <div>

        </div>
    )
}

export default NewsList

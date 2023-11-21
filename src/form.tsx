import React, { useState } from "react";
import { FormData, MBTIType } from "./types";

interface FormProps{
    onSubmit: (data:FormData) => void;
}

const Form:React.FC<FormProps> = ({onSubmit}) =>{
    const [formData,setFormData] = useState<FormData>({
        username: '',
        favouriteArtist: '',
        favouriteGenre: '',
        personalityType: 'ISTJ'
    });

    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>{
        const {name,value} = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    }
    const handleSubmit = (e:React.FormEvent) =>{
        e.preventDefault();
        onSubmit(formData);
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
        <label>Username</label>
            <input 
            type="text"
            name = "username"
            value = {formData.username}
            onChange={handleInputChange}
            />
            <br />
            <label>Favourite Artist</label>
            <input 
            type="text"
            name = "favouriteArtist"
            value = {formData.favouriteArtist}
            onChange={handleInputChange}
            />
            <br />
             <label>Favourite Genre</label>
            <input 
            type="text"
            name = "favouriteGenre"
            value = {formData.favouriteGenre}
            onChange={handleInputChange}
            />
            <br />
             <label>Personality Type
            <select name="personalityType" value={formData.personalityType} onChange={handleInputChange}>
                    <option value="ISTJ">ISTJ</option>
                    <option value="ISFJ">ISFJ</option>
                    <option value="INTJ">INTJ</option>
                    <option value="INFJ">INFJ</option>
                    <option value="ISTP">ISTP</option>
                    <option value="ISFP">ISFP</option>
                    <option value="INTP">INTP</option>
                    <option value="INFP">INFP</option>
                    <option value="ESTP">ESTP</option>
                    <option value="ESFP">ESFP</option>
                    <option value="ENTP">ENTP</option>
                    <option value="ENFP">ENFP</option>
                    <option value="ESTJ">ESTJ</option>
                    <option value="ESFJ">ESFJ</option>
                    <option value="ENTJ">ENTJ</option>
                    <option value="ENFJ">ENFJ</option>

            </select>
            </label>
            <br />
            <button type="submit">Submit</button>

        </form>
        </>
    )
}
export default Form;
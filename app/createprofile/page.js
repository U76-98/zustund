"use client";

import { useRouter } from "next/navigation";
import {useState} from "react";
import profileStore from "../profileStore/page";
export default function CreateProfilePage()
{
    const router = useRouter()
    const {addProfile} = profileStore();
    const [email,setEmail]=useState("");
    const [name,setName]=useState("");
    const [phone,setPhone]=useState("");
    const [place,setPlace]=useState("");
    return(
        <div>
            create profile
       
        <div className="flex flex-col">
            <input placeholder="email" onChange={(event)=>{
            setEmail(event.target.value);
            }}/>
            <input placeholder="name" onChange={(event)=>{
            setName(event.target.value);
            }}/>
            <input placeholder="phone" onChange={(event)=>{
            setPhone(event.target.value);
            }}/>
            <input placeholder="place" onChange={(event)=>{
            setPlace(event.target.value);
            }}/>
            <button onClick={(event)=>{
            console.log(email);
             console.log(name);
              console.log(phone);
               console.log(place);
               addProfile({
                name: name,
                email: email,
                phone: phone,
                place: place,
               });
               router.push("/viewprofile    ");
            }}> createProfile</button>
        </div>
         </div>
    )
  
}
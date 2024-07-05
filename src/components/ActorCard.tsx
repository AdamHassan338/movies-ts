import { get } from "http";
import React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

interface ActorCardProps{
    id: number;
    firstName : string;
    lastName : string;
}

function ActorCard({ id, firstName, lastName }: ActorCardProps) {
    const navigate = useNavigate();
    console.log(id);
    return (
        <div className="card">
            <img className="avatar" src={"/unknown.jpg"} alt="Logo" />
            <h3 className="name">{firstName} {lastName}</h3>
            <button onClick={ () => (navigate(`/actor/${id}`))}>See films </button>
        </div>
    )
} 
export default ActorCard;
"use client";
import React from "react";
import profileStore from "../profileStore/page";

export default function Profiles() {
    const { profiles } = profileStore();
    
    return (
        <div>
            {/* 1. Added 'index' to the arguments */}
            {profiles.map((profile, index) => {
                return (
                    // 2. Added key={index} to the parent div
                    <div key={index} className="flex flex-col border-2 bg-blue-300 border-amber-800 m-4 p-2">
                        <div>{profile.name}</div>
                        <div>{profile.phone}</div>
                        <div>{profile.place}</div>
                    </div>
                );
            })}
        </div>
    )
}
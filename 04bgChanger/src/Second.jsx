import { useState } from "react";

import React from 'react'

function Second(){
    const [color , setColor] = useState("green");

    const colors = [
    { name: "Red", hex: "#EF4444" },
    { name: "Green", hex: "#22C55E" },
    { name: "Blue", hex: "#3B82F6" },
    { name: "Olive", hex: "#848B63" },
    { name: "Gray", hex: "#6B7280" },
    { name: "Yellow", hex: "#FACC15" },
    { name: "Purple", hex: "#A855F7" },
    { name: "Pink", hex: "#EC4899" },
    { name: "Lavender", hex: "#A78BFA" },
    { name: "White", hex: "#FFFFFF" },
    { name: "Black", hex: "#000000" },
    ]

    return (
        <div className="w-full h-screen duration-200 flex flex-col items-center" style={{backgroundColor : color}}>
             {/* text to indicate current background color */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-white shadow-lg p-4 rounded-lg bg-black bg-opacity-30">
            Background : {color}
            </div>
            <div className="fixed bottom-10 inset-x-0">
                <div className="flex flex-wrap justify-center gap-3 shadow-lg px-4 py-2 rounded-3xl">
                    {
                        colors.map((c) => (
                            <button 
                            key = {c.name}
                            onClick={() => setColor(c.hex)}
                            className="outline-none px-3 py-2 rounded-full text-white shadow-lg duration-200"
                            style={{backgroundColor : c.name}}
                            >{c.name}
                            </button>
                        ))}
                </div>
            </div>
        </div>
    )
}

export default Second
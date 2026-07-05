import React from 'react'
import { FaDownload } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import { FaRegFileImage } from "react-icons/fa6";
import { motion } from "framer-motion";

function Card({ data , reference}) {
    return (
        <motion.div drag
    dragConstraints={reference} className="shrink-0 w-60 h-72 bg-zinc-500 rounded-[30px] flex flex-col justify-between overflow-hidden">

            <div>
                <FaRegFileImage className="text-5xl p-2 flex justify-between" />
            </div>
            <div>
                <p className="text-sm text-gray-800 font-semibold">
                    {data.desc}
                </p>
            </div>

            <div className={`footer  left-0 bottom-0 w-full h-20 ${data.tag.tagcol == "green" ? "bg-green-600" : "bg-blue-600"} flex justify-between items-center`}>
                <h1 claassName="text-white font-bold m-10 p-1">{data.size}</h1>
                <span>
                    {data.close ? <ImCross className="cursor-pointer p-1 text-3xl" /> : <FaDownload className="cursor-pointer p-1 text-3xl" />}
                </span>


            </div>

        </motion.div>
    )
}

export default Card
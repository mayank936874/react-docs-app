import React from 'react'

function Background() {
    return (
        <div className="fixed z-10 w-full h-screen bg-zinc-800">
            <div className="w-full flex justify-center py-6">
                <h2 className="text-gray-500 text-xl font-semibold tracking-wide">
                    DOCUMENTS
                </h2>
            </div>

            <h1 className=" text-gray-500 font-semibold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[13vw] leading-none tracking-tighter ">
                DOCS.
            </h1>

        </div>
    )
}

export default Background
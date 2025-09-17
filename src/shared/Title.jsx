import React from 'react'

const Title = ({ titleName, customStyle, devider }) => {
    return (
        <>
            <h1 className={`${customStyle} flex-wrap flex items-center gap-2 self-center text-shadow-2xs text-2xl font-semibold uppercase text-ternery pt-3`}>
                {titleName}
                {
                    devider ? <div className="border-b w-full me-10  border-pink-900"></div> : null
                }
            </h1>
        </>
    )
}

export default Title

import React from 'react'

const Card = ({ cardData, handleOpenCardDetails }) => {

    return (
        <>
            <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-48 max-w-md mx-auto mt-10 min-w-full lg:min-w-sm w-full cursor-pointer h-full"
                onClick={handleOpenCardDetails}
            >
                <img src={cardData.cardImg} alt={cardData.title} className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                <h3 className="z-10 mt-3 text-3xl font-bold text-white">{cardData.title}</h3>
                <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300 line-clamp-1">{cardData.subTitle}</div>
            </article>
        </>
    )
}

export default Card
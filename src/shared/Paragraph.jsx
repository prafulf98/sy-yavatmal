import React from 'react'

const Paragraph = ({ paragraphItem, customStyle, paragraphHead, headStyle }) => {
  return (
    <>
      <div className="flex items-center justify-start">
        {
          paragraphHead ?
            <h4 className={`${headStyle} text-base font-semibold text-gray-900 pt-3`}>{paragraphHead}</h4>
            :
            null
        }
        <p className={`${customStyle} text-sm font-normal text-gray-500 w-fit pt-3`}>
          {paragraphItem}
        </p>
      </div>
    </>
  )
}

export default Paragraph

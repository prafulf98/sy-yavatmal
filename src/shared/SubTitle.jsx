import React from 'react'

const SubTitle = ({ subTitleName, customStyle }) => {
  return (
    <>
      <h5 className={`${customStyle} self-center text-shadow-2xs text-lg pt-3 text-wrap`}>
        {subTitleName}
      </h5>
    </>
  )
}

export default SubTitle

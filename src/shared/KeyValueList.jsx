import React from 'react'

const KeyValueList = ({ listValue, listKey, keyItem }) => {
    return (
        <>
            <div className="text-md" key={keyItem}>
                <span className="font-bold">{listKey} :</span>
                <span className="ml-1">{listValue}</span>
            </div>
        </>
    )
}
 
export default KeyValueList

import React from 'react';
import { IoCall, MdOutlineEmail } from '../shared/icons'

const contactItem = [
    {
        icon: <IoCall size={25} />,
        head: "Contact No. :",
        info: "9404699286"
    },
    {
        icon: <MdOutlineEmail size={25} />,
        head: "Email Id :",
        info: "sahajayogayavatmal97@gmail.com"
    }
];

const ContactContainer = ({ mainContainerStyle, customStyle }) => {
    return (
        <>
            {/* <section id='email/phoneSection'> */}
                {
                    contactItem.map((item, i) =>
                        <div className={`flex items-center justify-between w-fit gap-4 ${mainContainerStyle}`} key={i}>
                            <div className='text-secondary'>{item.icon}</div>
                            <div className={customStyle}>
                                <h6 className="text-sm">{item.head}</h6>
                                <a target='_blank' href={item.info} className="text-sm font-semibold">{item.info}</a>
                            </div>
                        </div>
                    )
                }
            {/* </section> */}
        </>
    )
}

export default ContactContainer

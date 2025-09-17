import { FaYoutube, FaFacebook, FaInstagram } from "../shared/icons"

const socialMediaItems = [
    {
        name: 'Youtube',
        icon: <FaYoutube size={28} />,
        link: 'https://www.youtube.com/@sahajayogayavatmal9958'
    },
    {
        name: 'Facebook',
        icon: <FaFacebook size={28} />,
        link: ''
    },
    {
        name: 'Instagram',
        icon: <FaInstagram size={28} />,
        link: ''
    },
]
const SocialMediaContainer = ({ customStyle }) => {
    return (
        <>
            <div className={`${customStyle} flex items-center gap-6`}>
                {
                    socialMediaItems.map((smItem, i) =>
                        <div key={i}>
                            <a target="_blank" className="text-secondary" href={smItem.link}>{smItem.icon}</a>
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default SocialMediaContainer


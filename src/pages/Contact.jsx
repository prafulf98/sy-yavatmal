import { useEffect } from "react";
import { Paragraph, Table, Title } from "../shared";
import contactItem from '../json/contactItem';
import { ContactContainer, SocialMediaContainer } from '../components';

const distComitee = [
  {
    name: 'Sau. Yamini Wandile',
    designation: 'District Co-ordinator',
    contactNo: <a target="_blank" href="9404699286">9404699286</a>
  },
  {
    name: 'Rushikesh Koychade',
    designation: 'District YuvaShakti Co-ordinator',
    contactNo: <a target="_blank" href="7057856640">7057856640</a>
  },
  {
    name: 'Ku. Vaishnavi Kapile',
    designation: 'District YuvaShakti co-ordinator (Girls)',
    contactNo: <a target="_blank" href="9970646041">9970646041</a>
  },
  {
    name: 'Shri. Gulab Rathod',
    designation: 'District Treasurer & Accountant',
    contactNo: <a target="_blank" href="9850315938">9850315938</a>
  },
  {
    name: 'Shri. Ganesh Zade',
    designation: 'Head of NSPT ',
    contactNo: <a target="_blank" href="9763681091">9763681091</a>
  },
  {
    name: 'Shri. Rahul Kukade',
    designation: 'District Agriculture Co-ordinator',
    contactNo: <a target="_blank" href="9637201508">9637201508</a>
  },
  {
    name: 'Sau. VandanaTai Gedam',
    designation: 'District BalShakti Co-ordinator',
    contactNo: <a target="_blank" href="7798160135">7798160135</a>
  },
  {
    name: 'Sau. RajaniTai Kale',
    designation: 'District Puja Co-ordinator',
    contactNo: <a target="_blank" href="7057058800">7057058800</a>
  },
  {
    name: 'Smt. VaishaliTai Pisalkar',
    designation: 'District Prachar-Prasar Co-ordinator',
    contactNo: <a target="_blank" href="7588779010">7588779010</a>
  },
  {
    name: 'Sau. VandanaTai Jaiswal',
    designation: 'District Sahaj-Merriage Co-ordinator',
    contactNo: <a target="_blank" href="9922479907">9922479907</a>
  },
]

const comiteeTableHeade = ["Name", "Designation", "Contact No."]

const Contact = () => {
  useEffect(() => {
    document.title = "Contact Us - Sahajyoga Yavatmal";
  }, [])

  return (
    <>
      <div id={document.title} className='p-4'>
        <Title customStyle={''} titleName={'Note'} devider={true} />

        {/* note sectin  */}
        {contactItem.noteItem.map((items, i) =>
          <div key={i} className="gap-4 text-secondary grid grid-cols-1 lg:grid-cols-3 mt-6">
            <div className="w-full bg-pink-100 p-4 md:p-6 border rounded-xl">{items.mar}</div>
            <div className="w-full bg-pink-100 p-4 md:p-6 border rounded-xl">{items.hin}</div>
            <div className="w-full bg-pink-100 p-4 md:p-6 border rounded-xl">{items.eng}</div>
          </div>
        )}

        {/* contact section  */}
        <div className="grid grid-cols-1 md:grid-cols-2 mt-8 gap-4 md:gap-8">
          <div id="contact-add-section">
            <Title customStyle={'md:mt-4'} titleName={'Address'} devider={true} />
            <Paragraph customStyle={'px-2'} paragraphItem={contactItem.Address.Address} paragraphHead={'Center Address:'}></Paragraph>
            <Paragraph customStyle={'px-2'} paragraphItem={contactItem.Address.AshramLocation} paragraphHead={'Ashram Address:'}></Paragraph>
          </div>
          <div id="contact-no-email">
            <Title customStyle={'md:mt-4'} titleName={'Contact'} devider={true} />
            <ContactContainer customStyle={'flex items-center gap-2'} mainContainerStyle={'my-2'} />
            <SocialMediaContainer customStyle={'mt-4'} />
          </div>
        </div>

        {/* dist comitee section  */}
        <Title customStyle={'mt-4 md:mt-8 w-full'} titleName={'District comitee'} devider={true} />
        <Table tHead={comiteeTableHeade} tBody={distComitee} customStyle={'mt-8'} />

        {/* google map  */}
        <Title customStyle={'mt-8 w-full'} titleName={'Yavatmal Sahajyoga Ashram Location'} devider={true} />
        <div className="w-full h-[400px] mt-12 max-w-[95%]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3741.3692981280997!2d78.07198407421876!3d20.32635701153459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd3e77b8e45a26d%3A0x1ead0040f428c4f8!2zTmlybWFsIERoYW0gQXNocmFtLCAoQXJqdW5hKSBZYXZhdG1hbC4g4KSo4KS_4KSw4KWN4KSu4KSyIOCkp-CkvuCkriDgpIbgpLbgpY3gpLDgpK4sICjgpIXgpLDgpY3gpJzgpYHgpKjgpL4pIOCkr-CkteCkpOCkruCkvuCksy4!5e0!3m2!1sen!2sin!4v1753007523640!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
    </>
  )
}

export default Contact

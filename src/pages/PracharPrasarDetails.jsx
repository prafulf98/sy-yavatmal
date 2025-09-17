import { useNavigate, useParams } from 'react-router-dom';
import { Title, SubTitle, Paragraph } from '../shared';
import { IoMdArrowRoundBack } from '../shared/icons';
import pracharPrasarData from '../json/pracharPrasar';

const PracharPrasarDetails = () => {
  const { id } = useParams();
  const prachar = pracharPrasarData.find(e => e.id === parseInt(id));
  const contactNumber = <a target="_blank" href={prachar.contactNumber}>{prachar.contactNumber}</a>
  const navigate = useNavigate();
  if (!prachar) {
    return <div className="text-center py-8 text-red-600">Prachar Prasar prachar not found.</div>;
  }

  return (
    <>
      <IoMdArrowRoundBack size={24} className='text-secondary cursor-pointer' onClick={() => navigate('/prachar-prasar')} />
      <div className="px-4 pb-8 max-w-6xl mx-auto">
        <div className="mb-4 md:mb-12 bg-transparent">
          <div className="w-full">
            <Title customStyle={'mt-8 w-full'} titleName={prachar.place} devider={true} />
            <SubTitle subTitleName={prachar.info} customStyle={'!text-start text-secondary mb-2'} />
            <Paragraph customStyle={'!pt-0 px-2'} paragraphItem={prachar.nearByCenter}></Paragraph>
            <Paragraph customStyle={'!pt-0 px-2'} paragraphItem={prachar.contactName}></Paragraph>
            <Paragraph customStyle={'!pt-0 px-2'} paragraphItem={contactNumber}></Paragraph>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
            {prachar.images.map((imgSrc, i) => (
              <img
                key={i}
                src={imgSrc}
                alt={`prachar ${prachar.id} Image ${i + 1}`}
                className="w-full h-48 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105 bg-gray-200"
              />
            ))}
          </div>
        </div>
      </div>
    </>

  );
};

export default PracharPrasarDetails;

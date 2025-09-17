import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import eventData from '../json/Event';
import { Title, SubTitle } from '../shared';
import { IoMdArrowRoundBack } from '../shared/icons';

const EventDetails = () => {
  const { id } = useParams();
  const event = eventData.find(e => e.id === parseInt(id));
  const navigate = useNavigate();
  if (!event) {
    return <div className="text-center py-8 text-red-600">Event not found.</div>;
  }

  return (
    <>
      <IoMdArrowRoundBack size={24} className='text-secondary cursor-pointer' onClick={() => navigate('/events')} />
      <div className="px-4 pb-8 max-w-6xl mx-auto">
        <div className="mb-4 md:mb-12 bg-transparent">
          <div className="w-full">
            <Title customStyle={'mt-8 w-full'} titleName={event.title} devider={true} />
            <SubTitle subTitleName={event.subTitle} customStyle={'!text-start text-secondary mb-6'} />
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            {event.images.map((imgSrc, i) => (
              <img
                key={i}
                src={imgSrc}
                alt={`Event ${event.id} Image ${i + 1}`}
                className="w-full h-48 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105 bg-gray-200"
              />
            ))}
          </div>

          {/* YouTube Video */}
          <div className="aspect-video mb-4">
            <iframe
              className="w-full h-full rounded-lg"
              src={event.youtubeLink}
              title={event.title}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </>

  );
};

export default EventDetails;

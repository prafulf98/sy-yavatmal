import React, { useEffect } from 'react';
import eventData from '../json/Event';
import { Card, Title } from '../shared';
import { useNavigate } from 'react-router-dom';

const Events = () => {
  useEffect(() => {
    document.title = 'Events - Sahajyoga Yavatmal';
  }, []);

  const navigate = useNavigate();

  return (
    <>
      <Title customStyle={'mt-8 w-full'} titleName={'Events List'} devider={true} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6" id={document.title}>
        {
          eventData.map((item, i) =>
            <section key={i}>
              <Card
                cardData={item}
                handleOpenCardDetails={() => navigate(`/events/${item.id}`)}
              />
            </section>
          )
        }
      </div>

    </>

  );
};

export default Events;

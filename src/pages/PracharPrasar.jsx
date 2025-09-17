import React, { useEffect } from 'react';
import pracharPrasarData from '../json/pracharPrasar';
import { Card, Title } from '../shared';
import { useNavigate } from 'react-router-dom';

const PracharPrasar = () => {
  useEffect(() => {
    document.title = 'Prachar Prasar - Sahajyoga Yavatmal';
  }, []);

  const navigate = useNavigate();

  return (
    <>
      <Title customStyle={'mt-8 w-full'} titleName={'Prachar Prasar List'} devider={true} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6" id={document.title}>
        {
          pracharPrasarData.map((item, i) =>
            <section key={i}>
              <Card
                cardData={item}
                handleOpenCardDetails={() => navigate(`/prachar-prasar/${item.id}`)}
              />
            </section>
          )
        }
      </div>
    </>

  );
};

export default PracharPrasar;

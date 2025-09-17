import shreeMatajiInfo from '../json/shreeMatajiInformation';
import { useLanguage } from '../context/languageContext';
import { InfoImage, Paragraph, Title } from '../shared'
import { useEffect } from 'react';

const AboutShreeMataji = () => {
  const { language } = useLanguage();
  const info = language === 'mar' ? shreeMatajiInfo.shreeMatajiInfoMar : shreeMatajiInfo.shreeMatajiInfoEng;

  useEffect(() => {
    window.document.title = 'Shree Mataji - Yavatmal Sahajyoga'
  }, [])

  return (
    <>
      <div id={document.title} className='p-4'>
        {info.map((item, i) => (
          <div
            key={i}
            className={`flex items-center justify-between mb-10 mobile-flex ${i % 2 !== 0 ? 'flex-row-reverse' : null}`}
          >
            <div className="w-full lg:w-1/2">
              {item.heading.length >= 1 && (<Title customStyle={''} titleName={item.heading} devider={true} />)}
              {item.info.length >= 1 && (<Paragraph paragraphItem={item.info} customStyle={'px-2'} />)}
            </div>

            <div className="w-full lg:w-1/2 h-full">
              {item.img.length >= 1 && (
                <InfoImage imgSrc={item.img} />
              )}
            </div>
          </div>
        ))}

      </div>
    </>
  );
};

export default AboutShreeMataji;

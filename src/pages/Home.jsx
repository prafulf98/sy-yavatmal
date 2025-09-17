import { Paragraph, SubTitle, Title, InfoImage, Button } from '../shared';
import { useLanguage } from '../context/languageContext'
import syYtlInfo from '../json/syYavatmalInformation'

const Home = () => {

  const { language } = useLanguage();
  const info = language === 'mar' ? syYtlInfo.syYtlInfoMar : syYtlInfo.syYtlInfoEng;

  return (
    <section id='sec-1' className="w-full fle">
      <img
        src="https://meditationvancouver.wordpress.com/wp-content/uploads/2015/04/banner9.jpg?w=1024&h=303"
        alt="display-img"
        className="w-full"
      />

      <section className='mt-4 md:mt-8'
        id={document.title}>
        {info.map((item, i) => (
          <div
            key={i}
          >
            {item.heading.length >= 1 && (<Title customStyle={''} titleName={'Sahajyoga Yavatmal'} devider={true} />)}
            <div className={`flex items-center justify-between mb-10 mobile-flex ${i % 2 !== 0 ? 'flex-row-reverse' : null}`}>
              <div className="w-full lg:w-1/2">
                {item.info.length >= 1 && (<Paragraph paragraphItem={item.info} customStyle={' line-clamp-5'} />)}
                <Button btnName={'Know more'} customStyle={'mt-3 sm:mt-6'} route={'/about-yavatmal-sahajyoga'} />
              </div>
              <div className="w-full lg:w-1/2 h-full">
                {item.img.length >= 1 && (
                  <InfoImage imgSrc={item.img} />
                )}
              </div>
            </div>
          </div>
        ))}
      </section>

      <section id='self-realisation px-2 md:px-6'>
        <Title customStyle={'mb-4 sm:mb-6'} titleName={'Get self realisation'} devider={true} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
          <div className="w-full h-[400px] p-6">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/fwKd9hUtc4w?si=FAYdSilV-yMtwBg0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </div>
          <div className="flex items-start flex-col">
            <SubTitle subTitleName={'Experience Sahaja Yoga Meditation'} customStyle={'text-secondary !self-start'} />
            <Paragraph customStyle={'text-gray-900'} paragraphItem={'The time has come for all of you to get your self-realisation, by which your attention becomes enlightened, your health gets completely all right, your mental processes are sensible, but above all you stand in your present.'} />
            <Paragraph paragraphItem={'- H.H. Shri Mataji Nirmala Devi, 29.09.1994, Los Angeles, USA- H.H. Shri Mataji Nirmala Devi, 29.09.1994, Los Angeles, USA'} />
            <Button btnName={'Know more'} customStyle={'mt-4'} route={'/about-shree-mataji'}/>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Home;

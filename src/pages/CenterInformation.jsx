import { useLocation } from 'react-router-dom';
import centerList from '../json/centerList';

const CenterInformation = () => {
  const { pathname } = useLocation();
  const currentTaluka = pathname.toLowerCase().split('/').at(-1);

  const filteredCenters = centerList.flatMap(center =>
    center.information.filter(info =>
      info.centerTaluka?.toLowerCase() === currentTaluka
    )
  );

  const infoFields = (info) => [
    { label: 'Center Name', value: info.centerName },
    { label: 'Center City/Village', value: info.centerCityVillage },
    { label: 'Center Day', value: info.centerDay },
    { label: 'Center Time', value: info.centerTime },
    { label: 'Center Co-ordinator', value: info.centerCoOrdinator },
    { label: 'Contact No.', value: <a href={`tel:${info.centerCoMobileNo}`}>{info.centerCoMobileNo}</a> },
    { label: 'Center Address', value: `${info.centerAddress}, ${info.centerTaluka}, ${info.centerDist}` },
    { label: 'Center Location', value: <a href={info.centerLocation} target="_blank" rel="noopener noreferrer" className='text-blue-600 break-words'>{info.centerLocation}</a> },
  ];

  return (
    <div className="my-8">
      {filteredCenters.map((info, i) => (
        <details key={i} className="group mb-4 border border-gray-300 rounded-md p-3 bg-white">
          <summary className="flex cursor-pointer items-center justify-between text-lg font-medium">
            {info.centerName || 'Center Information'}
            <span className="transition group-open:rotate-180">
              <svg fill="none" height="24" width="24" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </span>
          </summary>

          <div className="group-open:animate-fadeIn mt-3 space-y-2 text-neutral-700">
            {infoFields(info).map(({ label, value }, idx) => (
              <div key={idx} className="text-md">
                <span className="font-bold">{label}:</span>
                <span className="ml-1">{value}</span>
              </div>
            ))}
          </div>
        </details>
      ))}
    </div>
  );
};

export default CenterInformation;
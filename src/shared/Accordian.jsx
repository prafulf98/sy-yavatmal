import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Accordian = ({ accItem }) => {

  const location = useLocation();
  const pathName = location.pathname.toLowerCase();
  const currentTaluka = pathName.split('/').reverse().at(0)

  useEffect(() => {
  }, [currentTaluka])


  return (
    <details className="group mb-4 border border-gray-300 rounded-md p-3">
      <summary className="flex cursor-pointer list-none items-center justify-between font-medium text-lg">
        {accItem.taluka || 'Center Information'}
        <span className="transition group-open:rotate-180">
          <svg
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            width="24"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </span>
      </summary>
      {
        accItem.information.map((info, i) =>
          <div className="group-open:animate-fadeIn mt-3 text-neutral-700 space-y-2" key={i}>
            <div className="text-md">
              <span className="font-bold">Center Name :</span>
              <span className="ml-1">{info.centerName}</span>
            </div>
            <div className="text-md">
              <span className="font-bold">Center City/Village :</span>
              <span className="ml-1">{info.centerCityVillage}</span>
            </div>
            <div className="text-md">
              <span className="font-bold">Center Day :</span>
              <span className="ml-1">{info.centerDay}</span>
            </div>
            <div className="text-md">
              <span className="font-bold">Center Time :</span>
              <span className="ml-1">{info.centerTime}</span>
            </div>
            <div className="text-md">
              <span className="font-bold">Center Co-oridnator :</span>
              <span className="ml-1">{info.centerCoOrdinator}</span>
            </div>
            <div className="text-md">
              <span className="font-bold">Contact No. :</span>
              <a href={info.centerCoMobileNo} className="ml-1">{info.centerCoMobileNo}</a>
            </div>
            <div className="text-md">
              <span className="font-bold">Center Address :</span>
              <span className="ml-1">{info.centerAddress}, {info.centerTaluka}, {info.centerDist}.</span>
            </div>
            <div className="text-md">
              <span className="font-bold">Center Location :</span>
              <a href={info.centerLocation} target="_blank" className="ml-1">{info.centerLocation}</a>
            </div>
          </div>
        )
      }

    </details>
  )
}

export default Accordian


const InfoImage = ({ imgSrc }) => {
  return (
    <>
      <div className="w-full h-full flex items-center justify-center rounded-lg max-h-fit">
        <img src={imgSrc} alt="info" className="max-h-full w-auto object-contain rounded-lg" />
      </div>
    </>
  )
}

export default InfoImage
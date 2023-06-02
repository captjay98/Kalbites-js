const InfoBar = ({ description }) => {
  return (
    <div className="px-5 py-5 m-auto h-28 flex justify-center bg-yellow-500 text-myBlue rounded-3xl w-11/12 ">
      <p className="text-myBlue text-lg m-auto">{description}</p>
    </div>
  );
};

export default InfoBar;

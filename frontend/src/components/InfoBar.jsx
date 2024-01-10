const InfoBar = ({ description }) => {
  return (
    <div className="flex justify-center py-3 px-5 m-auto w-11/12 h-28 bg-yellow-500 rounded-3xl text-myBlue">
      <p className="m-auto text-lg text-myBlue">{description}</p>
    </div>
  );
};

export default InfoBar;

const Paper = ({ background, name }) => {
  return (
    <>
      <img className="object-cover h-full w-full blur-sm" src={background} alt={name} />
    </>
  );
};

export default Paper;

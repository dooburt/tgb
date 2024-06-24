const Pill = ({ label }) => {
  return (
    <>
      <div className="rounded-lg border-2 border-white text-center text-white px-2 py-1 inline-block">
        <span className="font-body">{label}</span>
      </div>
    </>
  );
};

export default Pill;

import bg from "../../assets/steve_boss.png";

const PictureSliceBoss = (props) => {
  return (
    <section className="flex min-h-[400px] h-[400px] max-h-[400px] md:h-[800px] md:max-h-[800px] lg:h-[1000px] lg:max-h-[1000px] overflow-hidden relative">
      <img
        src={bg}
        className="absolute min-w-full transform -translate-y-1/4"
        alt=""
      />
    </section>
  );
};

export default PictureSliceBoss;

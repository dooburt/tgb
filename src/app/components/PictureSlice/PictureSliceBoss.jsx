import bg from "../../../../public/steve_boss.png";

const PictureSliceBoss = (props) => {
  return (
    <section className="flex min-h-[400px] h-[400px] max-h-[400px] md:h-[800px] md:max-h-[800px] lg:h-[1300px] lg:max-h-[1300px] overflow-hidden relative">
      <img src={bg.src} className="absolute object-cover min-w-full h-full" alt="" />
    </section>
  );
};

export default PictureSliceBoss;

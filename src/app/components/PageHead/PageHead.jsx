"use client";

const PageHead = ({ title, subtitle, image, height = 300, gradientFromClass = "from-black" }) => {
  let imgHeight = height + 20;
  return (
    <>
      <div className="bg-gradient-to-b from-black to-transparent h-[150px] md:h-[120px] w-full absolute z-10"></div>
      <section className={`md:h-256 flex w-full overflow-hidden lg:max-h-screen relative h-[${height}px]`}>
        <div className={`bg-gradient-to-t to-transparent h-[40px] md:h-[80px] w-full absolute bottom-0 z-10 ${gradientFromClass}`}></div>
        <img src={image.src} className={`min-w-full object-cover blur-sm min-h-[${imgHeight}px]`} alt="" />
        <div className="absolute bottom-6 m-8 mx-auto w-full">
          <h1 className="font-header text-3xl text-center font-medium text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] md:text-5xl xl:text-6xl">
            {title}
          </h1>
          <span className="font-body mb-4 block text-center text-lg leading-tight text-white drop-shadow md:text-3xl">{subtitle}</span>
        </div>
      </section>
    </>
  );
};

export default PageHead;

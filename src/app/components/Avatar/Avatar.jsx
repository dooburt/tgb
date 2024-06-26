"use client";

const Avatar = ({ img, width = 50, height = 50 }) => {
  return (
    <>
      <div className={`rounded-full overflow-hidden w-[${width}px] h-[${height}px]`}>
        <img src={img} width={width} height={height} alt="" />
      </div>
    </>
  );
};

export default Avatar;

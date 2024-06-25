const Video = ({ src }) => {
  return (
    <>
      <video autoPlay loop muted className="absolute z-10 w-auto min-w-full min-h-full max-w-none">
        <source src={src} type="video/mp4" />
      </video>
    </>
  );
};

export default Video;

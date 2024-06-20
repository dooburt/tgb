import { useState } from "react";
import img1 from "../../assets/images/2023-06-20_18.33.11.png";
import img2 from "../../assets/images/2023-06-20_18.32.16.png";
import img3 from "../../assets/images/2023-06-20_18.33.00.png";
import img4 from "../../assets/images/2023-06-20_18.35.43.png";
import img5 from "../../assets/images/2023-06-20_18.36.24.png";
import img6 from "../../assets/images/2023-06-20_18.37.09.png";
import img7 from "../../assets/images/2023-06-20_18.37.18.png";
import img8 from "../../assets/images/2023-06-20_18.51.17.png";
import img9 from "../../assets/images/2023-06-20_18.54.42.png";
import img10 from "../../assets/images/2023-06-20_18.57.43.png";
import Scrim from "../Scrim/Scrim";

const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [exiting, setExiting] = useState(false);

  const images = [
    { id: 1, path: "../../assets/images/2023-06-20_18.33.11.png", inject: img1, alt: "" },
    { id: 2, path: "../../assets/images/2023-06-20_18.32.16.png", inject: img2, alt: "" },
    { id: 3, path: "../../assets/images/2023-06-20_18.33.00.png", inject: img3, alt: "" },
    { id: 4, path: "../../assets/images/2023-06-20_18.35.43.png", inject: img4, alt: "" },
    { id: 5, path: "../../assets/images/2023-06-20_18.36.24.png", inject: img5, alt: "" },
    { id: 6, path: "../../assets/images/2023-06-20_18.37.09.png", inject: img6, alt: "" },
    { id: 7, path: "../../assets/images/2023-06-20_18.37.18.png", inject: img7, alt: "" },
    { id: 8, path: "../../assets/images/2023-06-20_18.51.17.png", inject: img8, alt: "" },
    { id: 9, path: "../../assets/images/2023-06-20_18.54.42.png", inject: img9, alt: "" },
    { id: 10, path: "../../assets/images/2023-06-20_18.57.43.png", inject: img10, alt: "" },
  ];

  // const handleKeyPress = (e) => {
  //   if ((open && e.key === "Escape") || e.code === "Escape") {
  //     setOpen(false);
  //   }
  //   e.preventDefault();
  //   e.stopPropagation();
  //   return false;
  // };

  // useEffect(() => {
  //   window.addEventListener("keydown", handleKeyPress);

  //   return () => {
  //     window.removeEventListener("keydown", handleKeyPress);
  //   };
  // });

  const handleClick = (id) => {
    setSelectedImage(id || null);
    setOpen(!open);
  };

  const handleExit = () => {
    setExiting(true);
    setTimeout(() => {
      setSelectedImage(null);
      setOpen(false);
      setExiting(false);
    }, 190);
  };

  const Renderer = () => {
    if (!selectedImage) return null;
    const img = images[selectedImage - 1];
    const imgCss = `rounded-lg hover:cursor-pointer border-8 border-white w-full h-full`;
    return (
      <div
        className="fixed w-[90%] max-h-screen top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center"
        style={{ zIndex: 305 }}
      >
        <img
          src={img.inject}
          alt={img.alt}
          onClick={handleExit}
          className={exiting ? `${imgCss} exit` : `${imgCss} enter`}
          style={{ maxWidth: "90vw", maxHeight: "90vh" }}
        />
        <div className="text-center mt-4">
          <span aria-label="click to close" className="text-slate-800 bg-slate-600 p-1 px-2 text-sm border-slate-700 border rounded-lg pb-1.25">
            click/tap to close
          </span>
        </div>
      </div>
    );
  };

  return (
    <section className=" body-font  bg-[#170b23] relative">
      <Scrim active={open} handleClick={handleClick} styles={{ zIndex: 304 }} />
      <Renderer />
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 px-8 py-8">
          {images.map((image) => {
            return (
              <div>
                <img
                  className="h-auto max-w-full rounded-lg transition-opacity hover:cursor-pointer hover:opacity-80"
                  src={image.inject}
                  alt={image.alt}
                  onClick={() => handleClick(image.id)}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

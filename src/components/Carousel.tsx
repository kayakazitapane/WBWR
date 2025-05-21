import Slider from "react-slick";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <Slider {...settings}>
        <div className="p-6 bg-secondary text-white rounded-lg shadow-lg">
          <h2 className="text-xl font-bold">Slide 1</h2>
          <p>Some description about this slide.</p>
        </div>
        <div className="p-6 bg-primary text-white rounded-lg shadow-lg">
          <h2 className="text-xl font-bold">Slide 2</h2>
          <p>Another description for this slide.</p>
        </div>
        <div className="p-6 bg-gray-800 text-white rounded-lg shadow-lg">
          <h2 className="text-xl font-bold">Slide 3</h2>
          <p>Yet another slide with content.</p>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
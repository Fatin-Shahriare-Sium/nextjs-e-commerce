import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
const Carosulex = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel
      arrows={false}
      showDots={true}
      dotListClass="custom-dot-list-style"
      responsive={responsive}
    >
      <div>
        <img
          className="carousel-img"
          style={{ objectFit: "cover" }}
          src="https://www.sony-asia.com/image/99dfce63ef9348016adff347452d380b?fmt=jpeg&wid=800&qlt=43"
          alt=""
        />
      </div>

      <div>
        <img
          className="carousel-img"
          src="https://res.cloudinary.com/sium/image/upload/vxbvfvpbvswzysdu9nct.jpg"
          alt=""
        />
      </div>

      <div>
        <img
          className="carousel-img"
          src="https://res.cloudinary.com/sium/image/upload/v1622140965/a5phr8sj7cceeset6lm7.png"
          alt=""
        />
      </div>
    </Carousel>
  );
};

export default Carosulex;

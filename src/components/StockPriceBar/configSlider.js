const slidestoscroll = 2

export const settings = {
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: slidestoscroll
};

export const responsiveSettings = [
  {
    breakpoint: 1890,
    settings: {
      slidesToShow: 5,
      slidesToScroll: slidestoscroll,
    },
  },
  {
    breakpoint: 1600,
    settings: {
      slidesToShow: 4,
      slidesToScroll: slidestoscroll,
    },
  },
  {
    breakpoint: 1500,
    settings: {
      slidesToShow: 3,
      slidesToScroll: slidestoscroll,
    },
  },
  {
    breakpoint: 1280,
    settings: {
      slidesToShow: 3,
      slidesToScroll: slidestoscroll,
    },
  },
];
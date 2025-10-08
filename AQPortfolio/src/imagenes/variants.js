export const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 2,
    };
  },
  center: {
    zIndex: 0,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 5,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

export const swipeConfidenceThreshold = 10000;
export const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

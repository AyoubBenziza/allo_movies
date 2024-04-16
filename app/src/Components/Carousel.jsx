import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import images from "../images";

export default function Carousel() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <footer>
      <h1>🎥Catalogue🎥</h1>
      <motion.div ref={carousel} className="carousel">
        <motion.div
          drag="x"
          dragConstraints={{ left: -width, right: 0 }}
          className="inner-carousel"
          whileTap={{ cursor: "grabbing" }}
        >
          {images.map((image) => {
            return (
              <motion.div key={image} className="item">
                <img src={image} alt="..." />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
      <h6>©Ayoub Benziza</h6>
    </footer>
  );
}

import { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Section1() {
  const [mousePosition, setMousePosition] = useState({});
  const imgRef = useRef();

  function getRelativeCoordinates(event, referenceElement) {
    const position = {
      x: event.pageX,
      y: event.pageY
    };

    const offset = {
      left: referenceElement.offsetLeft,
      top: referenceElement.offsetTop,
      width: referenceElement.clientWidth,
      height: referenceElement.clientHeight
    };

    let reference = referenceElement.offsetParent;

    while (reference) {
      offset.left += reference.offsetLeft;
      offset.top += reference.offsetTop;
      reference = reference.offsetParent;
    }

    return {
      x: position.x - offset.left - offset.width / 2,
      y: position.y - offset.top - offset.height / 2
    };
  }

  const handleMouseMove = e => {
    setMousePosition(getRelativeCoordinates(e, imgRef.current));
  }

  return (
    <div className="section-1">
      <div className='profile-pic-wrapper'>
        <div style={{
          borderRadius: '100%',
          boxShadow: '10px 10px 20px #232323, -10px -10px 20px #2f2f2f'
        }}>
          <motion.div
            className='profile-pic-border'
            ref={imgRef}
            onMouseMove={handleMouseMove}
          >
            <motion.div
              className='profile-glow'
              animate={{
                x: mousePosition.x,
                y: mousePosition.y
              }}></motion.div>
            <Image src={'/dp-min.png'} alt='Profile Picture of Soumendu Das.' width={200} height={200} className="profile-pic" />
          </motion.div>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div className="profile-intro">
          I am <span className='highlight-text'>SOUMENDU DAS.</span>
          &nbsp;Passionate and creative <span className='highlight-text'>full-stack software engineer</span> based in <span className='highlight-text'>India.</span>

          I consider myself a <span className='highlight-text'>curious</span> and <span className='highlight-text'>inquisitive</span> person, so in my spare time I like to work on side projects and try to constantly learn something new to <span className='highlight-text'>improve</span> my skillset.
        </div>
      </div>
    </div>
  )
}
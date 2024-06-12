import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useDrag } from 'react-use-gesture';

const ImageBox = ({ src }) => {
    const [style, api] = useSpring(() => ({ x: 0, y: 0 }));

    const bind = useDrag(({ offset: [x, y] }) => {
        api.start({ x, y });
    });

    return (
        <animated.div
            {...bind()}
            style={{
            x:style.x,
            y:style.y,
            touchAction: 'none',
                display: 'inline-block',
      }}
    >
    <img src={src} alt="uploaded" className="ImageBox" />
    </animated.div >
  );
};

export default ImageBox;

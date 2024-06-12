import React from 'react';
import { useDrag } from 'react-dnd';

const ImageBox = ({ src, index }) => {
    const [, drag] = useDrag(() => ({
        type: 'image',
        item: { src },
    }));

    return (
        <div ref={drag}>
            <img src={src} alt="uploaded" className="ImageBox" draggable="false" />
        </div>
    );
};

export default ImageBox;

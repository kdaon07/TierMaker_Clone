import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import { DiAptana } from "react-icons/di";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import ImageBox from './ImageBox';

const Box = ({ gr, bg, box, setBox, setSetting, index, moveItem, setIndex, Index }) => {
    const [, drop] = useDrop(() => ({
        accept: 'image',
        drop: (item) => {
            if (!box[index].images.includes(item.src)) {
                setBox(prevBox => {
                    const newBox = [...prevBox];
                    newBox.forEach((boxItem, boxIndex) => {
                        if (boxIndex !== index) {
                            boxItem.images = boxItem.images.filter(imgSrc => imgSrc !== item.src);
                        }
                    });
                    return newBox;
                });

                setBox(prevBox => {
                    const updatedBox = [...prevBox];
                    updatedBox[index].images = [...updatedBox[index].images, item.src];
                    return updatedBox;
                });
            }
        },
    }));

    const preventDefault = (e) => {
        e.preventDefault();
    };

    const imgRemove= (Index) => {
        setBox(prevBox => {
            const newBox = [...prevBox];
            newBox[index].images = newBox[index].images.filter((item, imgIndex) => imgIndex !== Index);
            return newBox;
        });
    };

    return (
        <tr ref={drop}>
            <td className="Box">
                <div>
                    <input
                        type="text"
                        value={gr}
                        className="Grade"
                        style={{ background: bg }}
                        onChange={(e) => {
                            const newBox = [...box];
                            newBox[index].gr = e.target.value;
                            setBox(newBox);
                        }}
                        onDragOver={preventDefault}
                        onDrop={preventDefault}
                    />
                </div>
                <span style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {
                        box[index].images.map((src, imgIndex) => (
                            <ImageBox key={imgIndex} src={src} onRemove={() => imgRemove(imgIndex)} />
                        ))
                    }
                </span>
                <div className="Setting">
                    <DiAptana className="IconHover" style={{ marginLeft: "10px" }} onClick={() => { setSetting(true); setIndex(index); console.log(); console.log(Index); }} />
                    <div>
                        <IoIosArrowUp className="IconHover" onClick={() => moveItem(index, -1)} />
                        <IoIosArrowDown className="IconHover" onClick={() => moveItem(index, 1)} />
                    </div>
                </div>
            </td>
        </tr>
    );
}

export default Box;

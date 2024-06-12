import React, { useState, useRef, useEffect } from "react";
import Box from "./Box";
import Setting from "./Setting";
import ImageBox from "./ImageBox";

export default function Page() {
    const [Index, setIndex] = useState(0);
    const [setting, setSetting] = useState(false);
    const [box, setBox] = useState([
        { gr: "S", bg: "#ff7f7f", images: [] },
        { gr: "A", bg: "#ffbf7f", images: [] },
        { gr: "B", bg: "#ffdf7f", images: [] },
        { gr: "C", bg: "#ffff7f", images: [] },
        { gr: "D", bg: "#bfff7f", images: [] },
    ]);

    const [imgBox, setImgBox] = useState([]);

    const moveItem = (Index1, set) => {
        const Index2 = Index1 + set;
        if (Index2 < 0 || Index2 >= box.length) return;

        const newBox = [...box];
        const temp = newBox[Index1];
        newBox[Index1] = newBox[Index2];
        newBox[Index2] = temp;
        setBox(newBox);
    };

    const FileUpload = (e) => {
        const files = Array.from(e.target.files);
        const newImgBox = files.map(file => URL.createObjectURL(file));
        setImgBox(img => [...img, ...newImgBox]);
    };

    return (
        <div>
            <table className="Container">
                <tbody>
                    {
                        box.map((item, index) => {
                            return <Box key={index} gr={item.gr} bg={item.bg} box={box} setBox={setBox} setSetting={setSetting} index={index} moveItem={moveItem} setIndex={setIndex} Index={Index} />
                        })
                    }
                </tbody>
            </table>

            <div className="list">
                {
                    imgBox.map((src, index) => (
                        <ImageBox key={index} src={src} index={index}/>
                    ))
                }
            </div>

            <fieldset>
                <input type="file" onChange={FileUpload}></input>
            </fieldset>
            {
                setting && <Setting setting={setting} setSetting={setSetting} box={box} setBox={setBox} Index={Index} />
            }
        </div>
    );
}

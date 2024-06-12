import { useState } from 'react';
import ColorSet from './ColorSet';
import colors from './Color';

const Setting = ({ setting, setSetting, box, setBox, Index }) => {
      
    return (
        <div>
            <div className="SettingBg" onClick={() => setSetting(false)} />
            <div className="SetWindow">
                <div className='ColorSet'>
                    {
                        colors.map((item, index) => {
                            return <ColorSet box={box} setBox={setBox} Index={Index} Color={item}/>
                        })
                    }
                </div>
                <div className='NameSet'>
                    <input
                        type="text"
                        value={box[Index]?.gr}
                        onChange={(e) => {
                            const updatedBox = box.map((item, i) =>
                                i === Index ? { ...item, gr: e.target.value } : item
                            );
                            setBox(updatedBox);
                        }}
                    />
                </div>

                <div className='RowSet'>
                    <button type="button" onClick={() => {
                        setBox([
                            ...box,
                            {
                                gr: "NEW",
                                bg: "#ffff7f",
                                images: [],
                            },
                        ]);
                    }}>Add a Row</button>
                    <button type="button" onClick={() => {
                        const updatedBox = box.filter((item, i) => i !== Index);
                        setBox(updatedBox);
                        setSetting(false);
                    }}>Delete Row</button>
                </div>
            </div>
        </div>
    );
}

export default Setting;

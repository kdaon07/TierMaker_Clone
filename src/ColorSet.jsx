const ColorSet = ({box, setBox, Index, Color}) => {
    return (
        <button onClick={(e) => {
            const updatedBox = box.map((item, i) =>
                i === Index ? { ...item, bg: Color } : item
            );
            setBox(updatedBox);
        }} style={{ backgroundColor:Color }} />
    )
}

export default ColorSet
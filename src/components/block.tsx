import { useState } from "react";

const initialMouseDownPosition = {
  x: 0,
  y: 0
};

export const Block1 = ({
  blockName = "No Name",
  initialStyle = { top: 0, left: 0, zIndex: 0, background: "white" }
}) => {
  const [style, setStyle] = useState(initialStyle);
  const [isGripping, setIsGripping] = useState(false);
  const [mouseDownPosition, setMouseDownPosition] = useState(
    initialMouseDownPosition
  );

  const gripComponent = (event) => {
    setMouseDownPosition({
      x: event.nativeEvent.offsetX,
      y: event.nativeEvent.offsetY
    });
    setStyle({ ...style, zIndex: 10 });
    setIsGripping(true);
  };

  const moveComponent = (event) => {
    const deffTop = event.nativeEvent.offsetY - mouseDownPosition.y;
    const deffLeft = event.nativeEvent.offsetX - mouseDownPosition.x;
    if (isGripping) {
      setStyle({
        ...style,
        top: style.top + deffTop,
        left: style.left + deffLeft
      });
    }
  };

  const releaseComponent = (event) => {
    setMouseDownPosition(initialMouseDownPosition);
    setStyle({ ...style, zIndex: initialStyle.zIndex });
    setIsGripping(false);
  };

  return (
    <div
      style={style}
      className="Block1"
      onMouseDown={gripComponent}
      onMouseUp={releaseComponent}
      onMouseMove={moveComponent}
    >
      <p>{blockName}</p>
    </div>
  );
};

import { useState } from "react";

export const Block1 = ({
  blockName = "No Name",
  initialStyle = { top: 0, left: 0, zIndex: 0, background: "white" }
}) => {
  const initialMouseDownPosition = {
    x: 0,
    y: 0
  };
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
    if (isGripping) {
      console.log(
        `[MovePosition] X: ${
          event.nativeEvent.offsetX - mouseDownPosition.x
        } Y: ${event.nativeEvent.offsetY - mouseDownPosition.y}`
      );
      setStyle({
        ...style,
        top: style.top + event.nativeEvent.offsetY - mouseDownPosition.y,
        left: style.left + event.nativeEvent.offsetX - mouseDownPosition.x
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

import { useState } from "react";

export const Block1 = ({
  blockName = "No Name",
  initialStyle = { top: 0, left: 0, zIndex: 0, background: "white" }
}) => {
  const consoleFlag = false;
  const initialMouseDownPosition = {
    x: 0,
    y: 0
  };
  // const initialStyle = {
  //   top: 50,
  //   left: 50
  // };
  const [style, setStyle] = useState(initialStyle);
  const [isGripping, setIsGripping] = useState(false);
  const [mouseDownPosition, setMouseDownPosition] = useState(
    initialMouseDownPosition
  );

  consoleFlag && console.log(`${blockName} Render`);
  consoleFlag &&
    console.log(
      `[mouseDownPosition] x:${mouseDownPosition.x} y:${mouseDownPosition.y} `
    );

  const gripComponent = (event) => {
    consoleFlag &&
      console.log(
        `[Grip] X: ${event.nativeEvent.offsetX} Y: ${event.nativeEvent.offsetY}`
      );
    setMouseDownPosition({
      x: event.nativeEvent.offsetX,
      y: event.nativeEvent.offsetY
    });
    setStyle({ ...style, zIndex: 10 });
    setIsGripping(true);
  };
  const moveComponent = (event) => {
    if (isGripping) {
      consoleFlag &&
        console.log(
          `[Move] X: ${event.nativeEvent.offsetX} Y: ${event.nativeEvent.offsetY}`
        );
      consoleFlag &&
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
    consoleFlag &&
      console.log(
        `[Release] X: ${event.nativeEvent.offsetX} Y: ${event.nativeEvent.offsetY}`
      );
    setMouseDownPosition(initialMouseDownPosition);
    setStyle({ ...style, zIndex: initialStyle.zIndex });
    setIsGripping(false);
  };

  // 動作検証用：クリックすると、左上へ10pxずつ移動する
  // const handleClick = () => {
  //   consoleFlag && console.log("onClick");
  //   setStyle({
  //     top: style.top - 10,
  //     left: style.left - 10
  //   })
  //   consoleFlag && console.log(style.top);
  // };

  return (
    <div
      style={style}
      className="Block1"
      onMouseDown={gripComponent}
      onMouseUp={releaseComponent}
      onMouseMove={moveComponent}
      // onClick={handleClick}
    >
      <p>{blockName}</p>
    </div>
  );
};

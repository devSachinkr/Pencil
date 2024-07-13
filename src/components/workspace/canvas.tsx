import React from "react";
import { Excalidraw, MainMenu, WelcomeScreen } from "@excalidraw/excalidraw";
import { useCanvas } from "@/hooks/canvas";
type Props = {};

const Canvas = (props: Props) => {
  const { setWhiteBoardData, initialWhiteBoardData } = useCanvas();
  console.log(initialWhiteBoardData);
  return (
    <div
      className="w-full h-screen lg:border-l-[1px]
    border-white "
    >
      {initialWhiteBoardData && (
        <Excalidraw
          theme="dark"
          initialData={{
            elements: initialWhiteBoardData!,
          }}
          onChange={(e) => setWhiteBoardData(e)}
        >
        
        </Excalidraw>
      )}
    </div>
  );
};

export default Canvas;

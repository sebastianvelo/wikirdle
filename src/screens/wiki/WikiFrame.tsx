import React from "react";

interface WikiFrameProps {
    handler: (e: React.MouseEvent<HTMLDivElement>) => void;
    htmlContent: string;
    isLoading: boolean;
}

const WikiFrame = (props: WikiFrameProps) => {
  return (
    <>
    {!props.isLoading && (
      <div
        id="wiki"
        className="border-2 flex align-center bg-white p-4 overflow-y-scroll"
        onClick={props.handler}
        dangerouslySetInnerHTML={{ __html: props.htmlContent }}
      ></div>
    )}
    </>
  );
};

export default WikiFrame;

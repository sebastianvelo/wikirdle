import React from "react";

interface WikiFrameProps {
  handler: (e: React.MouseEvent<HTMLDivElement>) => void;
  htmlContent: string;
  isLoading: boolean;
}

const WikiFrame: React.FC<WikiFrameProps> = ({ handler, htmlContent, isLoading }) => {

  return (
    <>
      {!isLoading && (
        <div
          id="wiki"
          className="w-full h-full bg-white text-black overflow-y-auto shadow-inner scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-200 lg:w-3/4 lg:mx-auto border-x border-blue-900/20 p-4"
          onClick={handler}
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        ></div>
      )}
    </>
  );
};

export default WikiFrame;
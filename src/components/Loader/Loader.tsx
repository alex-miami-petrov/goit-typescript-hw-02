import React, { useEffect, useRef } from "react";
import { Bars } from "react-loader-spinner";

const Loader: React.FC = () => {
  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (loaderRef.current) {
      loaderRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div className="loader-container" ref={loaderRef}>
      <Bars
        height="40"
        width="40"
        color="#4fa94d"
        ariaLabel="bars-loading"
        visible={true}
      />
    </div>
  );
};

export default Loader;

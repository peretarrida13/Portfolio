import { useState } from "react";

export default function ImagePC({ src, height, width, size, alt, opacity }) {
  // State to manage image loading status
  const [loading, setLoading] = useState(true);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign:'center',
        width: width ? width : "70%",
        height: height ? height : "70%",
        position:'relative',
        left:'84%',
      }}
    >
      {/* Image */}
      <img
        src={src}
        className="fadeIn"
        style={{
          display: loading ? "none" : "block",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: opacity ? opacity : "1",
        }}
        onLoad={(e) => {
          setLoading(false); // Set loading to false when the image is loaded
        }}
        alt={alt} // Alt text for the image
      />
      {/* Loading spinner */}
      <div
        className="spinner"
        style={{
          display: loading ? "block" : "none",
          fontSize: size ? size : "24px",
        }}
      ></div>
    </div>
  );
}
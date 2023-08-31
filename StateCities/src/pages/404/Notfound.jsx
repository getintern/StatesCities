import "./Notfound.css";
import { Box, Text } from "@chakra-ui/react";
const Notfound = () => {
  return (
    <>
      <Box className="space"></Box>
      <div className="code-area">
        <span
          style={{
            display: "block",
            color: "#777",
            textAlign: "left",
            fontStyle: "italic",
            marginBottom: "15px",
          }}
        >
          .404 page not found {`//`}
        </span>
        <span style={{ textAlign: "left" }}>
          {"}"}
          <span style={{ color: "#d65562" }}> if </span>(
          <span style={{ color: "#4ca8ef" }}>!</span>
          <span style={{ fontStyle: "italic", color: "#bdbdbd" }}>found</span>)
        </span>
        <span style={{ textAlign: "left", marginLeft: "30px" }}>
          <span>
            ; (<span style={{ color: "#a6a61f" }}>{`(╯°□°)╯︵ ┻━┻`}</span>)
          </span>
          <span style={{ paddingRight: 15, color: "#2796ec" }}>
            <i style={{ width: 10, display: "inline-block" }} />
            throw
          </span>
          <span style={{ display: "block", marginLeft: "50px" }}>{"{"}</span>
          <span style={{ color: "#777", fontStyle: "italic" }}>
            <a style={{ textDecoration: "underline" }} href="/">
              ! Go home
            </a>{" "}
            {`//`}
          </span>
        </span>
      </div>
    </>
  );
};

export default Notfound;

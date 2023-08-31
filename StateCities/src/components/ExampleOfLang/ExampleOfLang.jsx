import SyntaxHighlighter from "react-syntax-highlighter";
import dracula from "react-syntax-highlighter/dist/esm/styles/hljs/dracula";

const ExampleOfLang = ({ language, code }) => {
  return (
    <SyntaxHighlighter
      customStyle={{
        direction: "ltr",
        fontSize: "14px", // Font size
        padding: "16px", // Padding around the code block
        borderRadius: "4px", // Border radius
      }}
      wrapLongLines
      language={language}
      style={dracula}
    >
      {/* {`const [state, setState]=useState([]) 
const response = await axios
      .get("https://my-0x0f.iran.liara.run/api/v1/states");
setState(response.data); `} */}
      {code}
    </SyntaxHighlighter>
  );
};

export default ExampleOfLang;

/* eslint-disable react/prop-types */
import { Text } from "@chakra-ui/react";
import "./HeadingText.css"
const HeadingText = ({ text }) => {
  return <Text className="heading">{text}</Text>;
};

export default HeadingText;

/* eslint-disable react/prop-types */
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  ListItem,
  Text,
  Tooltip,
  UnorderedList,
} from "@chakra-ui/react";
import axios from "axios";
// import styled from "./EndPoint.module.css";
import { useEffect, useState } from "react";
import { Clipboard, Clipboard2Check } from "react-bootstrap-icons";

const EndPointPhone = ({ endPoint }) => {
  const [isCopied, setIsCopied] = useState(false);
  const [state, setState] = useState();
  const [showExample, setShowExample] = useState(false);

  useEffect(() => {
    const fetchStateData = async () => {
      try {
        const response = await axios.get(endPoint);

        await setState(response.data.phone);
      } catch (error) {
        console.log(error);
      }
    };
    fetchStateData();
  }, []);

  const copyText = () => {
    const tempInput = document.createElement("textarea");
    tempInput.value = endPoint;
    document.body.appendChild(tempInput);

    tempInput.select();
    tempInput.setSelectionRange(0, 99999);

    document.execCommand("copy");

    document.body.removeChild(tempInput);

    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 5000); // Remove "Copied!" after 10 seconds
  };

  return (
    <Card className="card">
      <CardHeader
        className="headerCard"
        display="flex"
        justifyContent="space-between"
      >
        <Text fontSize={15} fontWeight="bold">
          مسیر لینک
        </Text>
        {isCopied ? (
          <Tooltip
            label="کپی شد!"
            defaultIsOpen
            closeDelay={900}
            placement="top"
          >
            <button onClick={copyText}>
              {isCopied ? (
                <Clipboard2Check className="iconCopy" />
              ) : (
                <Clipboard />
              )}
            </button>
          </Tooltip>
        ) : (
          <button onClick={copyText}>
            {isCopied ? (
              <Clipboard2Check className="iconCopy" />
            ) : (
              <Clipboard />
            )}
          </button>
        )}
      </CardHeader>
      <CardBody textAlign="left">
        <Text>{endPoint}</Text>
        <Divider type="dashed" py={2} />
        <UnorderedList
          my={5}
          display={showExample ? "block" : "none"}
          listStyleType="none"
        >
          {state &&
            state?.map(state => (
              <ListItem key={state.id}>
                <pre>
                  {`phone:{
                     { code: ${state.code} 

                      id: ${state.id}}
            
                  }`}
                </pre>
              </ListItem>
            ))}
        </UnorderedList>
        <Divider />
        <Button
          className="btnSHowState"
          onClick={() => setShowExample(true)}
          mt={4}
        >
          نمایش جواب
        </Button>
      </CardBody>
    </Card>
  );
};

export default EndPointPhone;

import { useState } from "react";

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CircularProgress,
  Divider,
  ListItem,
  Text,
  Tooltip,
  UnorderedList,
} from "@chakra-ui/react";
import axios from "axios";

import { Clipboard2CheckFill, Clipboard2Fill } from "react-bootstrap-icons";

// eslint-disable-next-line react/prop-types
const EndpointCities = ({ endPoint }) => {
  const [isCopied, setIsCopied] = useState(false);
  const [state, setState] = useState();
  const [showExample, setShowExample] = useState(false);
  const [loading, setLoading] = useState();

  // TODO Send Request to APi button
  const sendRequest = async () => {
    await setLoading(true);
    try {
      const response = await axios.get(endPoint);
      response;

      await setState(response.data.cities);
      await setShowExample(true);
      await setLoading(false);
    } catch (error) {
      error;
    }
  };

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
    <Card className="cardOfExample">
      <CardHeader
        className="headerCardOfExample"
        display="flex"
        justifyContent="space-between"
      >
        <Text className="textApi" fontSize={15} fontWeight="bold">
          Api
        </Text>
        {isCopied ? (
          <Tooltip
            label="کپی شد!"
            defaultIsOpen
            closeDelay={900}
            placement="left"
          >
            <Button onClick={copyText}>
              {isCopied ? (
                <Clipboard2CheckFill className="iconCopy" />
              ) : (
                <Clipboard2Fill />
              )}
            </Button>
          </Tooltip>
        ) : (
          <Tooltip label="کپی" placement="top">
            <Button onClick={copyText}>
              {isCopied ? (
                <Clipboard2CheckFill className="iconCopy" />
              ) : (
                <Clipboard2Fill />
              )}
            </Button>
          </Tooltip>
        )}
      </CardHeader>
      <CardBody textAlign="left">
        <Text className="endPointShow">{endPoint}</Text>
        <Divider type="dashed" py={2} />
        <UnorderedList
          my={5}
          display={showExample ? "block" : "none"}
          listStyleType="none"
        >
          <ListItem>
            <pre className="preCode">
              {state &&
                state?.slice(0, 1).map(state => (
                  <ListItem key={state.id}>
                    <pre className="preCode">
                      {`cities:{
                      name: ${state.name} 
                      latitude: ${state.latitude}
                      longitude: ${state.longitude}
                      id: ${state.id}
            
                  }`}
                    </pre>
                  </ListItem>
                ))}
            </pre>
          </ListItem>
        </UnorderedList>
        <Divider />
        <Button
          isLoading={
            loading && (
              <CircularProgress
                className="spinner"
                isIndeterminate
                color="green.300"
              />
            )
          }
          className="btnSHowState"
          onClick={sendRequest}
          mt={4}
        >
          ارسال درخواست
        </Button>
      </CardBody>
    </Card>
  );
};

export default EndpointCities;

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
// import from "../EndPointCity/EndPoint";
import { useEffect, useState } from "react";
import { Clipboard, Clipboard2Check } from "react-bootstrap-icons";

// eslint-disable-next-line react/prop-types
const EndpointCities = ({ endPoint }) => {
  const [isCopied, setIsCopied] = useState(false);
  const [state, setState] = useState();
  const [showExample, setShowExample] = useState(false);

  useEffect(() => {
    const fetchStateData = async () => {
      try {
        const response = await axios.get(endPoint);
        await setState(response.data.cities);
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
          <ListItem>
            <pre>
              {state &&
                state?.slice(0, 1).map(state => (
                  <ListItem key={state.id}>
                    <pre>
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

export default EndpointCities;

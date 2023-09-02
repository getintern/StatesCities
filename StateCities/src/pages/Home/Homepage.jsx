import {
  Box,
  Flex,
  Text,
  Heading,
  Image,
  Divider,
  AbsoluteCenter,
  VStack,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Tabs,
  TabList,
  Link,
  TabPanels,
  Tab,
  TabPanel,
  Button,
} from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

import styled from "./Homepage.module.css";
import hero from "../../assets/image/heroImage.png";
import EndPointState from "../../components/EndPoints/EndPointStates/EndpointState";
import EndpointCities from "../../components/EndPoints/EndPointCities/EndPointCities";
import EndPointPhone from "../../components/EndPoints/EndPointPhone/EndPointPhone";
import EndPointTimeZone from "../../components/EndPoints/EndPointTimeZone/EndPointTimeZone";
import CardFeature from "../../components/CardFeature/CardFeature";
import delivery from "../../assets/image/delivery.png";
import CallUs from "../../components/CallUs/CallUs";
import php from "../../assets/image/phpLogo.png";
import js from "../../assets/image/jsLogo.png";
import react from "../../assets/image/reactLogo.png";
import json from "../../assets/image/jsonLogo.png";
import python from "../../assets/image/pythonLogo.png";
import javaLogo from "../../assets/image/javaLogo.png";
import ExampleOfLang from "../../components/ExampleOfLang/ExampleOfLang";

import DividerLayout from "../../Layout/DividerLayout";
import EndPointUni from "../../components/EndPoints/EndPointUni/EndPointUni";
import ExampleOfCountry from "../../components/ExampleOfCountry/ExampleOfCountry";

import reqLogo from "../../assets/image/req.gif";
import EndPointWeather from "../../components/EndPoints/EndPoinWeather/EndPointWeather";

const Homepage = () => {
  return (
    <Box className={styled.wrapperMain}>
      <Outlet />
      <Box className={styled.mainInner}>
        {/* //TODO: ==========Hero======== */}
        <Flex
          flexDirection={{ base: "column", md: "row" }} // Change direction to column on mobile and row on larger screens
          alignItems="center"
          justifyContent="space-between"
        >
          <Heading lineHeight="1.6">
            <Text className="subText">مستندات آموزشی برای</Text>
            <Heading mb={[4, 7, 0]}>
              اطلاعات رایگان برای توسعه دهندگان اپلیکیشن
            </Heading>
          </Heading>

          <Image boxSize={["400px", "430px", "480px"]} src={hero}></Image>
        </Flex>
        {/* //TODO: ==========CardFeature======== */}
        <CardFeature />
        {/* //TODO: ==========API Of State======== */}
        <DividerLayout ids="states" subTitleSection="استان ها" />
        <Box className="section firstSection" as="section">
          <Flex
            className="innerCard"
            alignItems="center"
            justifyContent="space-between"
          >
            <Text className="sectionText">
              با درخواست به این API شما می توانید
              <h6> لیست تمام استان ها و مرکز</h6>
              <h6>استان</h6> را دریافت کنید
            </Text>
            <Tabs className="tabs">
              <TabList justifyContent="space-between">
                <Tab>
                  <Image boxSize={30} src={json} />
                </Tab>

                <Tab>
                  <Image boxSize={30} src={react} />
                </Tab>
                <Tab>
                  <Image boxSize={30} src={js} />
                </Tab>
                <Tab>
                  <Image boxSize={30} src={php} />
                </Tab>
                <Tab>
                  <Image boxSize={30} src={python} />
                </Tab>
                <Tab>
                  <Image boxSize={30} src={javaLogo} />
                </Tab>
              </TabList>

              <TabPanels>
                <TabPanel>
                  <EndPointState endPoint="https://api.getfreejson.ir/api/v1/states" />
                </TabPanel>
                <TabPanel className="tabpanels">
                  <ExampleOfLang
                    language="javascript"
                    code={`const [state, setState]=useState([]) 
const response = await axios
      .get("https://api.getfreejson.ir/api/v1/states");
setState(response.data); `}
                  />
                </TabPanel>
                <TabPanel className="tabpanels">
                  <ExampleOfLang
                    language="javascript"
                    code={`fetch('https://api.getfreejson.ir/api/v1/states')
            .then(response => response.json())
            .then(json =>  (json)); `}
                  />
                </TabPanel>
                <TabPanel className="tabpanels">
                  <ExampleOfLang
                    language="php"
                    code={`$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "https://api.getfreejson.ir/api/v1/states");

curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, POST DATA);
$result = curl_exec($ch);            
print_r($result);
curl_close($ch); `}
                  />
                </TabPanel>
                <TabPanel className="tabpanels">
                  <ExampleOfLang
                    language="python"
                    code={`import requests
response = requests.get("https://api.getfreejson.ir/api/v1/states")
data = response.json() `}
                  />
                </TabPanel>
                <TabPanel className="tabpanels">
                  <ExampleOfLang
                    language="java"
                    code={`HttpClient httpClient = HttpClient.newBuilder().build();

                    URI uri = URI.create("https://api.getfreejson.ir/api/v1/states");

HttpRequest httpRequest = HttpRequest.newBuilder().GET().uri(uri).build();

HttpResponse<String> httpResponse = httpClient.send(httpRequest, HttpResponse.BodyHandlers.ofString()); `}
                  />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Flex>
        </Box>
        {/* //TODO: ==========API Of Cities======== */}
        <DividerLayout ids="cities" subTitleSection="شهرستان ها" />
        <Box className="section firstSection" as="section">
          <Flex
            className="innerCard"
            flexDirection={{ base: "column", md: "row" }} // Change direction to column on mobile and row on larger screens
            alignItems="center"
            justifyContent="space-between"
          >
            <Text className="sectionText">
              با درخواست به این API شما می توانید
              <h6>لیست تمام شهرهای</h6> استان مورد نظر را دریافت کنید
            </Text>

            <EndpointCities endPoint="https://api.getfreejson.ir/api/v1/cities?state=خوزستان" />
          </Flex>
        </Box>
        {/* //TODO: ==========API Of PhoneCode======== */}
        <DividerLayout ids="phonecode" subTitleSection="کد تلفن" />
        <Box className="section firstSection" as="section">
          <Flex
            className="innerCard"
            flexDirection={{ base: "column", md: "row" }} // Change direction to column on mobile and row on larger screens
            alignItems="center"
            justifyContent="space-between"
          >
            <Text className="sectionText">
              با درخواست به این API شما می توانید
              <h6> کد تلفن استان </h6>مورد نظر را دریافت کنید
            </Text>
            <EndPointPhone endPoint="https://api.getfreejson.ir/api/v1/phoneCode?state=کرمان" />
          </Flex>
        </Box>
        {/* //TODO: ==========API Of TimeZones======== */}
        <DividerLayout ids="timezone" subTitleSection="ساعت محلی" />
        <Box className="section firstSection" as="section">
          <Flex
            className="innerCard"
            flexDirection={{ base: "column", md: "row" }} // Change direction to column on mobile and row on larger screens
            alignItems="center"
            justifyContent="space-between"
          >
            <Text className="sectionText">
              با درخواست به این API شما می توانید
              <h6>ساعت محلی و پایتخت و کد تلفن</h6>
              کشور مورد نظر را دریافت کنید
            </Text>
            <EndPointTimeZone endPoint="https://api.getfreejson.ir/api/v1/timeZones?country=iran" />
          </Flex>
          <Alert flexDirection={{ base: "column", md: "row" }} status="error">
            <AlertIcon />
            <AlertTitle>نکته</AlertTitle>
            <AlertDescription>
              بعضی از کشور ها چند ایالتی هستن و زمان های محلی چندگانه دارند !
              بهتره موقع درخواست لاگ بگیرین تا اطلاعات دقیق تری ببینید
            </AlertDescription>
          </Alert>
        </Box>

        <Box>
          <ExampleOfCountry endPoint="https://api.getfreejson.ir/api/v1/timeZones?country=Brazil" />
        </Box>
        {/* //TODO: ==========API Of university======== */}

        <DividerLayout ids="university" subTitleSection="دانشگاه های کشور" />
        <Box className="section firstSection" as="section">
          <Flex
            className="innerCard"
            flexDirection={{ base: "column", md: "row" }} // Change direction to column on mobile and row on larger screens
            alignItems="center"
            justifyContent="space-between"
          >
            <Text className="sectionText">
              با درخواست به این API شما می توانید
              <h6>
                نام دانشگاه های کشور و شهر و تعداد دانشکده ها و سال تاسیس{" "}
              </h6>
              دانشگاه موردنظر را دریافت کنید
            </Text>

            <EndPointUni endPoint="https://api.getfreejson.ir/api/v1/getalluni" />
          </Flex>
        </Box>

        {/* //TODO: ==========API Of Weather======== */}

        <DividerLayout ids="weather" subTitleSection="آب و هوا" />
        <Box className="section firstSection" as="section">
          <Flex
            className="innerCard"
            flexDirection={{ base: "column", md: "row" }} // Change direction to column on mobile and row on larger screens
            alignItems="center"
            justifyContent="space-between"
          >
            <Text className="sectionText">
              با درخواست به این API شما می توانید به
              <h6>دما و نام کشور و شهر و آیکون </h6>
              موردنظر را دریافت کنید
            </Text>

            <EndPointWeather endPoint="https://api.getfreejson.ir/api/v1/getweather?city=tehran" />
          </Flex>
        </Box>

        {/* //TODO: ==========API Of Suggestion======== */}
        <Box className="divider" id="timezone" position="relative" padding="10">
          <Divider />
          <AbsoluteCenter>پیشنهاد</AbsoluteCenter>
        </Box>
        <Flex flexDir="column" alignItems="center">
          <VStack>
            <Image ml={12} boxSize={180} src={delivery} />
            <Text mb={25}>
              اگر احساس می کنید اطلاعاتی باید اضافه یا ویرایش شود لطفا به ما
              اطلاع بدین
            </Text>
            <Button mb={39} colorScheme="teal" variant="solid">
              <Image boxSize={30} src={reqLogo} />
              <Link href="mailto:info@salararjmandpour.me">
                همین الان به من بگو
              </Link>
            </Button>
          </VStack>
          <CallUs />
        </Flex>
      </Box>
    </Box>
  );
};

export default Homepage;

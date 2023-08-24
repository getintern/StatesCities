import {
  Box,
  SimpleGrid,
  Heading,
  Image,
  Grid,
  Text,
  GridItem,
  Divider,
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
} from "@chakra-ui/react";
import imageForHeader from "../../assets/image/3dImage.png";
import CardFeature from "../../components/CardFeature/CardFeature";
import Footer from "../../components/Footer/Footer";
import EndPoint from "../../components/EndPoints/EndPointCity/EndPoint";
import EndpointCities from "../../components/EndPoints/EndPoinCities/EndpointCities";
import EndPointPhone from "../../components/EndPoints/EndPointPhone/EndPointPhone";
import EndPointTimeZone from "../../components/EndPoints/EndpointTimeZone/EndPointTimeZone";
const Home = () => {
  return (
    <Box>
      <SimpleGrid p={10}>
        <Box>
          <Grid
            templateColumns="repeat(2, 1fr)"
            justifyItems="center"
            alignItems={"center"}
            mt={20}
          >
            <GridItem colSpan={1}>
              <strong className="greenText">مستندات</strong> وب سرویس
              <Heading className="headingText" as="h1">
                اطلاعات استان و شهرهای ایران
              </Heading>
            </GridItem>

            <GridItem colSpan={1}>
              <Image src={imageForHeader} />
            </GridItem>
          </Grid>
        </Box>
        <Box className="BoxWrapper">
          <CardFeature />
        </Box>
        <Divider />
        <Box className="BoxWrapper" id="states">
          <Heading mb={55} py={10} textAlign="center">
            استان ها
          </Heading>

          <Grid
            templateColumns="repeat(2, 1fr)"
            justifyItems="center"
            alignItems={"center"}
          >
            <GridItem colSpan={1}>
              <Text lineHeight={10} fontSize={19}>
                با صدا کردن این آدرس شما می توانید در جواب نام استان و نام مرکز
                استان و مختصات جغرافیایی استان را دریافت کنید
              </Text>
            </GridItem>
            <GridItem colSpan={1}>
              <EndPoint
                endPoint={"https://my-0x0f.iran.liara.run/api/v1/states"}
              />
            </GridItem>
          </Grid>
        </Box>
        <Divider />
        <Box className="BoxWrapper" id="cities">
          <Heading mb={55} py={10} textAlign="center">
            شهرستان ها
          </Heading>

          <Grid templateColumns="repeat(2, 1fr)" alignItems={"center"}>
            <GridItem colSpan={1}>
              <Text lineHeight={10} fontSize={19}>
                با صدا کردن این آدرس و گذاشتن نام استان مورد نظر می توانید تمامی
                شهرستان ها را دریافت کنید
              </Text>
            </GridItem>
            <GridItem colSpan={1}>
              <Tabs>
                <TabList>
                  <Tab>JSON</Tab>
                  <Tab>JS</Tab>
                  <Tab>React</Tab>
                </TabList>

                <TabPanels>
                  <TabPanel>
                    <EndpointCities
                      endPoint={
                        "https://my-0x0f.iran.liara.run/api/v1/cities?state=خوزستان"
                      }
                    />
                  </TabPanel>
                  <TabPanel>
                    <p>two!</p>
                  </TabPanel>
                  <TabPanel>
                    <p>three!</p>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </GridItem>
          </Grid>
        </Box>
        <Divider />
        <Box className="BoxWrapper" id="phonecode">
          <Heading mb={55} py={10} textAlign="center">
            کد تلفن شهرهای ایران
          </Heading>

          <Grid
            templateColumns="repeat(2, 1fr)"
            justifyItems="center"
            alignItems={"center"}
          >
            <GridItem colSpan={1}>
              <Text lineHeight={10} fontSize={19}>
                با صدا کردن این آدرس می توان کد تلفن شهرستان ها را دریافت کنید
              </Text>
            </GridItem>
            <GridItem colSpan={1}>
              <EndPointPhone
                endPoint={
                  "https://my-0x0f.iran.liara.run/api/v1/phoneCode?state=کرمان"
                }
              />
            </GridItem>
          </Grid>
        </Box>
        <Divider />
        <Box className="BoxWrapper" id="timezone">
          <Heading mb={55} py={10} textAlign="center">
            ساعت محلی کشورها
          </Heading>

          <Grid
            templateColumns="repeat(2, 1fr)"
            justifyItems="center"
            alignItems={"center"}
          >
            <GridItem colSpan={1}>
              <Text lineHeight={10} fontSize={19}>
                با صدا کردن این آدرس می توانید به ساعت محلی و پایتخت و کد کشور
                دسترسی داشته باشید
              </Text>
            </GridItem>
            <GridItem colSpan={1}>
              <EndPointTimeZone
                endPoint={
                  "https://my-0x0f.iran.liara.run/api/v1/timeZones?country=iran"
                }
              />
            </GridItem>
          </Grid>
        </Box>
      </SimpleGrid>
      <Footer />
    </Box>
  );
};

export default Home;

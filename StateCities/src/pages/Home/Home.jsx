import { Box, Divider, Heading, Text } from "@chakra-ui/react";

const Home = () => {
  return (
    <Box mr={20}>
      <Heading>شروع</Heading>
      <Text className="subText" pt={4}>
        تمام چیزی که برای استفاده نیاز دارید
      </Text>
      <Divider py={10} />
    </Box>
  );
};

export default Home;

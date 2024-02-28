import { Box, Container, Heading, Text, Stack, Button, Flex, Image, SimpleGrid, Icon, useColorModeValue } from "@chakra-ui/react";
import { FaRobot, FaUsers, FaRegLightbulb, FaPlus } from "react-icons/fa";

const Feature = ({ title, text, icon }) => {
  return (
    <Stack>
      <Flex w={16} h={16} align={"center"} justify={"center"} color={"white"} rounded={"full"} bg={useColorModeValue("blue.500", "blue.300")} mb={1}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={"gray.600"}>{text}</Text>
    </Stack>
  );
};

const Index = () => {
  return (
    <Container maxW={"5xl"} py={12}>
      <Stack as={Box} textAlign={"center"} spacing={{ base: 6, md: 10 }}>
        <Heading fontWeight={600} fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }} lineHeight={"110%"}>
          Join the <br />
          <Text as={"span"} color={"blue.400"}>
            AI Content Creators Community
          </Text>
        </Heading>
        <Text color={"gray.500"}>A hub for innovators, thinkers, and creators passionate about leveraging AI to create impactful content. Connect, collaborate, and share your AI-driven projects with a like-minded community.</Text>
        <Stack spacing={6} direction={"row"} justify={"center"}>
          <Button rounded={"full"} px={6} colorScheme={"blue"} bg={"blue.400"} _hover={{ bg: "blue.500" }}>
            Get started
          </Button>
          <Button rounded={"full"} px={6}>
            Learn more
          </Button>
        </Stack>
      </Stack>

      <Box p={4}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Feature icon={<Icon as={FaRobot} w={10} h={10} />} title={"Innovative AI Tools"} text={"Access to the latest AI tools and technologies to enhance your content creation process."} />
          <Feature icon={<Icon as={FaUsers} w={10} h={10} />} title={"Collaborative Community"} text={"A supportive network of content creators to share insights and collaborate on projects."} />
          <Feature icon={<Icon as={FaRegLightbulb} w={10} h={10} />} title={"Creative Inspiration"} text={"Inspiration sessions and challenges to spark new ideas and keep your creativity flowing."} />
        </SimpleGrid>
      </Box>

      <Stack align={"center"} justify={"center"} direction={"column"} mt={10}>
        <Heading as={"h3"} size={"lg"} mb={3}>
          Meet Our Members
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Box textAlign={"center"}>
            <Image borderRadius={"full"} boxSize={"150px"} src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhaSUyMGNvbnRlbnQlMjBjcmVhdG9yJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzA5MTU0OTgzfDA&ixlib=rb-4.0.3&q=80&w=1080" alt={"AI Content Creator"} mb={4} />
            <Heading as={"h4"} size={"md"}>
              Alex Smith
            </Heading>
            <Text color={"gray.600"}>AI Researcher</Text>
          </Box>
          <Box textAlign={"center"}>
            <Image borderRadius={"full"} boxSize={"150px"} src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjBwb3J0cmFpdHxlbnwwfHx8fDE3MDkxMDU3MTl8MA&ixlib=rb-4.0.3&q=80&w=1080" alt={"Developer"} mb={4} />
            <Heading as={"h4"} size={"md"}>
              Samantha Johnson
            </Heading>
            <Text color={"gray.600"}>Software Developer</Text>
          </Box>
          <Box textAlign={"center"}>
            <Image borderRadius={"full"} boxSize={"150px"} src="https://images.unsplash.com/photo-1474031317822-f51f48735ddd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdyaXRlciUyMHBvcnRyYWl0fGVufDB8fHx8MTcwOTE1NDk4M3ww&ixlib=rb-4.0.3&q=80&w=1080" alt={"Creative Writer"} mb={4} />
            <Heading as={"h4"} size={"md"}>
              Michael Brown
            </Heading>
            <Text color={"gray.600"}>Creative Writer</Text>
          </Box>
        </SimpleGrid>
      </Stack>
    </Container>
  );
};

export default Index;

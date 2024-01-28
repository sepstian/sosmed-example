import { Box, Flex, HStack, Stack, Tab, TabList, Text} from "@chakra-ui/react";
import { primaryColor } from "../../../public/color";
import { MdAccountBox } from "react-icons/md"
import { AiFillHome } from "react-icons/ai";
import { BiSolidNotification, BiSolidMessageDetail } from "react-icons/bi";

const SideNav = () => {
    return <>
        <Box w={'300px'} pl={'150px'} position={'fixed'}>
            <TabList>
                <Stack>
                    <Tab w={'100%'} justifyContent={'start'} rounded={'lg'} _selected={{ color: 'white', bgColor: primaryColor }}>
                        <HStack align={"center"} >
                            <AiFillHome size={'25px'} />
                            <Text as={'b'} fontSize={'25px'}>Home</Text>
                        </HStack>
                    </Tab>
                    <Tab w={'100%'} justifyContent={'start'} rounded={'lg'} _selected={{ color: 'white', bgColor: primaryColor }}>
                        <HStack align={"center"} >
                            <BiSolidNotification size={'25px'} />
                            <Text as={'b'} fontSize={'25px'}>Notification</Text>
                        </HStack>
                    </Tab>
                    <Tab w={'100%'} justifyContent={'start'} rounded={'lg'} _selected={{ color: 'white', bgColor: primaryColor }}>
                        <HStack align={"center"} >
                            <BiSolidMessageDetail size={'25px'} />
                            <Text as={'b'} fontSize={'25px'}>Messages</Text>
                        </HStack>
                    </Tab>
                    <Tab w={'100%'} justifyContent={'start'} rounded={'lg'} _selected={{ color: 'white', bgColor: primaryColor }}>
                        <HStack align={"center"} >
                            <MdAccountBox size={'25px'} />
                            <Text as={'b'} fontSize={'25px'}>Profile</Text>
                        </HStack>
                    </Tab>
                    <Flex mt={'50px'} h={'35px'} border={'1px'} borderColor={primaryColor} rounded={'lg'} align={'center'} justify={'center'}>
                        <Text color={primaryColor} as={'b'}>Trending</Text>
                    </Flex>
                </Stack>
            </TabList>
        </Box>
    </>
};

export default SideNav;
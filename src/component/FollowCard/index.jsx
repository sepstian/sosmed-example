import { Avatar, Box, Flex, Heading, Text } from "@chakra-ui/react";
import { primaryColor } from "../../../public/color";
import { IoPersonAdd } from "react-icons/io5"


const FollowCard = () => {
    return <>
        <Flex w={'30%'} justify={'center'}>
            <Flex w={'300px'} mt={'20px'} rounded={'md'} boxShadow={'lg'} position={'fixed'} p={'15px 20px'} bgColor={primaryColor} flexDirection={'column'}>
                <Heading size={'lg'} color={'white'}>Who to follow</Heading>
                <Flex bgColor={'white'} h={'60px'} w={'100%'} mt={'10px'} rounded={'lg'} boxShadow={'xl'} p={'10px'} align={'center'}>
                    <Avatar size='sm' src='https://bit.ly/dan-abramov' />
                    <Box overflow={'hidden'} mr={'10px'} ml={'15px'} w={'150px'} ><Text>@ardiansyah</Text></Box>
                    <IoPersonAdd size={'25px'} />
                </Flex>
                <Flex bgColor={'white'} h={'60px'} w={'100%'} mt={'10px'} rounded={'lg'} boxShadow={'xl'} p={'10px'} align={'center'}>
                    <Avatar size='sm' src='https://bit.ly/dan-abramov' />
                    <Box overflow={'hidden'} mr={'10px'} ml={'15px'} w={'150px'} ><Text>@Septian</Text></Box>
                    <IoPersonAdd size={'25px'} />
                </Flex>
                <Flex bgColor={'white'} h={'60px'} w={'100%'} mt={'10px'} rounded={'lg'} boxShadow={'xl'} p={'10px'} align={'center'}>
                    <Avatar size='sm' src='https://bit.ly/dan-abramov' />
                    <Box overflow={'hidden'} mr={'10px'} ml={'15px'} w={'150px'} ><Text>@khansa</Text></Box>
                    <IoPersonAdd size={'25px'} />
                </Flex>
                <Flex mt={'15px'} align={'center'} justify={'center'}>
                    <Text color={'whiteAlpha.700'}>See more</Text>
                </Flex>
            </Flex>
        </Flex>
    </>
};

export default FollowCard;
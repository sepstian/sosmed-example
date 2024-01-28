import { Avatar, Box, Flex, Stack, Text } from "@chakra-ui/react";
import { BiShare, BiLike, BiComment } from "react-icons/bi";

const PostCard = (props) => {
    return <>
        <Box m={'5px 40px'} boxShadow={'lg'} p={'15px 35px'} minWidth={'500px'}>
            <Stack direction={"row"} align={'center'} spacing={'3'}>
                <Avatar size='md' src='https://bit.ly/dan-abramov' />
                <Text as={'b'} fontSize={'20px'}>Fahmi Ardiansyah</Text>
                <Text color={'blackAlpha.500'}>10 days ago</Text>
            </Stack>
            <Box w={'100%'} m={'15px 0'} wordBreak={'break-word'}>
                <Text>{props.text}</Text>
            </Box>
            <Flex justify={'space-evenly'} color={'blackAlpha.600'}>
                <Stack direction={'row'} spacing={1} align={'center'}>
                    <BiLike size={'30px'} />
                    <Text >10</Text>
                </Stack>
                <Stack direction={'row'} spacing={1} align={'center'}>
                    <BiComment size={'30px'} />
                    <Text >10</Text>
                </Stack>
                <Stack direction={'row'} spacing={1} align={'center'}>
                    <BiShare size={'30px'} />
                    <Text >0</Text>
                </Stack>
            </Flex>
        </Box>
    </>
};

export default PostCard;
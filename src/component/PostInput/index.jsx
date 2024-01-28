import { Avatar, Box, Button, Flex, Heading, Textarea, Text } from "@chakra-ui/react";
import { secondaryColor, primaryColor } from "../../../public/color";
import { BsCardImage, BsMic, BsEmojiSmile } from "react-icons/bs"
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost, testPost } from "../../redux/action/postAction";

const PostInput = () => {
    const [inCountChar, setInCountChar] = useState(0);
    const [inPostText, setInPostText] = useState('');
    const dispatch = useDispatch();
    const lastid = useSelector((state) => state.postReducer.post[state.postReducer.post.length-1].id);
    const globalState = useSelector((state) => state.postReducer.post);

    useEffect(() => {console.log(globalState);},[globalState, lastid])

    const onPost = () => {
        if (inPostText.length > 0) {
            dispatch(addPost({
                capt: inPostText,
                id: lastid + 1
            }));

            setInPostText('');
        }
    };

    return <>
        <Box display={'inline-flex'} w={'100%'}>
            <Avatar size='lg' src='https://bit.ly/dan-abramov' />
            <Textarea
                ml={'15px'}
                placeholder="What happend today?"
                value={inPostText}
                resize={'none'} h={'150px'}
                variant={'unstyled'}
                maxLength={'150'}
                onChange={(e) => {
                    setInCountChar(e.target.value.length);
                    setInPostText(e.target.value);
                }}
            />
        </Box>
        <Box textAlign={'end'} w={'100%'} color={'blackAlpha.600'}>
            <Text>{inCountChar}/150</Text>
        </Box>
        <Flex h={'80px'} align={'center'} justify={'space-between'} p={'10px 15px'}>
            <Flex w={'200px'} color={secondaryColor} justify={'space-between'}>
                <BsCardImage size={'35px'} />
                <BsMic size={'35px'} />
                <BsEmojiSmile size={'35px'} />
            </Flex>
            <Button
                bgColor={primaryColor}
                rounded={'9999px'}
                color={'white'}
                w={'100px'}
                onClick={onPost}
            >
                POST
            </Button>
        </Flex>
        <Flex align={'center'} justify={'start'} pl={'30px'} mb={'25px'}>
            <Heading color={'blackAlpha.300'} size={'3xl'}>What's Happening</Heading>
        </Flex>
    </>
};

export default PostInput;
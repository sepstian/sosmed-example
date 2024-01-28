import { Avatar, Box, Popover, PopoverContent, PopoverTrigger, StackDivider, Text, VStack } from "@chakra-ui/react";
import { AiOutlineDown } from "react-icons/ai";
import { secondBgColor } from "../../../public/color";
import { MdVerified } from "react-icons/md";

const AvatarNav = () => {
    return <>
        <VStack> 
            <Popover>
                <PopoverTrigger>
                    <Box display={'inline-flex'} alignItems={'center'} border={'1px'} borderColor={'blackAlpha.400'} borderRadius={'9999px'} w={'235px'} justifyContent={'space-between'} pr={'8px'} cursor={'pointer'}>
                        <Avatar size='md' src='https://bit.ly/dan-abramov' />
                        <Text>Fahmi Ardiansyah</Text>
                        <AiOutlineDown />
                    </Box>
                </PopoverTrigger>
                <PopoverContent bg={secondBgColor} w={'235px'} color={'whiteAlpha.900'} borderColor={secondBgColor} p={'15px 10px'}>
                    <VStack divider={<StackDivider borderColor='gray.200' />} align={'start'}>
                        <Box>
                            <Box display={'inline-flex'} alignItems={'center'}><MdVerified /><Text as={'b'} fontStyle={'italic'}>Verified</Text></Box>
                            <Text>fahmi@mail.com</Text>
                        </Box>
                        <Box>
                            <Text>Dashboard</Text>
                            <Text>Setting</Text>
                        </Box>
                        <Box>
                            <Text>Sign Out</Text>
                        </Box>
                    </VStack>
                </PopoverContent>
            </Popover>
            <Box bg={secondBgColor} w={'235px'} position={'absolute'} top={'60px'} rounded={'md'} color={'whiteAlpha.900'} p={'15px 10px'} display={'none'}>
                <VStack divider={<StackDivider borderColor='gray.200' />} align={'start'}>
                    <Box>
                        <Box display={'inline-flex'} alignItems={'center'}><MdVerified /><Text as={'b'} fontStyle={'italic'}>Verified</Text></Box>
                        <Text>fahmi@mail.com</Text>
                    </Box>
                    <Box>
                        <Text>Dashboard</Text>
                        <Text>Setting</Text>
                    </Box>
                    <Box>
                        <Text>Sign Out</Text>
                    </Box>
                </VStack>
            </Box>
        </VStack>
    </>
}

export default AvatarNav;
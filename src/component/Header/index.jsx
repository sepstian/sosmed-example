import { Flex, Image } from '@chakra-ui/react';

const Header = (props) => {
    return <>
        <Flex justify={'space-between'} align={'center'} h={'80px'} bg={'whiteAlpha.800'} position={'fixed'} w={'100%'} pl={'25px'} pr={'100px'} backdropBlur={'xl'} zIndex={'1'}>
            <Image src="./z.png" alt="logo" w={'50px'} />
            {props.children}
        </Flex>
    </>
};

export default Header;
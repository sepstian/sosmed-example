import { Text } from "@chakra-ui/react"

const TextNya = (props) =>{
    return <Text className={props.class}>
        {props.children}
    </Text>
}

export default TextNya
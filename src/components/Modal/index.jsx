import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
} from "@chakra-ui/react";
import useToggle from "../../hooks/useToggle";
import React from "react";
import "./modal.css";
import axios from "axios";
import { API_URL } from "../../helper";
import { useDisclosure } from "@chakra-ui/react";

const IniModal = (props) => {
  const { isOpenModal, onToggleOpen, onToggleClose } = useToggle();
  const [inName, setInName] = React.useState("");
  const [inEmail, setInEmail] = React.useState("");
  const [inPass, setInPass] = React.useState("");
  const [inAvatar, setInAvatar] = React.useState("");
  const [isVisible, setIsVisible] = React.useState(false);
  // const {isOpen, onOpen, onClose} = useDisclosure()

 const onSave = () => {
    console.log(inName, inEmail, inPass);
    axios.post(API_URL + '/account', {
        username: inName,
        email: inEmail,
        avatar: inAvatar,
        password: inPass,
        avatar: "URL",
    })
    .then((response) =>{
        console.log("BREEE INI ADD ACCOUNT", response.data);
        onToggleClose()
    })
    .catch((error) => {
        console.log(error);
    })
 }

  return (
    <Modal isOpen={props.isOpen}>
      <ModalOverlay />
      <ModalContent className="iniModalContent">
        <ModalBody className="iniModalBody">
          <FormControl width={"xl"}>
            <FormLabel>Username</FormLabel>
            <Input onChange={(e) => setInName(e.target.value)} height={"50px"} />
            <FormLabel>Email</FormLabel>
            <Input onChange={(e) => setInEmail(e.target.value)} height={"50px"} />
            <FormLabel>Photo</FormLabel>
            <Input onChange={(e) => setInAvatar(e.target.value)} height={"50px"} />
            <FormLabel>Password</FormLabel>
            <InputGroup>
            <Input onChange={(e) => setInPass(e.target.value)} height={"50px"} />

            </InputGroup>
          </FormControl>
          <Button
            width={"xl"}
            height={"50px"}
            colorScheme="red"
            className="iniButton"
            type="button"
            onClick={()=>{ props.onClose(); onSave();
            }}
          >
            Save
          </Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default IniModal;

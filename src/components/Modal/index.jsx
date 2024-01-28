import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Image,
  Input,
  InputGroup,
  InputRightAddon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
} from "@chakra-ui/react";
import useToggle from "../../hooks/useToggle";
import React, { useEffect } from "react";
import "./modal.css";
import axios from "axios";
import { API_URL } from "../../helper";
import { useDisclosure } from "@chakra-ui/react";
import Isi from "../Isi";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";


const IniModal = (props) => {
  const { isOpenModal, onToggleOpen, onToggleClose } = useToggle();
  const [inName, setInName] = React.useState("");
  const [inEmail, setInEmail] = React.useState("");
  const [inPass, setInPass] = React.useState("");
  // const iniDataNama = useSelector((state) => state.accountReducer.username);
  // const iniDataEmail = useSelector((state) => state.accountReducer.email);
  // const iniDataPassword = useSelector((state) => state.accountReducer.password);
  // const [inAvatar, setInAvatar] = React.useState("");
  const [isVisible, setIsVisible] = React.useState(false);
  const [account, setAccount] = React.useState([]);

  const handleNameChange = (e) => setInName(e.target.value);
  const handleEmailChange = (e) => setInEmail(e.target.value);
  const handlePasswordChange = (e) => setInPass(e.target.value);
  const [errorName, setErrorName] = React.useState(false);
  const [errorEmail, setErrorEmail] = React.useState(false);

  // const {isOpen, onOpen, onClose} = useDisclosure()

  const getAccount = () => {
    axios
      .get(API_URL + "/user/login")
      .then((response) => {
        setAccount(response.data);
        // console.log(account.findIndex((val) => val.username == inName));
        // console.log(account.findIndex((val) => val.email == inEmail));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  React.useEffect(() => {
    getAccount();
  }, [inName, inEmail, inPass]);

  const isErrorName = !inName.length >= 3 || inName.length >= 30;
  const isErrorEmail = inEmail.length >= 30;
  const isErrorPass = inPass.length >= 20;

  React.useEffect(() => {
    setErrorName(false);
  }, [inName]);

  React.useEffect(() => {
    setErrorEmail(false);
  }, [inEmail]);

  const onSave = () => {
    setErrorName(account.findIndex((val) => val.username == inName) >= 0) ||
      inName.length === 0;
    setErrorEmail(account.findIndex((val) => val.email == inEmail) >= 0) ||
      inEmail.length === 0;

    if (
      inName &&
      inEmail &&
      inPass &&
      !errorName &&
      !errorEmail &&
      setErrorName(account.findIndex((val) => val.username == inName) >= 0) &&
      setErrorEmail(account.findIndex((val) => val.email == inEmail) >= 0) &&
      !isErrorPass
    ) {
      props.onClose();
      // console.log("find character bree",inAvatar);
      console.log(inName, inEmail, inPass);
      axios
        .post(API_URL + "/account", {
          username: inName,
          email: inEmail,
          avatar: `/assets/Avatar/${inName.charAt(0).toLowerCase()}.png`,
          password: inPass,
        })
        .then((response) => {
          console.log("BREEE INI ADD ACCOUNT", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (
      errorName ||
      errorEmail ||
      isErrorPass ||
      setErrorName(account.findIndex((val) => val.username == inName) >= 0) ||
      setErrorEmail(account.findIndex((val) => val.email == inEmail) >= 0)
    ) {
      alert("Form data not true");
    } else if(!inName ||
      !inEmail ||
      !inPass){
      alert("Fill in all form data");
    }else{
      alert("Form data not true");
    }
  };

  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <ModalOverlay />
      <ModalContent className="iniModalContent">
        <ModalBody className="iniModalBody">
          <FormLabel
            display={"flex"}
            position={"absolute"}
            top={"10px"}
            bottom={"12px"}
            zIndex={"10"}
            alignItems={"center"}
            width={"40px"}
            height={"40px"}
            marginBottom={"5%"}
            right={"12%"}
            marginRight={"100%"}
            justifyContent={"flex-start"}
          >
            <ModalCloseButton
              position={"absolute"}
              display={"flex"}
              justifyContent={"center"}
              top={"0px"}
              borderRadius={"100px"}
              width={"50px"}
              height={"50px"}
            />
          </FormLabel>
          <Image
            src="zocio.png"
            position={"absolute"}
            right={"45%"}
            top={"0px"}
            width={"60px"}
            height={"60px"}
          />
          <FormLabel marginTop={"10%"} fontSize={"50px"}>
            Create account
          </FormLabel>
          <FormControl
            isInvalid={errorName || isErrorName}
            isRequired
            width={"xl"}
            height={"ms"}
          >
            <FormLabel>Username</FormLabel>
            <Input type="text" onChange={handleNameChange} height={"50px"} />
            {errorName || isErrorName ? (
              inName.length >= 30 ? (
                <FormErrorMessage>Username is over.</FormErrorMessage>
              ) : (
                <FormErrorMessage>Username is use.</FormErrorMessage>
              )
            ) : inName ? (
              ""
            ) : (
              <FormHelperText>
                Enter the username you'd like to use.
              </FormHelperText>
            )}
          </FormControl>
          <FormControl
            isInvalid={errorEmail || isErrorEmail}
            isRequired
            width={"xl"}
            height={"ms"}
          >
            <FormLabel>Email</FormLabel>
            <Input onChange={handleEmailChange} height={"50px"} type="email" />
            {errorEmail || isErrorEmail ? (
              inEmail.length >= 30 ? (
                <FormErrorMessage>Email is over.</FormErrorMessage>
              ) : (
                <FormErrorMessage>Email is use.</FormErrorMessage>
              )
            ) : inEmail ? (
              ""
            ) : (
              <FormHelperText>Enter the email you've to use.</FormHelperText>
            )}
          </FormControl>
          <FormControl
            isInvalid={isErrorPass}
            isRequired
            width={"xl"}
            height={"ms"}
          >
            <FormLabel>Password</FormLabel>
            <InputGroup className="inputGroup" display={"flex"} height={"55px"}>
              <Input
                onChange={handlePasswordChange}
                height={"50px"}
                type={isVisible ? "text" : "password"}
              />
              <InputRightAddon
                onClick={() => setIsVisible(!isVisible)}
                cursor={"pointer"}
                width={"50px"}
                height={"50px"}
              >
                {isVisible ? (
                  <AiOutlineEyeInvisible display={"flex"} height={"60px"} />
                ) : (
                  <AiOutlineEye height={"60px"} />
                )}
              </InputRightAddon>
            </InputGroup>
            {isErrorPass ? (
              <FormErrorMessage>Password is over.</FormErrorMessage>
            ) : inPass ? (
              ""
            ) : (
              <FormHelperText>
                Enter the password you'd like to use.
              </FormHelperText>
            )}
          </FormControl>
          <Button
            width={"xl"}
            height={"50px"}
            colorScheme="red"
            className="iniButton"
            marginBottom={"80px"}
            type="button"
            onClick={() => {
              // props.onClose();
              onSave();
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

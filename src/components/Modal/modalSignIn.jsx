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
  import { useNavigate } from "react-router-dom";
  import { useDispatch, useSelector } from "react-redux";
  import { loginAction } from "../../redux/action/accountAction";
  
  const IniModalSignIn = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const iniDataNama = useSelector((state) => state.accountReducer.username);
    const iniDataEmail = useSelector((state) => state.accountReducer.email);
    const iniDataPassword = useSelector((state) => state.accountReducer.password);
    const [inName, setInName] = React.useState("");
    const [inEmail, setInEmail] = React.useState("");
    const [inPass, setInPass] = React.useState("");
    const [inAvatar, setInAvatar] = React.useState("");
    const [isVisible, setIsVisible] = React.useState(false);
    const [account, setAccount] = React.useState([]);
    const [errorName, setErrorName] = React.useState(false)
  
    const isErrorNama = inName.length >= 30;
    const isErrorEmail = inEmail.length >= 30;
    const isErrorPass = inPass.length >= 20;
    // const {isOpen, onOpen, onClose} = useDisclosure()
  
    const onLogin = () => {
      axios.get(API_URL + `/account?username=${inName}&password=${inPass}`)
        .then((response) => {
          if (!response.data.length||isErrorNama||isErrorPass) {
            alert("Akun salah. Mohon isi Dengan baik");
            setErrorName(true)
          } else {
            setErrorName(false)
            localStorage.setItem("SINI-BREE", JSON.stringify(response.data[0]));
            dispatch(loginAction(response.data[0]));
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };
  
    React.useEffect(() => {
      setErrorName(false);
    }, [inName]);
  
  
    useEffect(() => {
      if (iniDataNama || (iniDataEmail && iniDataPassword)) {
        // console.log("INI DATA WOIII", inName, inEmail, inPass);
        navigate("/kemana");
      }
    }, [
      () => {
        iniDataNama;
        iniDataEmail;
        iniDataPassword;
      },
    ]);
  
    return (
      <Modal isOpen={props.isOpenn} onClose={props.onClosee}>
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
              Sign in
            </FormLabel>
            <FormControl
              isInvalid={errorName || isErrorEmail}
              isRequired
              width={"xl"}
              height={"ms"}
            >
              <FormLabel>Username/Email</FormLabel>
              <Input
                type="text"
                onChange={(e) => {
                  setInName(e.target.value);
                  setInEmail(e.target.value);
                }}
                height={"50px"}
              />
              {errorName||isErrorEmail ? (
                <FormErrorMessage>Data wrong.</FormErrorMessage>
              ) : (
                inName||inEmail? "":
                <FormHelperText>Enter the username you've.</FormHelperText>
              )}
            </FormControl>
            {/* <FormLabel>Email</FormLabel>
                <Input
                  onChange={(e) => setInEmail(e.target.value)}
                  height={"50px"}
                  type="email"
                />
                {isError ? (
                  <FormErrorMessage>Email is required.</FormErrorMessage>
                ) : (
                  <FormHelperText>
                    Enter the email you've to use.
                  </FormHelperText>
                )} */}
            <FormControl isInvalid={isErrorPass} isRequired width={"xl"} height={"ms"}>
              <FormLabel>Password</FormLabel>
              <InputGroup className="inputGroup" display={"flex"} height={"55px"}>
                <Input
                  onChange={(e) => setInPass(e.target.value)}
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
              ) : (
                inPass? "":
                <FormHelperText>Enter the password you've.</FormHelperText>
              )}
            </FormControl>
            <Button
              width={"xl"}
              height={"50px"}
              colorScheme="red"
              className="iniButton"
              marginBottom={"80px"}
              type="button"
              onClick={onLogin}
            >
              Login
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    );
  };
  
  export default IniModalSignIn;
  
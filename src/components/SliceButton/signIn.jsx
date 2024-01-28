import { useDisclosure } from "@chakra-ui/react";
import Isi from "../Isi";
import IniModalSignIn from "../Modal/modalSignIn";
import TextNya from "../TextKu";

const SignIn = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Isi onClick={onOpen} class="boxSignIn">
      <IniModalSignIn isOpenn={isOpen} onClosee={onClose}></IniModalSignIn>
      <TextNya class="iniSignIn">Sign in</TextNya>
    </Isi>
  );
};

export default SignIn;

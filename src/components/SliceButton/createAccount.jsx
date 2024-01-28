import { useDisclosure } from "@chakra-ui/react";
import Isi from "../Isi"
import IniModal from "../Modal"
import TextNya from "../TextKu"

const CreateAccount =() => {
  const { isOpen, onOpen, onClose } = useDisclosure();

    return<Isi onClick={onOpen} class="boxCreateAccount">
    <IniModal isOpen={isOpen} onClose={onClose}></IniModal>
    <TextNya class="iniCreateAcc">Create account</TextNya>
  </Isi>
}

export default CreateAccount
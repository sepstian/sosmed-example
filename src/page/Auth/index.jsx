import { Image, useDisclosure } from "@chakra-ui/react";
import Rangkap from "../../components/Body";
import Isi from "../../components/Isi";
import "./auth.css";
import { BsApple } from "react-icons/bs";
import { BiLogoApple } from "react-icons/bi";
import TextNya from "../../components/TextKu";
import Angker from "../../components/Angker";
import IniModal from "../../components/Modal";

function AuthPage() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Rangkap class="dasar">
      <IniModal isOpen={isOpen} onClose={onClose}></IniModal>
      <Rangkap class="body">
        <Rangkap class="navLogo">
          <Image src="Zocio.png" />
        </Rangkap>
        <Rangkap class="navLogin">
          <Rangkap class="bungkusLog">
            <Isi class="h1">Happening now</Isi>
            <Isi class="joinToday">Join today.</Isi>
            <Rangkap class="signLog">
              {/* <Isi class="boxMail">
                <Isi class="profil" />
                <Isi class="namail">
                  <Isi class="namail1">
                    <TextNya class="iniSignUpGoogle">Sign in as Orang</TextNya>
                  </Isi>
                  <Isi class="namail2">
                    <TextNya class="iniGmailnya">orang@gmail.com</TextNya>
                  </Isi>
                </Isi>
                <Isi class="gmailLogo" />
              </Isi> */}
              <Isi class="boxMail">
                <Isi class="iconMail">
                  {/* <BiLogoApple size={"sm"} /> */}
                  <Isi class="gmailLogo" />
                </Isi>
                <Isi class="namGoogle">Sign up with Google</Isi>
              </Isi>
              <Isi class="boxApple">
                <Isi class="iconApple">
                  <BiLogoApple size={"sm"} />
                </Isi>
                <Isi class="namapple">Sign up with Apple</Isi>
              </Isi>
              <Isi class="boxOr">
                <Isi class="iniStrip" />
                <TextNya class="or">or</TextNya>
                <Isi class="iniStrip" />
              </Isi>
              <div onClick={onOpen} class="boxCreateAccount">
                <TextNya class="iniCreateAcc">Create account</TextNya>
              </div>
              <Isi class="boxCaption">
                <TextNya class="caption">
                  By signing up, you agree to the{" "}
                  <Angker class="linkKata">Terms of Service</Angker> and{" "}
                  <Angker class="linkKata">Privacy Policy</Angker> , including{" "}
                  <Angker class="linkKata">Cookie Use.</Angker>
                </TextNya>
              </Isi>
              <Isi class="boxAlready">
                <TextNya class="already">Already have an account?</TextNya>
              </Isi>
              <Isi class="boxSignIn">
                <TextNya class="iniSignIn">Sign in</TextNya>
              </Isi>
            </Rangkap>
          </Rangkap>
        </Rangkap>
      </Rangkap>
      <Rangkap class="body2">
        <Rangkap class="text">
          <Isi class="linkFooter">About</Isi>
          <Isi class="linkFooter">Download Z app</Isi>
          <Isi class="linkFooter">Help Center</Isi>
          <Isi class="linkFooter">Terms of Servide</Isi>
          <Isi class="linkFooter">Privacy Policy</Isi>
          <Isi class="linkFooter">Cookie Use Policy</Isi>
          <Isi class="linkFooter">Accessibility</Isi>
          <Isi class="linkFooter">Advertising information</Isi>
          <Isi class="linkFooter">Blogs</Isi>
          <Isi class="linkFooter">Status</Isi>
          <Isi class="linkFooter">Career</Isi>
          <Isi class="linkFooter">Brand Resources</Isi>
          <Isi class="linkFooter">Advertising</Isi>
          <Isi class="linkFooter">Marketing</Isi>
        </Rangkap>
        <Rangkap class="text2">
          <Isi class="linkFooter">Z is for Business</Isi>
          <Isi class="linkFooter">Developer</Isi>
          <Isi class="linkFooter">Directory</Isi>
          <Isi class="linkFooter">Arrangement</Isi>
          <Isi>© 2023 Z Corp.</Isi>
        </Rangkap>
      </Rangkap>
      
    </Rangkap>
  );
}

export default AuthPage;

import { Box, Flex, Text, Image, Button, Tabs, Tab, TabList, TabPanel, TabPanels } from "@chakra-ui/react";
import { BiArrowBack } from "react-icons/bi";
import PostCard from "../PostCard";
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { primaryColor } from "../../../public/color";

const UserProfile = () => {
  const posts = useSelector((state) => state.postReducer.post);
  const user = useSelector((state) => state.userReducer.user);
  const username = user ? user.username : ''; // Periksa jika user sudah ada sebelum mengakses username

  const [loadedUser, setLoadedUser] = useState(null);

  useEffect(() => {
    // Ganti URL sesuai dengan API Anda
    axios.get('http://localhost:2023/account')
      .then((response) => {
        setLoadedUser(response.data[0]); // Mengambil data pertama dari array account
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  if (!loadedUser) {
    return <div>Loading...</div>;
  }

  const followingCount = loadedUser.following ? loadedUser.following.length : 0;
  const followersCount = loadedUser.followers ? loadedUser.followers.length : 0;

  return (
    <>
      <Box display="flex" height="50" position="sticky" top="0" mt="2">
        <Box height="30" w="9" h="50" mr="5">
          <BiArrowBack mx="auto" display="flex" />
        </Box>
        <Box>
          <Text>{loadedUser.username}✨</Text>
        </Box>
      </Box>

      <Box ml="3">
        <Box display="flex" flexDirection="row" justifyContent="space-between">
          <Box mt="3">
            <Image src={loadedUser.avatar} w="100px" h="100px" mb="3" borderRadius="50%" />
          </Box>
          <Button m="auto 0" bgColor={primaryColor} color={'white'}>Edit Profile</Button>
        </Box>

        <Box>
          <Text>{loadedUser.username}✨</Text>
          <Text mb="3">{loadedUser.email}</Text>
          <Text>{loadedUser.bio}</Text>

          <Flex mt="3">
            <Text mr="3">Born {loadedUser.birthdate}</Text>
            <Text>Joined {loadedUser.joinDate}</Text>
          </Flex>

          <Flex mb="3" mt="2">
            <Text mr="7" fontSize={"small"}>{followingCount} Following</Text>
            <Text fontSize={"small"}>{followersCount} Followers</Text>
          </Flex>

          <Flex mt="7">
            <Tabs>
              <TabList>
                <Tab>Posts</Tab>
                <Tab>Likes</Tab>
                <Tab>Media</Tab>
              </TabList>

              <TabPanels>
                <TabPanel>
                {posts.filter((post) => post.capt) // Filter post yang memiliki teks
                  .map((post) => (<PostCard key={post.id} text={post.capt} />))}

                </TabPanel>

                <TabPanel>
                  <Text>Likes</Text>
                </TabPanel>

                <TabPanel>
                  <Text>Media</Text>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default UserProfile;

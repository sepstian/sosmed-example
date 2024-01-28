/* eslint-disable react/no-unknown-property */
import { Avatar, Box, Button, Container, Flex, Grid, GridItem, HStack, Heading, Image, Popover, PopoverContent, PopoverTrigger, Stack, StackDivider, Tab, TabList, TabPanel, TabPanels, Tabs, Text, Textarea, VStack } from "@chakra-ui/react";
import { primaryColor, secondaryColor, bgColor, secTextColor, secondBgColor } from "../../../public/color";
import { IoPersonAdd } from "react-icons/io5"
import { BsCardImage, BsMic, BsEmojiSmile } from "react-icons/bs"
import LayoutTimeline from "../../component/LayoutTimeline";
import Header from "../../component/Header";
import AvatarNav from "../../component/AvatarNav";
import SideNav from "../../component/SideNav";
import PostCard from "../../component/PostCard";
import PostInput from "../../component/PostInput";
import FollowCard from "../../component/FollowCard";
import { useSelector } from "react-redux";
import UserProfile from "../../component/UserProfile";

const TimelinePage = () => {
    const globalPost = useSelector((state) => state.postReducer.post);
    const showPosCard = () => {
        if (globalPost.length > 0) {
            return globalPost.map((post, idx) => {
                if (idx > 0) return <PostCard key={post.id} text={post.capt} />
            })
        }
    };

    return <>
        <LayoutTimeline>
            <Header>
                <AvatarNav />
            </Header>
            <Flex minH={'90vh'} w={'100%'} mt={'80px'} >
                <Tabs display={'flex'} flex={'1'} variant={'unstyled'} colorScheme="orange">
                    <Flex flex={'1'} flexDirection={'row'}>
                        <SideNav/>
                        {/* POST */}
                        <Box ml={'380px'} boxShadow={'xl'} p={'10px 25px'} flexDirection={'column'} w={'100%'}>
                            <TabPanels>
                                <TabPanel p={'0'}  >
                                    <PostInput/>
                                    {/* <PostCard /> */}
                                    {showPosCard()}
                                </TabPanel>
                                <TabPanel>
                                    <Text>Notification</Text>
                                </TabPanel>
                                <TabPanel>
                                    <Text>Message</Text>
                                </TabPanel>
                                <TabPanel>
                                    <UserProfile/>
                                </TabPanel>
                                
                            </TabPanels>
                        </Box>
                    </Flex>
                </Tabs>
                <FollowCard/>
            </Flex>
        </LayoutTimeline>
    </>
};

export default TimelinePage;
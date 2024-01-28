import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Text } from '@chakra-ui/react'; // Pastikan Anda telah mengimpor komponen yang sesuai

const Home = () => {
  // Dapatkan informasi pengguna yang saat ini masuk
  const currentUser = useSelector((state) => state.auth.currentUser);

  // Dapatkan daftar postingan dari Redux store
  const posts = useSelector((state) => state.postReducer.post);

  // Filter postingan hanya yang dibuat oleh pengguna saat ini
  const userPosts = posts.filter((post) => post.userId === currentUser.id);

  return (
    <Box>
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        Home
      </Text>
      <Box>
        {userPosts.map((post, index) => (
          <Box
            key={index}
            bg="white"
            p={4}
            mb={4}
            borderRadius="md"
            boxShadow="md"
          >
            <Text>{post.capt}</Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Home;

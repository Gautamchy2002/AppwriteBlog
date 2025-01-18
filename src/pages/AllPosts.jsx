import React, { useState, useEffect } from 'react';
import { Container, PostCard } from '../components';
import appwriteService from '../appwrite/config';

function AllPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  return (
    <div className="w-full py-8 bg-gray-50 min-h-screen flex flex-col">
      <Container className="flex-grow">
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div
              key={post.$id}
              className="p-2 w-1/4 flex items-stretch" // Ensures consistent layout
            >
              <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col h-full w-full">
                <PostCard {...post} />
              </div>
            </div>
          ))}
        </div>
      </Container>
    
    </div>
  );
}

export default AllPosts;
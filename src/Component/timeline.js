import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

function TimelineComponent() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    if (isAuthenticated) {
      // Fetch timeline tweets for the authenticated user
      axios.get('/api/tweets/timeline')
        .then((response) => {
          setTweets(response.data);
        })
        .catch((error) => {
          // Handle error, e.g., show error message
        });
    }
  }, [isAuthenticated]);

  return (
    <div>
      <h2>Timeline</h2>
      {tweets.map((tweet) => (
        <div key={tweet._id}>
          <p>{tweet.content}</p>
          <p>Author: {tweet.author.username}</p>
        </div>
      ))}
    </div>
  );
}

export default TimelineComponent;

// src/components/UserProfile.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UserProfile({ match }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUserProfile() {
      try {
        const response = await axios.get(`/api/users/${match.params.username}`);
        setUser(response.data);
      } catch (error) {
        // Handle error, e.g., display error message
        console.error(error);
      }
    }

    fetchUserProfile();
  }, [match.params.username]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>User Profile</h2>
      <p>Username: {user.username}</p>
      {/* Display additional user profile information */}
    </div>
  );
}

export default UserProfile;

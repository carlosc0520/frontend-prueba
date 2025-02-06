import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import settings from "../config/settings";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f2f5;
`;

const ProfileCard = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  text-align: center;
`;

const Heading = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
  color: #333;
`;

const Paragraph = styled.p`
  font-size: 16px;
  color: #666;
`;

const LoadingMessage = styled.p`
  font-size: 18px;
  color: #999;
`;

const Profile = () => {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const validateToken = async () => {
      const token = localStorage.getItem("access_token");
      if (!token) {
        window.location.href = "/login";
      }

      try {
        const response = await axios.get(`${settings.API_URL}/auth/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProfileData(response.data);
      } catch (error) {
        window.location.href = "/login";
      }
    };

    validateToken();
  }, []);

  return (
    <Container>
      <ProfileCard>
        {profileData ? (
          <>
            <Heading>Bienvenido, {profileData.username}</Heading>
            <Paragraph>{profileData.message}</Paragraph>

            <button
              style={{ marginTop: "20px" }}
              onClick={() => {
                localStorage.removeItem("access_token");
                window.location.href = "/login";
              }}
            >
              Cerrar sesión
            </button>
          </>
        ) : (
          <LoadingMessage>Loading...</LoadingMessage>
        )}
      </ProfileCard>
    </Container>
  );
};

export default Profile;

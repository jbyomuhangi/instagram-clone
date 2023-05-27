import { Box, styled } from "@mui/material";
import React from "react";

import { useAppSelector } from "@/hooks/reduxHooks";
import { selectUserStoriesIds } from "@/reducers/dataReducer";
import StoryButton from "./StoryButton";

const StorySectionContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
}));

const Body = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "100%",
  maxWidth: "400px",
  gap: theme.spacing(1),
  backgroundColor: theme.palette.common.white,
  border: `1px solid ${theme.palette.border.main}`,
  borderRadius: "5px",
  padding: theme.spacing(1),
  overflow: "auto",
}));

const StorySection: React.FC = () => {
  const userStoriesIds = useAppSelector(selectUserStoriesIds);

  return (
    <StorySectionContainer>
      <Body className="hide-scrollbar">
        {userStoriesIds.map((userId) => {
          return <StoryButton key={userId} userId={userId} />;
        })}
      </Body>
    </StorySectionContainer>
  );
};

export default StorySection;

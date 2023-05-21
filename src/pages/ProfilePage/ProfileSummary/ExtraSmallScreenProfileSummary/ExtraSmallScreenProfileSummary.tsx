import { Box, styled, Typography } from "@mui/material";
import React from "react";

import UserAvatar from "@/components/UserAvatar";

const ExtraSmallScreenProfileSummaryContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),
  padding: theme.spacing(3),
}));

const SummaryContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
}));

const ExtraSmallScreenProfileSummary: React.FC = () => {
  return (
    <ExtraSmallScreenProfileSummaryContainer>
      <SummaryContainer>
        <UserAvatar sx={{ height: "75px", width: "75px" }} />
        <Typography>username</Typography>
      </SummaryContainer>

      <Typography sx={{ fontWeight: "bold" }}>full name</Typography>
    </ExtraSmallScreenProfileSummaryContainer>
  );
};

export default ExtraSmallScreenProfileSummary;

import { SxProps, Typography, styled } from "@mui/material";
import React from "react";

const UserInfoContainer = styled(Typography)(() => ({
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  wordBreak: "break-word",
}));

type TextPreviewProps = {
  children: React.ReactNode;
  lineClamp?: number;
  sx?: SxProps;
};

const TextPreview: React.FC<TextPreviewProps> = ({
  children,
  lineClamp = 1,
  sx,
}) => {
  return (
    <UserInfoContainer sx={{ WebkitLineClamp: lineClamp, ...sx }}>
      {children}
    </UserInfoContainer>
  );
};

export default TextPreview;

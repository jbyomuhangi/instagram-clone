import { Typography, styled } from "@mui/material";
import React from "react";

const UserInfoContainer = styled(Typography)(() => ({
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
}));

type RequiredProps = {
  children: React.ReactNode;
};

type DefaultProps = { lineClamp?: number };

const TextPreview: React.FC<RequiredProps & DefaultProps> = ({
  children,
  lineClamp,
}) => {
  return (
    <UserInfoContainer sx={{ WebkitLineClamp: lineClamp }}>
      {children}
    </UserInfoContainer>
  );
};

TextPreview.defaultProps = { lineClamp: 1 } as DefaultProps;

export default TextPreview;

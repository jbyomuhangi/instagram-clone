import {
  Theme,
  Typography,
  TypographyProps,
  styled,
  useMediaQuery,
} from "@mui/material";
import React from "react";

import { empty, returnNull } from "@/utils/noopUtils";

const NavBarButtonContainer = styled("button")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  borderRadius: "10px",
  padding: `${theme.spacing(1)} 0px`,
  ":hover": {
    backgroundColor: theme.palette.grey[100],
  },

  [theme.breakpoints.down("md")]: {
    justifyContent: "center",
  },
}));

type NavBarButtonProps = {
  label?: string;
  isActive?: boolean;
  TypographyProps?: TypographyProps;
  IconRenderer?: React.FC;
  onClick?: () => void;
};

const NavBarButton: React.FC<NavBarButtonProps> = ({
  label,
  isActive,
  TypographyProps = {},
  IconRenderer = returnNull,
  onClick = empty,
}) => {
  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );

  const { sx, ...otherTypographyProps } = TypographyProps;

  return (
    <NavBarButtonContainer onClick={onClick}>
      <IconRenderer />

      {!isSmallScreen && (
        <Typography
          sx={{
            fontSize: "1.25rem",
            fontWeight: isActive ? "bold" : "unset",
            ...sx,
          }}
          {...otherTypographyProps}
        >
          {label}
        </Typography>
      )}
    </NavBarButtonContainer>
  );
};

export default NavBarButton;

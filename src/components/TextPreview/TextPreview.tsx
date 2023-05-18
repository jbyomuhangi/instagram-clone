import { Box, SxProps, Typography, styled } from "@mui/material";
import React, { useState } from "react";

import useDebounce from "@/hooks/useDebounce";
import useResizeObserver from "@/hooks/useResizeObserver";

const UserInfoContainer = styled(Typography)(() => ({
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  wordBreak: "break-word",
}));

const MoreButton = styled(Typography)(() => ({
  fontSize: "0.85rem",
  opacity: "70%",

  ":hover": {
    opacity: "50%",
  },
}));

type TextPreviewProps = {
  children: React.ReactNode;
  lineClamp?: number;
  sx?: SxProps;
  isExpandable?: boolean;
};

const TextPreview: React.FC<TextPreviewProps> = ({
  children,
  lineClamp = 1,
  sx = {},
  isExpandable = false,
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [hasOverflow, setHasOverflow] = useState<boolean>(false);

  const onResize = useDebounce((element: HTMLParagraphElement) => {
    const isOverFlown = element.scrollHeight > element.clientHeight;
    setHasOverflow(isOverFlown);
  }, 100);

  const ref = useResizeObserver({
    ignoreResize: !isExpandable || isExpanded,
    callback: onResize,
  });

  const isMoreButtonRendered = isExpandable && !isExpanded && hasOverflow;

  return (
    <Box>
      <UserInfoContainer
        ref={ref}
        sx={{ WebkitLineClamp: isExpanded ? "unset" : lineClamp, ...sx }}
      >
        {children}
      </UserInfoContainer>

      {isMoreButtonRendered && (
        <button onClick={() => setIsExpanded(true)}>
          <MoreButton>more</MoreButton>
        </button>
      )}
    </Box>
  );
};

export default TextPreview;

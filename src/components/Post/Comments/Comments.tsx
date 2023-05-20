import React from "react";
import { Virtuoso } from "react-virtuoso";

import Comment from "./Comment";

type CommentsProps = {
  commentIds: string[];
};

const Comments: React.FC<CommentsProps> = ({ commentIds }) => {
  const itemContent = (_index: number, item: string) => {
    return <Comment commentId={item} />;
  };

  return <Virtuoso data={commentIds} itemContent={itemContent} />;
};

export default Comments;

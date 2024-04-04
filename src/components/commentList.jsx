import React from "react";
import CommentContainer from "./commentsContainer";

const CommentList = ({ info }) => {
  return info?.map((comment, index) => (
    <div>
      <CommentContainer key={index} info={comment} />
      <div className="pl-5 border border-l-black">
        <CommentList info={comment.replies} />
      </div>
    </div>
  ));
};

export default CommentList;

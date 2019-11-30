import React from "react";
import ReactDom from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui containers comments">
      <ApprovalCard>
        <CommentDetail
          author="yonathan"
          timeAgo="Today at 6:00"
          content="Nice work!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Ephrame"
          timeAgo="Today at 4:45"
          content="that is clear writing"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Daniel"
          timeAgo="Today at 3:00"
          content="you did great!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDom.render(<App />, document.querySelector("#root"));

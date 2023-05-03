import React from "react";

const commentsData = [
  {
    name: "Shobhit Pundir",
    text: "Pure motivation and entertainment simple to understand",
    replies: [
      {
        name: "Shobhit Pundir",
        text: "Pure motivation and entertainment simple to understand",
        replies: [
          {
            name: "Shobhit Pundir",
            text: "Pure motivation and entertainment simple to understand",
            replies: [
              {
                name: "Shobhit Pundir",
                text: "Pure motivation and entertainment simple to understand",
                replies: [
                  {
                    name: "Shobhit Pundir",
                    text: "Pure motivation and entertainment simple to understand",
                    replies: [],
                  },
                ],
              },
            ],
          },
          {
            name: "Shobhit Pundir",
            text: "Pure motivation and entertainment simple to understand",
            replies: [],
          },
        ],
      },
      {
        name: "Shobhit Pundir",
        text: "Pure motivation and entertainment simple to understand",
        replies: [],
      },
    ],
  },
  {
    name: "Manoj Goel",
    text: "Pure motivation and entertainment simple to understand",
    replies: [
      {
        name: "Shobhit Pundir",
        text: "Pure motivation and entertainment simple to understand",
        replies: [],
      },
      {
        name: "Shobhit Pundir",
        text: "Pure motivation and entertainment simple to understand",
        replies: [],
      },
    ],
  },
  {
    name: "Shobhit Pundir",
    text: "Pure motivation and entertainment simple to understand",
    replies: [],
  },
  {
    name: "Ajay Kumar",
    text: "Pure motivation and entertainment simple to understand",
    replies: [],
  },
  {
    name: "Shobhit Pundir",
    text: "Pure motivation and entertainment simple to understand",
    replies: [],
  },
  {
    name: "Amit Sharma",
    text: "Pure motivation and entertainment simple to understand",
    replies: [],
  },
  {
    name: "Shobhit Pundir",
    text: "Pure motivation and entertainment simple to understand",
    replies: [],
  },
];

const Comment = ({ data }) => {
  return (
    <div className="flex mt-4">
      <div className="w-11">
        <img
          src="https://yt3.ggpht.com/mG_AkFC_NP_sqV08_2ABPOBqzdE67X0gcUjsaPq6tb1CW5HRmvGkRvquQOVQZwKlfgdKe0RC=s88-c-k-c0x00ffffff-no-rj"
          alt="author"
          width="40"
          height="40"
          className="rounded-full"
        />
      </div>
      <div className="pl-4">
        <h5 className="font-bold">{data.name}</h5>
        <p className="text-sm">{data.text}</p>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="ml-5 border-l border-gray-400 pl-3">
        <CommentList comments={comment.replies} />
      </div>
    </div>
  ));
};


const CommentContainer = () => {
  return (
    <div>
      <h5 className="my-4 font-bold">Comments</h5>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentContainer;

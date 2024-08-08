"use client";

import PostOwnner from "@/components/PostOwnner";
import Comment from "@/components/Comment";
import { comments } from "@/libs/comments";

export default function Home() {
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "#18191A" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px", backgroundColor: "#242526" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm"
      >
        <PostOwnner picture="/profileImages/me.jpg" name="Kritsaran Khuntip 660610740" text="Quiz ง่ายจังเลยครับ ขอยาก ๆ กว่านี้ได้ไหม #261207" like={100}/>
        {/* map-loop render Comment component here */}
        {comments.map((x)=><Comment userImagePath={x.userImagePath} username={x.username} commentText={x.commentText} likeNum={x.likeNum} replies={x.replies}/>)}
      </div>
    </div>
  );
}

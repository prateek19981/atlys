import type { Post } from "./constants/PostEditor.interface";
import { useState, useRef } from "react";
import CameraIcon from "../../assets/video-camera.svg";
import PlusIcon from "../../assets/plus.svg";
import Mic from "../../assets/mic.svg";
import Message from "../../assets/send.svg";
import Smiley from "../../assets/emotion-smile.svg";
import Toolbar from "../MarkDownToolbar/MarkDownToolbar";
import DeleteIcon from "../../assets/trash.svg";

interface User {
  id: string;
  name: string;
  avatar: string;
}

interface PostEditorProps {
  user: User | null;
  onPost: (post: Post) => void;
  onInteraction: () => void;
}

const PostEditor = ({ user, onPost, onInteraction }: PostEditorProps) => {
  const [content, setContent] = useState <string>("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);


  function handleReset()
  {
    setContent("")
  }

  const handleSubmit = () => {
    if (!content.trim() || !user) return;

    const newPost: Post = {
      id: Date.now().toString(),
      user,
      content,
      timestamp: "Just now",
      likes: 0,
      comments: 0,
      shares: 0,
      emoji: "😊",
    };

    onPost(newPost);
    setContent("");
  };

  const handleFocus = () => {
    if (!user) {
      onInteraction();
      return;
    }
  };
  const handleAction = (action: string) => {
    if (!user) {
      onInteraction();
      return;
    }
    alert(`${action} function not implemented`);
  };

  return (
    <div className="relative mb-6 h-[224px] flex flex-col items-center justify-center p-[8px] bg-black/[0.03] rounded-xl">
      <div className="relative bg-white/80 backdrop-blur-sm rounded-xl pt-[10px] shadow-lg border border-black/[0.13] h-fit w-[100%] flex flex-col justify-between">
        {
          <div className="mx-[10px] mb-2 flex items-center justify-between">
            <Toolbar />
            <div className="flex items-center bg-red-500/[0.15] p-[8px] rounded-[10px] cursor-pointer" onClick={handleReset}>
              <img alt="trash" src={DeleteIcon} width={16} height={16} />
            </div>
          </div>
        }
        <div className="flex items-start space-x-3 mx-[10px] flex-1">
          <img src={Smiley} width={25} height={25} className="mb-1 mt-[12px]" />

          <div className="flex-1">
            <textarea
              ref={textareaRef}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              onFocus={handleFocus}
              placeholder="How are you feeling today?"
              className="p-[8px] w-full resize-none border-0 text-gray-700 placeholder-gray-500 text-lg bg-transparent h-[120px] focus:outline-none"
            />
          </div>
        </div>

        <div
          id="footer"
          className="border border-t-1 w-[100%] rounded-b-xl border-[#D9D9D9] flex justify-between p-[8px]"
        >
          <div className="flex gap-[16px]">
            <div className="h-[30px] w-[30px] flex justify-center items-center bg-[#0000000F] rounded-[10px]">
              <img
                src={PlusIcon}
                className="cursor-pointer"
                onClick={() => handleAction("Add attachment")}
              />
            </div>
            <img
              src={Mic}
              className="cursor-pointer"
              onClick={() => handleAction("Voice message")}
            />
            <img
              src={CameraIcon}
              className="cursor-pointer"
              onClick={() => handleAction("Video")}
            />
          </div>
          <div className="cursor-pointer" onClick={handleSubmit}>
            <img src={Message} height={24} width={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostEditor;

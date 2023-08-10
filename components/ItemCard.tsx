"use client"

import { PostType } from "@/types/types";
import { useRouter } from "next/navigation";
import { HiTrash } from "react-icons/hi";

interface ItemCardProps {
  post: PostType;
}

const ItemCard: React.FC<ItemCardProps> = ({ post }) => {

  const router = useRouter();

  const onClick = async () => {

    try {
      const res = await fetch(`http://localhost:3000/api/get`, {
        method: "DELETE",
        body: JSON.stringify(post)
      });
      
      router.refresh();

    } catch (error) {
      throw new Error("INVALID");
    }
  };

  return (
    <div className="lg:relative group flex flex-col rounded-md items-center overflow-hidden bg-neutral-400/20 transition shadow-lg shadow-black lg:h-[40vh] h-[50vh]">
        <div className="h-fit py-4 bg-green-500 w-full text-2xl font-semibold">
          {post.title}
          <div onClick={onClick} className="absolute top-5 left-3 hover:cursor-pointer">
            <HiTrash />        
          </div>
        </div>
        
        <div className="py-10">
          {post.content}
        </div>
    </div>
  );
};

export default ItemCard;

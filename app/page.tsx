import PopComponent from "@/components/AddForm";
import Button from "@/components/Button";
import ItemListing from "@/components/ItemListing";
import { PostType } from "@/types/types";
import { HiPlus } from "react-icons/hi";

interface Props {
  post: PostType[];
}

async function getPosts() {
  const res = await fetch(`${process.env.BASE_URL}/api/get`, {
    cache: "no-store",
  });

  if (!res.ok) {
    console.log(res);
  }
  return res.json();
}

export default async function Home() {
  const data: PostType[] = await getPosts();
  console.log(data);

  return (
    <div className="py-5 px-10 text-center">
      <div className="p-10 justify-center flex items-center">
        <div className="text-4xl justify-center capitalize font-bold bg-yellow-300 p-4 rounded-full w-[50vh]">
          idea board
        </div>
      </div>
      <ItemListing post={data} />
      <div className="fixed bottom-16 right-[6%] ml-2">
        <Button />
      </div>
    </div>
  );
}

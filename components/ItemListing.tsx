import { PostType } from "@/types/types";
import ItemCard from "./ItemCard";

interface ItemListingProps {
  post: PostType[];
}

const ItemListing: React.FC<ItemListingProps> = ({ post }) => {
  if (post.length === 0) {
    return <div className="mt-4 text-neutral-400">Nothing to be shown yet, add some posts!</div>;
  } 
  else {

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gri-cols-5 2xl:grid-cols-6 gap-4 mt-10">
        {post.map((item) => (
          <ItemCard post={item} />
        ))}
      </div>
    );
  }
};

export default ItemListing;
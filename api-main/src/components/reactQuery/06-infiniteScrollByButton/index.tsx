import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
const InfiniteScroll = () => {
  const fetchPost = async ({ pageParam = 1 }) => {
    return axios.get(
      `http://localhost:3001/items?_limit=10&_page=${pageParam}`
    );
  };
  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ["posts"],
    queryFn: fetchPost,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      if (allPages.length < 5) return allPages.length + 1;
      else return undefined;
    },
  });
  return (
    <div className="p-5 container mx-auto">
      <h1 className="text-2xl font-medium mb-4">Infinite Scroll by button</h1>
      <div>
        {data?.pages.map((page, i) => (
          <div key={i}>
            {page.data.map((item: any) => (
              <div key={item.id} className=" p-2  bg-teal-50">
                <p className="hover:bg-red-50 transition-all duration-300 cursor-pointer p-1">
                  {item.id} - {item.name}
                </p>
              </div>
            ))}
          </div>
        ))}
        <button onClick={() => fetchNextPage()} disabled={!hasNextPage}>
          load more
        </button>
      </div>
    </div>
  );
};

export default InfiniteScroll;

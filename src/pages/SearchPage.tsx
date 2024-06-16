import { useSearchRestaurant } from "@/api/RestaurantSearchApi";
import SearchResultCard from "@/components/SearchResultCard";
import SearchResultInfo from "@/components/SearchResultInfo";
import { useParams } from "react-router-dom";

export default function SearchPage() {
  const { city } = useParams();
  const { results, isLoading } = useSearchRestaurant(city);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (!results?.data || !city) {
    return <span>No results found</span>;
  }

  return (
    <div className='grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-5'>
      <div id='cuisines-list'>Insert cuisines here :)</div>
      <div id='main-content' className='flex flex-col gap-5'>
        <SearchResultInfo city={city} total={results.pagination.total} />
        {results.data.map((restaurant, index) => (
          <SearchResultCard key={index} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
}

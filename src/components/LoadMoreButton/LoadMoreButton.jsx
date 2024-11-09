import { useDispatch, useSelector } from "react-redux";
import { fetchMoreCampers } from "../../redux/campersSlice.js";

function LoadMoreButton() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.campers.status);

  const handleLoadMore = () => {
    if (status !== "loading") {
      dispatch(fetchMoreCampers());
    }
  };

  return (
    <button
      onClick={handleLoadMore}
      className="load-more-button"
      disabled={status === "loading"}
    >
      {status === "loading" ? "Loading..." : "Load More"}
    </button>
  );
}

export default LoadMoreButton;

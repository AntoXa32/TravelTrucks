import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../../redux/campersSlice.js";
import CatalogFilters from "../../components/CatalogFilter/CatalogFilter.jsx";
import CamperCard from "../../components/CamperCard/CamperCard.jsx";
import LoadMoreButton from "../../components/LoadMoreButton/LoadMoreButton.jsx";
import { useEffect } from "react";

function CatalogPage() {
  const dispatch = useDispatch();
  const campers = useSelector((state) => state.campers.items);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <div>
      <CatalogFilters />
      <div className="camper-list">
        {Array.isArray(campers) && campers.length > 0 ? (
          campers.map((camper) => (
            <CamperCard key={camper.id} camper={camper} />
          ))
        ) : (
          <p>No campers available</p>
        )}
      </div>
      <LoadMoreButton />
    </div>
  );
}

export default CatalogPage;

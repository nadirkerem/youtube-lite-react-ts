import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../features/hooks";

export default function Video() {
  const [showMore, setShowMore] = useState(false);
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const currentPlaying = useAppSelector(
    (state) => state.youtube.currentPlaying
  );
  const recommendedVideos = useAppSelector(
    (state) => state.youtube.recommendedVideos
  );

  useEffect(() => {
    if (id) {
      dispatch(getVideoDetails(id));
      setShowMore(false);
    } else {
      navigate("/");
    }
  }, [id, navigate, dispatch]);

  useEffect(() => {
    if (currentPlaying && id) {
      dispatch(getRecommendedVideos(id));
    }
  }, [id, currentPlaying, dispatch]);

  return <div>Video</div>;
}

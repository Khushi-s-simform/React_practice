import { useState, useOptimistic, startTransition } from "react";

function LikeButton() {
  const [liked, setLiked] = useState(false);
  const [optimisticLiked, setOptimisticLiked] = useOptimistic(liked);

  function handleClick() {
    startTransition(async () => {
      // optimistic update
      setOptimisticLiked(!optimisticLiked);

      // simulate API
      await new Promise(res => setTimeout(res, 1000));

      // real update
      setLiked(prev => !prev);
    });
  }

  return (
    <button onClick={handleClick}>
      {optimisticLiked ? "❤️ Liked" : "🤍 Like"}
    </button>
  );
}

export default LikeButton;
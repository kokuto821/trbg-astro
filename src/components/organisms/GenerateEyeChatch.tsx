import { useEffect, useState } from "react";
import type { WordPressMedia } from "../../types/type";

type Props = {
  featuredMediaId: number;
};

export const GernateEyeCatch = ({ featuredMediaId }: Props) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    if (!featuredMediaId) return;
    fetch(
      `https://kokutoweb.littlestar.jp/portfolio/trbg/wp-json/wp/v2/media/${featuredMediaId}`
    )
      .then((res) => res.json())
      .then((data: WordPressMedia) => {
        setImageUrl(
          data.media_details?.sizes?.full?.source_url ?? data.source_url
        );
      });
  }, [featuredMediaId]);

  if (!imageUrl) return <div>noimage</div>;

  return (
    <img src={imageUrl} alt="アイキャッチ画像" className="eye-catch__img" />
  );
};

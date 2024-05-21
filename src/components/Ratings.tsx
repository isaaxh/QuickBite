import React from "react";
import { Rating } from "react-native-ratings";
import { COLORS } from "@/constants/Colors";

type RatingsProps = {
  rating: number;
  iconSize?: number;
};

const Ratings = ({ rating, iconSize }: RatingsProps) => {
  return (
    <Rating
      type="custom"
      ratingCount={5}
      readonly
      fractions={1}
      startingValue={rating}
      ratingColor={COLORS.yellow}
      imageSize={iconSize ?? 18}
    />
  );
};

export default Ratings;

import React from "react";
import { Rating } from "react-native-ratings";
import { COLORS } from "@/constants/Colors";

type ResturantRatingProps = { rating: number };

const ResturantRating = ({ rating }: ResturantRatingProps) => {
  return (
    <Rating
      type="custom"
      ratingCount={5}
      readonly
      fractions={1}
      startingValue={rating}
      ratingColor={COLORS.yellow}
      imageSize={18}
    />
  );
};

export default ResturantRating;

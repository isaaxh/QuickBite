import React from "react";
import { Rating } from "react-native-ratings";
import { COLORS } from "@/constants/Colors";

const Ratings = ({ rating }: { rating: number }) => {
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

export default Ratings;

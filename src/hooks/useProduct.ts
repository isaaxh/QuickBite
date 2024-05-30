import { IProduct, IRestaurant, ISection } from "@/utils/types";
import { useResturantContext } from "./useResturantContext";

interface UseProductProps {
  id: string;
  sectionId: string;
  resturantId: string;
}

const useProduct = ({ id, sectionId, resturantId }: UseProductProps) => {
  const RESTURANTS: IRestaurant[] = useResturantContext();
  const resturant: IRestaurant = RESTURANTS.filter(
    (resturant) => resturantId === resturant.id.toString(),
  )[0];
  const section: ISection = resturant.sections.filter(
    (section) => sectionId === section.id.toString(),
  )[0];
  const product: IProduct = section.data.filter(
    (product) => id === product.id.toString(),
  )[0];

  return { resturant, section, product };
};

export default useProduct;

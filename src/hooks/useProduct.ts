import { TProduct, TRestaurant, TSection } from "@/utils/types";
import { useResturantContext } from "./useResturantContext";

interface UseProductProps {
  id: string;
  sectionId: string;
  resturantId: string;
}

const useProduct = ({ id, sectionId, resturantId }: UseProductProps) => {
  const RESTURANTS: TRestaurant[] = useResturantContext() as TRestaurant[];
  const resturant: TRestaurant = RESTURANTS.filter(
    (resturant) => resturantId === resturant.id.toString(),
  )[0];
  const section: TSection = resturant.sections.filter(
    (section) => sectionId === section.id.toString(),
  )[0];
  const product: TProduct = section.data.filter(
    (product) => id === product.id.toString(),
  )[0];

  return { resturant, section, product };
};

export default useProduct;

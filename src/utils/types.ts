export interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  imgUrl: string;
}

export interface ISection {
  id: number;
  title: string;
  data: IProduct[];
}

export interface IRestaurant {
  id: number;
  name: string;
  distance: number;
  rating: number;
  deliveryTime: string;
  imgUrl: string;
  sections: ISection[];
}

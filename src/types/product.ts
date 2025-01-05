export interface IProduct {
  id: number;
  name: string;
  imageUrl?: string;
  price: number;
  description?: string;
  satuan: string;
  category: {
    name: string;
  };
}

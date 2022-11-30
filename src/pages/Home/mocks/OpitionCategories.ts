import { SelectOption } from "../../../models";
import { CategorieModel } from "../../../models/Categorie";

export const categories: CategorieModel[] = [
  {
    id: "1",
    description: "Casa",
    icon: "🏠",
  },
  {
    id: "2",
    description: "Mercado",
    icon: "🍔",
  },
  {
    id: "3",
    description: "Transporte",
    icon: "🚘",
  }
];

export const categoriesOptions: SelectOption[] = categories.map((categories) => ({
  label: categories.description,
  value: categories.id
}));

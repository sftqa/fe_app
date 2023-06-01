import { ProductTagDTO } from "./ProductTagDto";

export type ProductTagsDto = {
    all: ProductTagDTO[];
    audience: ProductTagDTO[];
    dietary: ProductTagDTO[];
    purpose: {
      "Body health": ProductTagDTO[];
      "Mental health": ProductTagDTO[];
      Sports: ProductTagDTO[];
      Beauty: ProductTagDTO[];
      "Weight control": ProductTagDTO[];
    };
  };
  
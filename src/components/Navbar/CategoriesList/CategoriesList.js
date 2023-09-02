import { useCallback } from "react";
import { Link } from "react-router-dom";
import { useNewsProps } from "../../../hooks/useNewsProps";
import { categories } from "../../../const/categories";
import { capitalizeSentence } from "../../../utils/capitalize";

export const CategoriesList = () => {
  const { handlePropCategory } = useNewsProps();

  const handleCategoryNews = useCallback((event, index) => {
    const route = event.target.id;
    handlePropCategory(route);
  }, [handlePropCategory]);

  return (
    <div className="containerCategories">
      {categories
        .sort((a, b) => a.localeCompare(b))
        .map((category, index) => (
          <Link
            key={category}
            id={category}
            onClick={(event) => handleCategoryNews(event, index)}
            to={`/${category}`}
          >
            {capitalizeSentence(category)}
          </Link>
        ))}
    </div>
  );
};

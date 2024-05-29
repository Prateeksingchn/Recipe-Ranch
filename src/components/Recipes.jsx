import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from "./Card";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get('https://picsum.photos/v2/list?page=1&limit=10');
        const data = response.data.map(item => ({
          id: item.id,
          title: item.author,
          image: item.download_url,
          // Add any other properties you need from the API response
        }));
        setRecipes(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div className="">
      <h1 className="text-center text-2xl font-semibold">OUR RECIPES</h1>
      <p className="text-center text-zinc-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, aperiam?
      </p>
      <div className="recipe-cards mt-[5%] flex flex-wrap p-5">
        {isLoading ? (
          <h1 className="w-full text-green-600 text-3xl font-extrabold text-center mt-10">
            Loading...
          </h1>
        ) : recipes.length > 0 ? (
          recipes.map((r) => <Card key={r.id} recipe={r} />)
        ) : (
          <h1 className="w-full text-green-600 text-3xl font-extrabold text-center mt-10">
            No Recipe Found
          </h1>
        )}
      </div>
      <a
        href="/create-recipe"
        className="cursor-pointer rounded-md absolute top-[15%] py-2 px-5 left-[10%] bg-green-200 gap-x-3 flex items-center"
      >
        <i className="text-3xl text-green-600 ri-add-box-line"></i>
        Create Recipe
      </a>
    </div>
  );
};

export default Recipes;
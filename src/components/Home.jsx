import { useEffect, useState } from "react";
const Home = () => {
    const [page, setpage] = useState(1);
    const [images, setimages] = useState([]);

    const getimages = async () => {
        try {
            const { data } = await axios.get(
                `https://picsum.photos/v2/list?page=${page}&limit=10`,
            );
            setimages(data);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="w-full flex justify-between items-center  h-[60vh]">
            <div className="left w-1/2 ">
                <h1 className="text-7xl font-extrabold text-green-600 mt-8">
                    SIMPLE AND TASTY RECIPES
                </h1>
                <p className="text-zinc-400 mt-5 mb-10">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eligendi eos maiores harum doloribus, praesentium alias qui
                    esse id atque sapiente similique quis, velit fugit, nemo
                    unde consectetur voluptatem sequi repellat.
                </p>
                <button className="bg-green-600 text-white py-2 px-5 hover:bg-green-700 duration-200">
                    Get Started &nbsp; &#8594;
                </button>
            </div>
            <img
                className="w-1/2"
                src="https://www.pngall.com/wp-content/uploads/8/Cooking-Recipe-PNG-Clipart.png"
                alt=""
            />
        </div>
    );
};

export default Home;

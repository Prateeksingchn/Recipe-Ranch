import { Link } from "react-router-dom";

const Card = ({ recipe }) => {
    const { id, title, image, summary, readyInMinutes, difficulty } = recipe;

    return (
        <Link
            to={`/recipes/${id}`}
            className="text-center w-full sm:w-[45%] lg:w-[30%] bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-200 m-5"
        >
            <img className="w-full h-48 object-cover" src={image} alt={title} />
            <div className="p-5">
                <h1 className="mt-2 mb-3 text-xl font-semibold text-green-600">{title}</h1>
                <p className="text-gray-700 text-sm">
                    {summary ? summary.replace(/<\/?[^>]+(>|$)/g, "").substring(0, 100) : 'No summary available'}...
                </p>
                <div className="flex justify-between text-gray-400 mt-5">
                    <div className="text-center">
                        <i className="ri-timer-line text-lg"></i>
                        <br />
                        <span className="text-sm">{readyInMinutes ? `${readyInMinutes} min` : 'N/A'}</span>
                    </div>
                    <div className="text-center">
                        <i className="ri-thumb-up-line text-lg"></i>
                        <br />
                        <span className="text-sm">{difficulty || 'Easy'}</span>
                    </div>
                    <div className="text-center">
                        <i className="ri-share-line text-lg"></i>
                        <br />
                        <span className="text-sm">Share</span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Card;

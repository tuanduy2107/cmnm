const Card = ({ title, subtitle, year, place }) => {
    return (
        <a
            href="#"
            className="relative w-1/6 bg-white mx-2 my-2 shadow-lg rounded-lg p-4 overflow-hidden transition-transform transform hover:scale-105"
        >
            <div className="relative z-10">
                <h2 className="text-xl font-bold text-gray-800">{title}</h2>
                <p className="text-gray-600 text-sm font-bold">{subtitle} <span>{year}</span></p>
                <p className="text-gray-500 italic">{place}</p>
            </div>
        </a>
    );
};

export default Card;

import HomePage5 from "/src/assets/HomePage5.jpg";
const partners = [
    { name: "Partner 1", logo: "/src/assets/partner1.png" },
    { name: "Partner 2", logo: "/src/assets/partner2.png" },
    { name: "Partner 3", logo: "/src/assets/partner3.png" },
    { name: "Partner 4", logo: "/src/assets/partner4.png" },
    { name: "Partner 5", logo: "/src/assets/partner5.png" },
];

const Partners = () => {
    return (
        <div className="relative flex flex-col items-center justify-center bg-white min-h-screen z-10">
            <div className="container mx-auto px-4">
                <img
                    src={HomePage5}
                    alt="Homepage5"
                    className="absolute inset-0 w-full h-full object-cover opacity-60 -z-10"
                />
                {/* Tiêu đề */}
                <h1 className="text-5xl font-bold text-center text-white mb-8">
                    Đối tác đồng hành
                </h1>
                <p className="text-2xl text-center text-white mb-12">
                    Chúng tôi tự hào được đồng hành cùng những đối tác hàng đầu trong hành trình phát triển.
                </p>

                {/* Lưới đối tác */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 items-center justify-items-center bg-white opacity-75 rounded-2xl mx-48">
                    {partners.map((partner, index) => (
                        <a
                            key={index}
                            href={partner.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group"
                        >
                            <img
                                src={partner.logo}
                                alt={partner.name}
                                className="w-24 h-24 object-contain mx-auto my-5"
                            />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Partners;

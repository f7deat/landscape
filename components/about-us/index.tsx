const AboutUs: React.FC = () => {
    return (
        <div className="py-20">
            <div className="container mx-auto">
                <div className="md:flex">
                    <div className="md:w-1/2">
                        <div className="h-96 w-full bg-gray-800" data-aos="zoom-in">
                            <img src="https://i.imgur.com/0o6oP9f.jpg" alt="img" className="w-full h-full object-fit-cover" />
                        </div>
                    </div>
                    <div className="md:w-1/2 p-10">
                        <div className="text-sm text-red-500">About us</div>
                        <div className="font-medium" style={{ fontSize: 48 }} data-aos="fade-up">Our products are essential to society</div>
                        <div className="text-gray-500" data-aos="fade-up">
                            Since 1972 we have been pushing the boundaries of imagination and technology, solving challenges in the oil and gas industry. That quest has taken us to greater depths, deeper waters and new frontiers.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
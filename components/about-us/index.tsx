const AboutUs : React.FC = () => {
    return (
        <div className="py-20">
            <div className="md:flex">
                <div className="md:w-1/2">
                    <div className="h-96 w-full bg-gray-800"></div>
                </div>
                <div className="md:w-1/2 p-10">
                    <div className="text-sm text-red-500">About us</div>
                    <div className="font-medium" style={{fontSize: 48}}>Our products are essential to society</div>
                    <div className="text-gray-500">
                        Since 1972 we have been pushing the boundaries of imagination and technology, solving challenges in the oil and gas industry. That quest has taken us to greater depths, deeper waters and new frontiers.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
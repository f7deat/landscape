const Exploration: React.FC = () => {
    return (
        <div className="bg-slate-800">
            <div className="container mx-auto md:py-40 py-20 px-4">
                <div className="md:w-1/2">
                    <div className="bg-white p-10">
                        <div className="text-sm uppercase text-primary mb-3">Exploration</div>
                        <div className="text-2xl font-bold mb-3">Meeting future demand for energy</div>
                        <div className="mb-3">
                        Technology and innovation are enablers for our strategy. We are an energy company committed to long term value creation in a low carbon future.
                        </div>
                        <button className="bg-gray-100 px-10 py-3 text-primary rounded">
                            <span className="mr-2">Explore more</span>
                            <i className="fas fa-arrow-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Exploration
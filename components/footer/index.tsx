const Footer : React.FC = () => {
    return (
        <footer className="bg-slate-800 text-white mt-20 pt-10">
            <div className="container mx-auto">
                <div className="md:flex gap-4">
                    <div className="md:w-1/3">

                    </div>
                    <div className="md:w-1/3">
                        <div className="py-3">
                            
                        </div>
                        <div className="py-3">
                            <i className="fas fa-envelope mr-2"></i>
                            <a href="mailto:">info@defzone.net</a>
                        </div>
                    </div>
                    <div className="md:w-1/3">

                        <input type="text" className="px-4 py-2 rounded bg-slate-700 mb-4 w-72" placeholder="Your email address..." />

                        <div className="text-sm font-medium">Follow us</div>
                        <div className="flex py-4 gap-4">
                            <button className="h-8 w-8 rounded-full bg-white text-gray-900">
                                <i className="fab fa-facebook"></i>
                            </button>
                            <button className="h-8 w-8 rounded-full bg-white text-gray-900">
                                <i className="fab fa-twitter"></i>
                            </button>
                            <button className="h-8 w-8 rounded-full bg-white text-gray-900">
                                <i className="fab fa-instagram"></i>
                            </button>
                            <button className="h-8 w-8 rounded-full bg-white text-gray-900">
                                <i className="fab fa-linkedin"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="md:flex jusitfy-between items-center text-sm">
                    <div className="py-4 flex-1">2022 DLiTi Landscape</div>
                    <div className="flex gap-4">
                        <a href="/about">About</a>
                        <a href="/about">Services</a>
                        <a href="/about">Career</a>
                        <a href="/about">Contact</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
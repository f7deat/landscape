const CommentBox: React.FC = () => {
    return (
        <div className="container mx-auto md:py-20 py-10 px-4 md:px-40">
            <div className="md:flex gap-20 items-center" data-aos="fade-right">
                <div className="w-64 md:text-left text-center mb-4">
                    <div className="bg-slate-800 rounded-full h-64 w-64">
                        <img src="https://i.imgur.com/cgwvBOI.jpg" alt="cheft" className="rounded-full w-full hover:opacity-75 transition duration-700" />
                    </div>
                </div>
                    <div>
                        <div className="text-xl mb-4 font-medium">
                            I believe technology is essential for us to discover and develop more projects, and at the same time reduce cost and lower carbon emissions
                        </div>
                        <div className="text-right text-sm text-primary">President and Chief Executive Officer</div>
                    </div>
            </div>
        </div>
    )
}

export default CommentBox
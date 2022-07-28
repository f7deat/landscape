const CommentBox: React.FC = () => {
    return (
        <div className="container mx-auto md:py-20 py-10 px-4 md:px-40">
            <div className="md:flex gap-20 items-center" data-aos="fade-right">
                <div className="flex items-center justify-center md:text-left text-center mb-4">
                    <div className="bg-slate-800 rounded-full w-52 h-52 md:h-64 md:w-64">
                        <img src="https://i.imgur.com/cgwvBOI.jpg" alt="cheft" className="rounded-full w-full hover:opacity-75 transition duration-700" />
                    </div>
                </div>
                <div>
                    <div className="md:text-xl mb-4 font-medium">
                        Your input to today meeting was a game-changer for this project. I see how invested you are in the projects success and the extra effort you put in to complete it on time. I admire your dedication and believe you have a bright future ahead of you
                    </div>
                    <div className="text-right text-sm text-primary">President and Chief Executive Officer</div>
                </div>
            </div>
        </div>
    )
}

export default CommentBox
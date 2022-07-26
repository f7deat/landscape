const Feedback: React.FC = () => {

    const customers = [
        {
            id: 0,
            logo: 'https://i.imgur.com/cBaobGb.png'
        },
        {
            id: 1,
            logo: 'https://i.imgur.com/O2jKdxR.png'
        },
        {
            id: 2,
            logo: 'https://i.imgur.com/PtQyBWQ.png'
        },
        {
            id: 4,
            logo: 'https://i.imgur.com/jRAmLdW.png'
        },
        {
            id: 5,
            logo: 'https://i.imgur.com/zPsBQBx.png'
        },
        {
            id: 6,
            logo: 'https://i.imgur.com/XKjD8d2.png'
        },
        {
            id: 7,
            logo: 'https://i.imgur.com/nb51EjU.png'
        },
        {
            id: 8,
            logo: 'https://i.imgur.com/N1xggu5.png'
        }
    ]

    return (
        <div className="container py-10 mx-auto px-4 md:px-0">
            <div className="text-primary text-sm mb-4">CUSTOMERS</div>
            <div className="md:flex gap-10">
                <div className="md:w-1/2 mb-10 px-4 md:px-0">
                    <div className="text-3xl font-bold mb-10">Feedback and clients:</div>
                    <div className="flex gap-4 items-center">
                        <div className="w-96">
                            <img src="https://s3.amazonaws.com/brt.org/Jim-FarleyHeadshot-3-4.jpg" className="rounded-full" alt="ava" />
                        </div>
                        <div className="md:text-xl text-sm md:p-10">
                        <div className="mb-4">
                        I believe technology is essential for us to discover and develop more projects, and at the same time reduce cost and lower carbon emissions 
                        </div>
                        <div className="text-right md:text-sm text-xs text-primary">President and Chief Executive Officer  </div>
                        </div>
                    </div>
                </div>
                <div className="md:w-1/2">
                    <div className="grid grid-cols-2">
                        {
                            customers.map(x => (
                                <div className="p-4 border-b flex items-center mb-2" key={x.id} data-aos="fade-up">
                                    <img src={x.logo} alt="logo" style={{maxWidth: 250}} className="w-full md:w-auto" />    
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feedback
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
        <div className="container py-10 mx-auto">
            <div className="text-primary text-sm mb-4">CUSTOMERS</div>
            <div className="md:flex">
                <div className="md:w-1/2">
                    <div className="text-2xl font-bold">Feedback and clients:</div>
                </div>
                <div className="md:w-1/2">
                    <div className="grid grid-cols-2">
                        {
                            customers.map(x => (
                                <div className="p-4 border-b flex items-center mb-2" key={x.id}>
                                    <img src={x.logo} alt="logo" style={{maxWidth: 250}} />    
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
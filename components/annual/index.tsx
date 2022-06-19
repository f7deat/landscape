const Annual: React.FC = () => {
    return (
        <div className="annual">
            <div className="md:flex">
                <div className="md:w-1/2"></div>
                <div className="md:w-1/2 text-white md:p-40" style={{backgroundColor: '#0000009e'}}>
                    <div className="text-sm mb-2">STATISTICS</div>
                    <div className="title mb-4">Annual results</div>
                    <div className="border-b mb-4"></div>
                    <div className="flex flex-wrap">
                        <div className="w-1/2">
                            <div className="mb-4">
                                <div className="text-2xl font-bold">2000+</div>
                                <div className="text-sm">HOUSE PRODUCTION</div>
                            </div>
                        </div>
                        <div className="w-1/2">
                            <div className="mb-4">
                                <div className="text-2xl font-bold">136%</div>
                                <div className="text-sm">RESERVE REPLACEMENT RATIO</div>
                            </div>
                        </div>
                        <div className="w-1/2">
                            <div className="mb-4">
                                <div className="text-2xl font-bold">650K</div>
                                <div className="text-sm">CUSTOMER</div>
                            </div>
                        </div>
                        <div className="w-1/2">
                            <div className="mb-4">
                                <div className="text-2xl font-bold">615+</div>
                                <div className="text-sm">PROVED DESIGN RESERVES</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Annual
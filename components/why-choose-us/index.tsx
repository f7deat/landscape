const WhyChooseUs: React.FC = () => {
    return (
        <div className="bg-stone-100">
            <div className="container mx-auto py-20 px-4 md:px-0">
                <div className="md:flex">
                    <div className="md:w-1/2 md:pl-20">
                        <div className="text-pink-600 font-medium text-sm">OUR FEATURES</div>
                        <div className="title mb-4">Why choose us</div>
                        <div className="border-b mb-4"></div>
                        <div className="flex gap-6 items-center" data-aos="fade-up">
                            <i className="fas fa-4x fa-balance-scale text-gray-400"></i>
                            <div className="p-10 md:mr-10">
                                By 2022 we expect up to 25% of research funds to be devoted to new energy solutions energy efficiency
                            </div>
                        </div>
                        <div className="flex gap-6 items-center" data-aos="fade-up">
                            <i className="fas fa-4x fa-broadcast-tower text-gray-400"></i>
                            <div className="p-10 md:mr-10">
                                Aiming to achieve annual CO2 emission reductions of 3 million tonnes by 2030 compared to 2017.
                            </div>
                        </div>
                        <div className="flex gap-6 items-center" data-aos="fade-up">
                            <i className="fas fa-4x fa-bullhorn text-gray-400"></i>
                            <div className="p-10 md:mr-10">
                                By 2030 new energy has the potential to constitute around 15-20% of investments/annual capex
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2 md:pr-20">
                        <div className="md:flex justify-between py-6 px-4 md:px-0">
                            <button className="px-10 w-full md:w-auto mb-2 py-4 rounded-lg bg-white shadow-lg text-slate-800 font-bold">OUR STRATEGY</button>
                            <button className="px-10 w-full md:w-auto mb-2 py-4 rounded-lg bg-slate-800 shadow-lg text-white font-bold">OUR VISION</button>
                            <button className="px-10 w-full md:w-auto mb-2 py-4 rounded-lg bg-slate-800 shadow-lg text-white font-bold">OUR MISSION</button>
                        </div>
                        <div className="px-4 md:px-0">
                            <div className="font-semibold pt-8 pb-4" style={{ fontSize: 32 }} data-aos="fade-up">Our strategy to create a beautiful house</div>
                            <div className="text-gray-700" data-aos="fade-up">
                                Natural gas is an effective source of energy that can help limit CO2 emissions that cause global warming. Burning natural gas for power generation produces only around half the CO2 emissions compared to coal. Natural gas is mainly composed of methane, a potent greenhouse gas. Any leakages in the gas value chain will reduce the relative climate benefits of natural.
                                <br /><br />
                                Textron has carried out a study examining methane leaks of Norwegian natural gas delivered to customers in the UK and New Zealand.The findings show that the associated methane emissions are below 0.3% compared to 0.6% which is the average for all gas consumed in Oceania.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyChooseUs
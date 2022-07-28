import { useState } from "react";
import SubTitle from "../../components/sub-title";
import { TabItemProps } from "../../types/component";

const WhyChooseUs: React.FC = () => {

    const [active, setActive] = useState<string>('OUR STRATEGY')

    const renderByTab = () => {
        if (active === 'OUR STRATEGY') {
            return (<div>
                Natural gas is an effective source of energy that can help limit CO2 emissions that cause global warming. Burning natural gas for power generation produces only around half the CO2 emissions compared to coal. Natural gas is mainly composed of methane, a potent greenhouse gas. Any leakages in the gas value chain will reduce the relative climate benefits of natural.
            </div>
            )
        }
        if (active === 'OUR VISION') {
            return (
                <div>
                    Our vision is put into action through programs and a focus on environmental stewardship, activities to benefit society, and a commitment to build shareholder value by making Dliti a truly sustainable company. 
                    At Dliti, we are committed to achieving business and financial success while leaving a positive imprint on society - delivering what we call Performance with Purpose.
                </div>
            )
        }
        if (active === 'OUR MISSION') {
            return (
                <div>
                    Now that we are examined what a mission statement is and how to create one, we can address the key question of this article: what does a good mission statement look like, and who’s doing it right? Here are 12 of the best mission statements for you to review and use as inspiration for your own.
                </div>
            )
        }
    }

    return (
        <div className="bg-stone-100">
            <div className="container mx-auto py-20 px-4 md:px-0">
                <div className="md:flex">
                    <div className="md:w-1/2 md:pl-20">
                        <SubTitle text="OUR FEATURES" />
                        <div className="letter-b mb-4">Why choose us</div>
                        <div className="border-b mb-4"></div>
                        <WhyChooseUsItem
                            icon="fas fa-balance-scale"
                            description="By 2022 we expect up to 25% of research funds to be devoted to new energy solutions energy efficiency"
                        />
                        <WhyChooseUsItem
                            icon="fas fa-broadcast-tower"
                            description="Aiming to achieve annual CO2 emission reductions of 3 million tonnes by 2030 compared to 2017."
                        />
                        <WhyChooseUsItem
                            icon="fas fa-bullhorn"
                            description="By 2030 new energy has the potential to constitute around 15-20% of investments/annual capex"
                        />
                    </div>
                    <div className="md:w-1/2 md:pr-20">
                        <div className="md:flex justify-between py-4 md:px-0 gap-4">
                            <TabItem setActive={setActive} text="OUR STRATEGY" active={active === 'OUR STRATEGY'} />
                            <TabItem setActive={setActive} text="OUR VISION" active={active === 'OUR VISION'} />
                            <TabItem setActive={setActive} text="OUR MISSION" active={active === 'OUR MISSION'} />
                        </div>
                        <div className="px-4 md:px-0">
                            <div className="font-semibold pt-8 pb-4 letter-b" data-aos="fade-up">{active.toLowerCase()} to create a beautiful house</div>
                            <div className="text-gray-700" data-aos="fade-up">
                                {renderByTab()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyChooseUs

type WhyChooseUsItemProps = {
    icon: string;
    description: string;
}

const WhyChooseUsItem: React.FC<WhyChooseUsItemProps> = (props) => {
    return (
        <div className="flex gap-6 items-center" data-aos="fade-up">
            <i className={`${props.icon} text-gray-400 text-4xl`}></i>
            <div className="md:p-6 p-4 md:mr-10">
                {props.description}
            </div>
        </div>
    )
}

const TabItem: React.FC<TabItemProps> = (props) => {
    return (
        <button
            onClick={() => props.setActive(props.text)}
            className={`px-10 font-bold w-full mb-2 py-4 rounded-lg shadow-lg ${props.active ? 'bg-white' : 'bg-slate-800 text-white'}`}>{props.text}</button>
    )
}
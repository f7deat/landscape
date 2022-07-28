import Link from "next/link";

type FeatureBoxProps = {
    name: string;
    description: string;
    index: number;
    icon: string
}

const FeatureBox: React.FC<FeatureBoxProps> = (props) => {
    return (
        <div>
            <div className={`md:p-8 p-4 gap-6 flex items-center ${props.index !== 1 ? 'bg-slate-800 text-white' : 'bg-slate-50 text-primary'}`}>
                <div>
                    <i className={`${props.icon} text-3xl`}></i>
                </div>
                <div>
                    <div className="mb-2">
                        <Link href="/service">
                            <a className='uppercase font-bold'>{props.name}</a>
                        </Link>
                    </div>
                    <div>
                        {props.description}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeatureBox
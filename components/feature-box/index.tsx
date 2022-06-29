type FeatureBoxProps = {
    name: string;
    description: string;
    index: number;
    icon: string
}

const FeatureBox: React.FC<FeatureBoxProps> = (props) => {
    return (
        <div>
            <div className={`p-10 gap-4 flex items-center ${props.index !== 1 ? 'bg-slate-800 text-white' : 'bg-white text-pink-600'}`}>
                <div>
                    <i className={`${props.icon} fa-4x`}></i>
                </div>
                <div>
                    <div className='uppercase font-bold'>{props.name}</div>
                    <div>
                        {props.description}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeatureBox
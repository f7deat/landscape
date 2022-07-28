type SubTitleProps = {
    text: string;
}

const SubTitle : React.FC<SubTitleProps> = (props) => {
    return (
        <div className="flex items-center gap-4 mb-1">
            <div className="text-primary text-sm uppercase">{props.text}</div>
            <div className="border-b w-20 border-primary"></div>
        </div>
    )
}

export default SubTitle
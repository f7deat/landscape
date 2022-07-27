export type TabItemProps = {
    text: string;
    active: boolean;
    setActive: Dispatch<SetStateAction<string>>;
}
interface SelectableCardProps {
    children?: React.ReactNode;
}

const SelectableCard: React.FC<SelectableCardProps> = ({ children }) => {
    return (
        <div className="flex-1 border-2 border-gray-200 rounded-xl shadow-sm p-6 flex flex-col hover:border-indigo-600">
            {children}
        </div>
    );
}

export default SelectableCard;
interface SelectableCardProps {
    children?: React.ReactNode;
    clickable?: boolean;
}

const SelectableCard: React.FC<SelectableCardProps> = ({ children, clickable = true}) => {
    return (
        <div className="flex-1 border-2 border-gray-200 rounded-xl shadow-sm p-6 flex flex-col hover:border-indigo-600" style={{ pointerEvents: clickable ? 'auto' : 'none' }}>
            {children}
        </div>
    );
}

export default SelectableCard;
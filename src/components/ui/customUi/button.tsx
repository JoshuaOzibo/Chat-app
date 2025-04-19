type ButtonType = 'submit' | 'reset' | 'button';
type valueType = "string" | React.ReactNode;

interface CustomButtonProps {
    type?: ButtonType;
    className?: string;
    value: valueType;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({ value, className, type, onClick }: CustomButtonProps) {
    return (
        <button 
            type={type} 
            className={className} 
            onClick={onClick}
        >
            {value}
        </button>
    );
}

type ButtonType = 'submit' | 'reset' | 'button';
type valueType = "string" | React.ReactNode;
import { useColors } from '@/context/ColorContext';


interface CustomButtonProps {
    type?: ButtonType;
    className?: string;
    value: valueType;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({ value, className, type, onClick }: CustomButtonProps) {

    const { primaryColor } = useColors();
    return (
        <button 
            type={type} 
            style={{backgroundColor: primaryColor.light}}
            className={className} 
            onClick={onClick}
        >
            {value}
        </button>
    );
}
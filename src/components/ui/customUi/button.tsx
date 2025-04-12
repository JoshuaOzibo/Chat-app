type ButtonType = 'submit' | 'reset' | 'button';
type valueType = "string" | React.ReactNode;
interface CustomButtonProps {
    type?: ButtonType;
    className?: string;
    value: valueType
    onClick?: () => void
  }

export default function Button({value, className, type}: CustomButtonProps){
    return(
        <button type={type} className={className}>{value}</button>
    )
}
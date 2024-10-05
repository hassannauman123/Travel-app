//Button.tsx


//pass props so button can be reused to be written in different ways in other classes
//within button we can render icon saying if icon exists
//label to render the text

import Image from "next/image"
//since using typescript, button needs to know exactly what it gets
type ButtonProps = {
    type: "button" | "submit" | "reset";
    title: string;
    icon?: string; // optional property because not all buttons have icons
    variant: string; // make variant flexible for the user to choose
    full?: boolean;
}


const Button = ({ type, title, icon, variant, full }: ButtonProps) => {
    return (
        <div>
            <button
            className={`flexCenter gap-3 rounded-full border ${variant}`}
                type={type}
            >
                {icon && <img src={icon} alt={title} width={24} height={24} />}
                <label className="bold-16 whitespace-nowrap">{title}</label>
            </button>
        </div>
    )
}

export default Button

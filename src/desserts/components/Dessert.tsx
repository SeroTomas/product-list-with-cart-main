
import { useState } from "react"
import { DessertInterface } from "../../models/interfaces"
import AddToCartButton from "./AddToCartButton"


const Dessert = ({ image, name, category, price }: DessertInterface) => {

    const [amount, setAmount] = useState(0);

    const incrementAmount = () => {
        setAmount(amount + 1);
    }

    const decreaseAmount = () => {
        amount && setAmount(amount - 1);
    }

    return (
        <div className="flex-col max-w-[320px] xl:max-w-[260px]">
            <div className="flex flex-col items-center">
                <div className="overflow-hidden h-[180px] rounded-lg xl:h-full">
                    <img src={image.desktop} alt={name} className=" object-contain -translate-y-[60px] xl:-translate-y-0" />
                </div>
                <AddToCartButton
                    amount={amount}
                    decreaseAmount={decreaseAmount}
                    incrementAmount={incrementAmount}
                />
            </div>
            <div>
                <h3>{category}</h3>
                <h2>{name}</h2>
                <p>${price}</p>
            </div>
        </div>
    )
}
export default Dessert
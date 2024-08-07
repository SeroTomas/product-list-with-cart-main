
import { useState } from "react"
import { DessertInterface } from "../../models/interfaces"
import AddToCartButton from "./AddToCartButton"
import DessertImage from "./DessertImage";
import DessertInfo from "./DessertInfo";


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

            <DessertImage
                image={image}
                name={name}
                amount={amount}
            >

                <AddToCartButton
                    amount={amount}
                    decreaseAmount={decreaseAmount}
                    incrementAmount={incrementAmount}
                />

            </DessertImage>

            <DessertInfo
                category={category}
                name={name}
                price={price}
            />

        </div>
    )
}
export default Dessert
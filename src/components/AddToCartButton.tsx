import CartIcon from "../assets/images/icon-add-to-cart.svg";
import IncrementIcon from "../assets/images/icon-increment-quantity.svg";
import DecreaseIcon from "../assets/images/icon-decrement-quantity.svg";


interface Props {
    amount: number
    incrementAmount: () => void
    decreaseAmount: () => void
}


const AddToCartButton = ({ amount, incrementAmount, decreaseAmount }: Props) => {

    const iddleButton = (
        <button
            onClick={() => incrementAmount()}
            className=" bg-rose-50 size-full rounded-full flex items-center justify-center ">
            <img src={CartIcon} alt="cart icon" />
            <span>Add to Cart</span>
        </button>
    )

    const handleAmountButtons = (
        <div className="size-full rounded-full flex items-center justify-between bg-red">
            <button
                onClick={() => decreaseAmount()}
                className="h-5 w-5 grid place-items-center border border-rose-50 rounded-full p-1 hover:bg-rose-50" >
                <img src={DecreaseIcon} alt="decrease icon" />
            </button>
            <span>{amount}</span>
            <button
                onClick={() => incrementAmount()}
                className="h-5 w-5 grid place-items-center bg-red border border-rose-50 rounded-full p-1 hover:bg-rose-50 ">
                <img src={IncrementIcon} alt="increment icon" />
            </button>
        </div>
    )



    return (
        <div className="-translate-y-1/2 w-3/5 h-10 border border-red rounded-full  ">
            {
                amount ? handleAmountButtons : iddleButton
            }
        </div>
    )
}
export default AddToCartButton
import CartIcon from "../../assets/images/icon-add-to-cart.svg";
import IncrementIcon from "../../assets/images/icon-increment-quantity.svg";
import DecrementIcon from "../../icons/DecrementIcon";


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
                className=" grid place-items-center" >
                <DecrementIcon styles=" h-5 w-5 fill-rose-50 hover:fill-red bg-red border border-rose-50 rounded-full hover:bg-rose-50 p-1"/>
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
        <div className="-translate-y-1/2 w-[160px] h-11 border border-red rounded-full  ">
            {
                amount ? handleAmountButtons : iddleButton
            }
        </div>
    )
}
export default AddToCartButton
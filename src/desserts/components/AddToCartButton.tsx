import CartIcon from "../../assets/images/icon-add-to-cart.svg";
import AddIcon from "../icons/AddIcon";
import DecrementIcon from "../icons/DecrementIcon";


interface Props {
    amount: number
    incrementAmount: () => void
    decreaseAmount: () => void
}


const AddToCartButton = ({ amount, incrementAmount, decreaseAmount }: Props) => {

    const iddleButton = (
        <button
            onClick={() => incrementAmount()}
            className=" bg-white size-full rounded-full flex items-center gap-2 justify-center ">
            <img src={CartIcon} alt="cart icon" />
            <b className="text-sm font-semibold text-rose-900">Add to Cart</b>
        </button>
    )

    const handleAmountButtons = (
        <div className="size-full rounded-full flex items-center justify-between bg-red px-2 ">
            <button
                onClick={() => decreaseAmount()}
                className=" grid place-items-center" >
                <DecrementIcon styles=" size-6 fill-rose-50 hover:fill-red bg-red border border-rose-50 rounded-full hover:bg-rose-50 p-1"/>
            </button>
            <span className="text-rose-50 font-semibold ">{amount}</span>
            <button
                onClick={() => incrementAmount()}
                className=" grid place-items-center">
                <AddIcon styles=" size-6 fill-rose-50 hover:fill-red bg-red border border-rose-50 rounded-full hover:bg-rose-50 p-1"/>
            </button>
        </div>
    )



    return (
        <div className="translate-y-1/2 w-[160px] h-11 border border-rose-500 rounded-full absolute bottom-0">
            {
                amount ? handleAmountButtons : iddleButton
            }
        </div>
    )
}
export default AddToCartButton
import useStringPrice from "../../hooks/useStringPrice"

interface Props {
    category: string
    name: string
    price: number
}

const DessertInfo = ({ category, name, price }: Props) => {

    const stringPrice = useStringPrice(price);

    return (
        <div>
            <h3 className="text-sm text-rose-400">
                {category}
            </h3>
            <h2 className="font-medium text-rose-900">
                {name}
            </h2>
            <p className="text-red font-medium">
                ${stringPrice}
            </p>
        </div>
    )
}
export default DessertInfo
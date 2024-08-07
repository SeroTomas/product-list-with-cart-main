import { DesertImage } from "../../models/interfaces"

interface Props {
    children: React.ReactNode
    image: DesertImage
    name: string
    amount: number
}

const selected = "overflow-hidden h-[180px] rounded-lg xl:h-full outline-2 outline outline-red"
const noSelected = "overflow-hidden h-[180px] rounded-lg xl:h-full"


const DessertImage = ({ children, image, name, amount }: Props) => {

    return (
        <div className="flex flex-col items-center relative mb-6 ">
            <div className={amount ? selected : noSelected}>
                <img src={image.desktop} alt={name} className=" object-contain -translate-y-[60px] xl:-translate-y-0" />
            </div>
            {children}
        </div>
    )
}
export default DessertImage
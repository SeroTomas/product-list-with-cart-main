import useData from "../hooks/useData"
import Dessert from "./Dessert";


const Desserts = () => {


    const data = useData();

    return (
        <section className="flex-col">
            <h1>Desserts</h1>
            <div className=" flex flex-col gap-6 xl:flex-row xl:flex-wrap ">
                {
                    data.map(dessert => <Dessert {...dessert} key={dessert.id}/>)
                }
            </div>
        </section>
    )
}
export default Desserts 
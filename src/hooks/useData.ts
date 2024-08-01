import {data}from "../data"
import { DessertInterface } from "../models/interfaces";

const database: DessertInterface[] = data;

const useData = () => {

    return database
}

export default useData;
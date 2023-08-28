import { useState } from "react"



export default function useFilter<T>(filterFields:  Array<keyof T>){
    const [filterValue, setFilterValue] = useState("")

    const filterData = (data: T[]) => {
        return data.filter(dataItem => filterFields.some(field => String(dataItem[field]).toLowerCase().includes(filterValue.toLowerCase())))
    }

    return{
        filterValue,
        setFilterValue,
        filterData
    }
}
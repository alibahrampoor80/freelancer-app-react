import {useQuery} from "react-query";
import {getCategoryApi} from "../services/categoryService.js";

export default function useCategories() {
    const {isLoading, data} = useQuery({
        queryKey: [`categories`],
        queryFn: getCategoryApi
    })
    const {categories: rawCategories = []} = data || {}

    const categories = rawCategories.map(item => ({
        label: item.title, value: item._id
    }))
    const transformCategories = rawCategories.map(item => ({
        label: item.title,
        value: item.englishTitle
    }))

    return {isLoading, transformCategories, categories}

}
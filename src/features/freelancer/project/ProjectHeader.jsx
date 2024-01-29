import Filter from "../../../ui/Filter";
import FilterDropDown from "../../../ui/FilterDropDown";
import useCategories from "../../../hooks/useCategories.js";

const sortByOptions = [
    {
        value: "latest",
        label: "مرتب سازی (جدید ترین)",
    },
    {
        value: "earliest",
        label: "مرتب سازی (قدیمی ترین)",
    },
];

const statusOptions = [
    {value: "ALL", label: "همه"},
    {value: "OPEN", label: "باز"},
    {value: "CLOSED", label: "بسته"},
];

function ProjectHeader() {
    const {transformCategories} = useCategories();

    return (
        <div className="flex items-center justify-between text-secondary-700 mb-8">
            <h1 className="text-lg font-bold">لیست پروژه ها</h1>
            <div className="flex items-center gap-x-8">
                <Filter filterField="status" options={statusOptions}/>
                <FilterDropDown
                    options={[
                        {value: "ALL", label: "دسته بندی (همه)"}, ...transformCategories,]}
                    filterField="category"
                />
                <FilterDropDown options={sortByOptions} filterField="sort"/>
            </div>
        </div>
    );
}

export default ProjectHeader;

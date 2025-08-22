import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

interface CategoryChangeProps {

    onCategoryChange:(category:string) => void

}


const CategoryFillter = ({onCategoryChange}:CategoryChangeProps) =>{

    const cateogries = ["all", "tech", "health", "sports", "business"]

    return(
        <div className="flex items-center justify-between gap-1 ">
            <h2 className=" font-semibold ">Category By:</h2>
            <div>
                <Select onValueChange={value =>onCategoryChange(value==="all"?"":value)} >
  <SelectTrigger className="w-[180px] capitalize">
    <SelectValue placeholder="Select Category" />
  </SelectTrigger>
  <SelectContent>
    {
        cateogries.map((category)=>(
            <SelectItem value={category} key={category}>{category}</SelectItem>

        ))
    }
    
   
  </SelectContent>
</Select>
            </div>
        </div>
    )
}

export default CategoryFillter;
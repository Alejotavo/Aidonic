
import { Item } from "./../../Models/Entity";

interface EntityProps {
    dataItem: Item;
}

function Permissions({ dataItem }: EntityProps) {
    return (
        <>

     <div className="grid w-full grid-cols-5 gap-4 dark:bg-gray-100 p-3 mt-3">
        <label className="text-gray-400 text-xs">{dataItem.title}</label>
          <div className="flex flex-col">
                <label className="text-gray-400 text-xs">Create</label>
                <span  className="text-gray-600 text-ms font-medium">
                    {dataItem.create ? "SI" : "NO"}
                </span>
          </div>
          <div className="flex flex-col">
            <label className="text-gray-400 text-xs">Edit</label>
            <span className="text-gray-600 text-ms font-medium">
                {dataItem.edit ? "SI" : "NO"}
            </span> 
          </div>
          <div className="flex flex-col">
            <label className="text-gray-400 text-xs">View</label>
            <span className="text-gray-600 text-ms font-medium">
                {dataItem.view ? "SI" : "NO"}
            </span> 
          </div>
          <div className="flex flex-col">
            <label className="text-gray-400 text-xs">Delete</label>
            <span className="text-gray-600 text-ms font-medium">
                {dataItem.delete ? "SI" : "NO"}
            </span> 
          </div>
        </div>
     </>
   );
  }
  
  export default Permissions;
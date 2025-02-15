
import { Item } from "./../../Models/Entity";

interface EntityProps {
    dataItem: Item;
}

function Permissions({ dataItem }: EntityProps) {
    return (
        <div className="grid w-full grid-cols-5 gap-4 dark:bg-gray-100 p-3 mt-3">
            <label className="text-gray-400 text-xs flex items-center justify-center">{dataItem.title}</label>
            <div className="flex flex-col items-center">
                    <label className="text-gray-400 text-xs">Create</label>
                    <span  className="text-gray-600 text-ms font-medium">
                        <img
                            src={dataItem.create ? "/check.svg" : "/cross.svg"}
                            alt={dataItem.create ? "Check" : "Cross"}
                            className="w-4 h-4 mt-1"
                        />
                    </span>
            </div>
            <div className="flex flex-col items-center">
                <label className="text-gray-400 text-xs">Edit</label>
                <span className="text-gray-600 text-ms font-medium">
                    <img
                        src={dataItem.edit ? "/check.svg" : "/cross.svg"}
                        alt={dataItem.edit ? "Check" : "Cross"}
                        className="w-4 h-4 mt-1"
                    />
                </span> 
            </div>
            <div className="flex flex-col items-center">
                <label className="text-gray-400 text-xs">View</label>
                <span className="text-gray-600 text-ms font-medium">
                    <img
                        src={dataItem.view ? "/check.svg" : "/cross.svg"}
                        alt={dataItem.view ? "Check" : "Cross"}
                        className="w-4 h-4 mt-1"
                    />
                </span> 
            </div>
            <div className="flex flex-col items-center">
                <label className="text-gray-400 text-xs">Delete</label>
                <span className="text-gray-600 text-ms font-medium">
                    <img
                        src={dataItem.delete ? "/check.svg" : "/cross.svg"}
                        alt={dataItem.delete ? "Check" : "Cross"}
                        className="w-4 h-4 mt-1"
                    />
                </span> 
            </div>
        </div>
   );
  }
  
  export default Permissions;
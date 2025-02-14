
import { item } from "./../../Models/Entity";

interface EntityProps {
    dataItem: item;
}

function Permissions({ dataItem }: EntityProps) {
    return (
        <>
     <div className="">
        {dataItem.title}
    </div>
         <div className="">
            <label>Create</label>
            {dataItem.create ? "SI" : "NO"}
     </div>
     <div className="">
            <label>Edit</label>
            {dataItem.create ? "SI" : "NO"}
     </div>
     <div className="">
            <label>View</label>
            {dataItem.create ? "SI" : "NO"}
     </div>
     <div className="">
            <label>Delete</label>
            {dataItem.create ? "SI" : "NO"}
     </div>
     </>
   );
  }
  
  export default Permissions;
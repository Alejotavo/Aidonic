
import { EntityModel } from "./../../Models/Entity";
import Permissions from "./Permissions";

interface EntityProps {
  data: EntityModel;
}

function Entity({ data }: EntityProps) {
    return (
     <div className="m-3 text-white mx-auto max-w-full gap-x-4 bg-white p-6 shadow-lg outline outline-black/5">
        <div className="w-full mb-3 text-lg font-bold text-gray-900 "> {data.name}</div>
        <div className="grid w-full grid-cols-5 gap-4">
          <div className="flex flex-col">
            <label className="text-gray-400 text-xs">Email</label>
            <span className="text-sky-400 text-ms font-medium">{data.email}</span> 
          </div>
          <div className="flex flex-col">
            <label className="text-gray-400 text-xs">Invited</label>
            <span className="text-gray-600 text-ms font-medium">{data.invited}</span> 
          </div>
          <div className="flex flex-col">
            <label className="text-gray-400 text-xs">Role</label>
            <span className="text-gray-600 text-ms font-medium">{data.role}</span> 
          </div>
          <div className="flex flex-col">
            <label className="text-gray-400 text-xs">Status</label>
            <span className="text-gray-600 text-ms font-medium">{data.status}</span> 
          </div>
        </div>

      <div className="w-full bg-gray-300 p-6 text-center dark:bg-gray-600 mt-3">
      {data.items?.map((item, index) => {
        return (
          <Permissions key={index} dataItem={item}  />
        );
      })}
      </div>
    </div>
   );
  }
  
  export default Entity;
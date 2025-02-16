
import { EntityModel } from "./../../Models/Entity";
import Permissions from "./Permissions";

interface EntityProps {
  data: EntityModel;
}

function Entity({ data }: EntityProps) {
    return (
     <div className="m-3 text-white mx-auto max-w-full gap-x-4 bg-white p-3 sm:p-6 shadow-lg outline outline-black/5">
        <div className="flex">
          <div className="w-full mb-3 text-lg font-bold text-gray-900 "> {data.name}</div>
          <button className="block p-2 cursor-pointer">
            <img src="/more-horizontal-btn.svg"></img>
          </button>
        </div>
        <div className="grid w-full gap-4 grid-cols-1 sm:grid-cols-4">
          <div className="flex flex-col sm:col-span-1">
            <label className="text-gray-400 text-xs">Email</label>
            <span className="text-sky-400 text-ms font-medium">{data.email}</span>
          </div>
          <div className="grid w-full gap-4 grid-cols-3 sm:col-span-3">
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
              <div className="flex">
                <img src="/mail.svg" className="w-3"></img>
                <span className="text-gray-600 text-ms font-medium ml-1">
                  {data.status}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full text-center mt-3">
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
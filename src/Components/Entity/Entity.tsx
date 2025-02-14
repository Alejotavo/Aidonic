
import { EntityModel } from "./../../Models/Entity";

interface EntityProps {
  data: EntityModel;
}

function Entity({ data }: EntityProps) {
    return (
     <div className="text-white mx-auto max-w-full items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
        <div className="grid w-full grid-cols-5 gap-4">
          <div className="bg-gray-200 p-4 text-center dark:bg-gray-700">
            {data.name}
          </div>
          <div className="bg-gray-200 p-4 text-center dark:bg-gray-700">
            <label>Email</label>
            {data.email}
          </div>
          <div className="bg-gray-200 p-4 text-center dark:bg-gray-700">Col 3</div>
          <div className="bg-gray-200 p-4 text-center dark:bg-gray-700">Col 4</div>
          <div className="bg-gray-200 p-4 text-center dark:bg-gray-700">Col 5</div>
        </div>

      <div className="w-full bg-gray-300 p-6 text-center dark:bg-gray-600 mt-3">
      {data.items?.map((item, index) => {
        return (
          <li key={index}>{item.title}</li>
        );
      })}
      </div>
    </div>
   );
  }
  
  export default Entity;
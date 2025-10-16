import { useState } from "react";

const Friends_Component = () => {

    const [name, setName] = useState<string[]>(["No Friends, I am so lonely"]);
  return (
    <div>
      <div className="bg-gray-200 shadow-lg h-150 w-3/7 flex flex-col items-center mx-auto">
        <h1 className="text-center font-bold mt-5 text-xl">Friends</h1>
        <p></p>
        <input
          className="mt-6 mb-3 w-100 border py-1"
          type="text"
          placeholder="Enter Name "
        />
        <div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded mt-4 mb-1 mr-3">
            Add at Begining
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded mt-4 mb-1 mr-3">
            Add in Middle
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded mt-4 mb-1 mr-3">
            Add at End
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded mt-4 mb-1 mr-3">
            Remove from Begining
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded mt-4 mb-1 mr-3">
            Remove From End
          </button>
        </div>
        <input
          className="mt-6  w-100 border py-1"
          type="text"
          placeholder="Find to Remove "
        />
        <button className="w-100 bg-blue-600 text-white px-4 py-2 rounded mt-4">
          Remove Friend
        </button>
        <input
          className="mt-6 w-100 border py-1"
          type="text"
          placeholder="Search Friend "
        />
        <button className="w-100 bg-blue-600 text-white px-4 py-2 rounded mt-4">
          Search
        </button>
        <button className="w-40 bg-blue-600 text-white px-4 py-2 rounded mt-4">
          Sort/Reverse Sort
        </button>
      </div>
    </div>
  );
};

export default Friends_Component;

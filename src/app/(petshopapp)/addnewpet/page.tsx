import React from "react";

//Need to add below things for this page
//What type of pet do you have?
//Name of your pet?
//Age of your pet?
//Gender of your pet?
//Breed of your pet?
//Primary breed of your pet?
//weight of your pet?
//how big is your pet?
//what is your pet's color?
//what's the stud fee?

const AddNewPetpage = () => {
  return (
    <div className="flex flex-col min-h-screen w-full items-center p-10">
      <div className="w-11/12">
        <h1 className="text-2xl font-bold pb-2 text-center mb-5">
          Add New Pet
        </h1>
        <div className="mb-5">
          <div className=" flex space-x-1 w-full h-10 border-2 border-[#07074D] rounded-md px-3 py-2 text-base font-normal text-[#07074D]">
            <div className="mb-3 block text-base font-normal text-[#07074D]">
              Pet Type
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex items-center">
                <label className="flex items-center cursor-pointer m-2">
                  <input
                    className="scale-125 mr-2 cursor-pointer"
                    type="radio"
                    name="typeofpet"
                    value="d"
                    checked
                  />
                  <div className="title">Dog</div>
                </label>
              </div>
              <div className="flex items-center">
                <label className="flex items-center cursor-pointer m-2">
                  <input
                    className="scale-125 mr-2 cursor-pointer"
                    type="radio"
                    name="typeofpet"
                    value="c"
                    checked
                  />
                  <div className="title">Cat</div>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-5">
          <input
            type="text"
            placeholder="Name of your pet?"
            className="w-full h-10 border-2 border-blue-900 rounded-md px-3 py-2 text-base font-normal text-black"
          />
        </div>
        <div className="mb-5">
          <input
            type="text"
            placeholder="Age of your pet? (In Months)"
            className="w-full h-10 border-2 border-blue-900 rounded-md px-3 py-2 text-base font-normal text-black"
          />
        </div>
        <div className="mb-5">
          <div className=" flex space-x-1 w-full h-10 border-2 border-blue-900 rounded-md px-3 py-2 text-base font-normal text-black">
            <div className="mb-3 block text-base font-normal text-black">
              Gender
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex items-center">
                <label className="flex items-center cursor-pointer m-2">
                  <input
                    className="scale-125 mr-2 cursor-pointer"
                    type="radio"
                    name="gender"
                    value="m"
                    checked
                  />
                  <div className="title">Male</div>
                </label>
              </div>
              <div className="flex items-center">
                <label className="flex items-center cursor-pointer m-2">
                  <input
                    className="scale-125 mr-2 cursor-pointer"
                    type="radio"
                    name="gender"
                    value="f"
                    checked
                  />
                  <div className="title">Female</div>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-5">
          <select
            className="block space-x-1 w-full h-10 border-2 border-blue-900 rounded-md px-3 py-2 text-base font-normal
             text-black overflow-auto"
            name="petbreed"
            id="petbreed"
          >
            <option value="">Breed Of Your Pet</option>
            <option value="">German Shepard</option>
            <option value="">Great Dane</option>
            <option value="">Siberian Husky</option>
            <option value="">German Shepard</option>
            <option value="">Great Dane</option>
            <option value="">Siberian Husky</option>
            <option value="">German Shepard</option>
            <option value="">Great Dane</option>
            <option value="">Siberian Husky</option>
            <option value="">German Shepard</option>
            <option value="">Great Dane</option>
            <option value="">Siberian Husky</option>
            <option value="">German Shepard</option>
            <option value="">Great Dane</option>
            <option value="">Siberian Husky</option>
            <option value="">German Shepard</option>
            <option value="">Great Dane</option>
            <option value="">Siberian Husky</option>
            <option value="">German Shepard</option>
            <option value="">Great Dane</option>
            <option value="">Siberian Husky</option>
            <option value="">German Shepard</option>
            <option value="">Great Dane</option>
            <option value="">Siberian Husky</option>
            <option value="">German Shepard</option>
            <option value="">Great Dane</option>
            <option value="">Siberian Husky</option>
          </select>
        </div>
        <div className="mb-5">
          <div className=" flex space-x-1 w-full h-10 border-2 border-blue-900 rounded-md px-3 py-2 text-base font-normal text-black">
            <div className="mb-3 block text-base font-normal text-black">
              Breed
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex items-center">
                <label className="flex items-center cursor-pointer m-2">
                  <input
                    className="scale-125 mr-2 cursor-pointer"
                    type="radio"
                    name="breed"
                    value="p"
                    checked
                  />
                  <div className="title">Pure</div>
                </label>
              </div>
              <div className="flex items-center">
                <label className="flex items-center cursor-pointer m-2">
                  <input
                    className="scale-125 mr-2 cursor-pointer"
                    type="radio"
                    name="breed"
                    value="c"
                    checked
                  />
                  <div className="title">Cross</div>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-5">
          <input
            type="text"
            placeholder="Weight of your Pet? (In Kgs)"
            className="w-full h-10 border-2 border-blue-900 rounded-md px-3 py-2 text-base font-normal text-black"
          />
        </div>
        <div className="mb-5">
          <div className=" flex space-x-1 w-full h-10 border-2 border-blue-900 rounded-md px-3 py-2 text-base font-normal text-black">
            <div className="mb-3 block text-base font-normal text-black">
              Pet Size
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex items-center">
                <label className="flex items-center cursor-pointer m-2">
                  <input
                    className="scale-125 mr-2 cursor-pointer"
                    type="radio"
                    name="petsize"
                    value="s"
                    checked
                  />
                  <div className="title">S</div>
                </label>
              </div>
              <div className="flex items-center">
                <label className="flex items-center cursor-pointer m-2">
                  <input
                    className="scale-125 mr-2 cursor-pointer"
                    type="radio"
                    name="petsize"
                    value="m"
                    checked
                  />
                  <div className="title">M</div>
                </label>
              </div>
              <div className="flex items-center">
                <label className="flex items-center cursor-pointer m-2">
                  <input
                    className="scale-125 mr-2 cursor-pointer"
                    type="radio"
                    name="petsize"
                    value="l"
                    checked
                  />
                  <div className="title">L</div>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-5">
          <input
            type="text"
            placeholder="What's the stud fee? (In INR)"
            className="w-full h-10 border-2 border-blue-900 rounded-md px-3 py-2 text-base font-normal text-black"
          />
        </div>
        <div className="mb-5 text-center">
          <button className="bg-blue-500 text-white rounded-md px-2 py-1">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddNewPetpage;

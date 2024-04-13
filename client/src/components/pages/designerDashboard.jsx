import { useState } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";
import DesImage from "../../assets/desSide.svg";
import Navbar from "../navbar";

function DesignerDashboard() {
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("No file Selected");
  const [design, setDesign] = useState(null);
  const [DesignFileName, setDesignFileName] = useState("No file Selected");
  return (
    <>
      <Navbar />
      <div className="h-max flex items-center justify-center w-full bg-white">
        <div className="flex gap-4">
          <div className="ml-2">
            <img width={600} src={DesImage} alt="img" />
          </div>
        </div>
        <div className="drop-shadow-xl ml-11 flex w-full p-4 mt-3 border-l-2 rounded-lg">
          <div className="ml-[4rem] text-[20px] mx-6">
            <p className="font-customFont mb-6 text-4xl">Mint Design File</p>
            <div className="mx-2 my-4">
              <p className="mb-4 font-semibold">Title</p>
              <input
                id="title"
                name="title"
                type="text"
                placeholder="Abstract Background"
                className="focus:border-b-2 focus:border-gray-700 focus:outline-none peer bg-inherit py-1 transition-colors border-b border-gray-300"
              />
            </div>
            <div className="mx-2 my-4">
              <p className="mb-4 font-semibold">Description</p>
              <textarea
                id="message"
                rows="4"
                className="drop-shadow-none p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                placeholder="About the Design"
              ></textarea>
            </div>
            <div className="mx-2 my-4">
              <p className="mb-4 font-semibold">FIle Type</p>
              <select
                name="fileType"
                id="fileType"
                className="focus:border-b-2 focus:border-gray-700 focus:outline-none peer bg-inherit text-[18px] px-2 py-1 text-gray-700 transition-colors border-b border-gray-300"
              >
                <option disabled selected>
                  Choose a File Type
                </option>
                <option>AI</option>
                <option>SVG</option>
                <option>PNG</option>
                <option>JPG</option>
                <option>PS</option>
              </select>
            </div>
            <div className="mx-2 my-4">
              <p className="mb-4 font-semibold">Price (in TXDC)</p>
              <input
                id="title"
                name="title"
                type="number"
                min={0}
                placeholder="12000"
                className="focus:border-b-2 focus:border-gray-700 focus:outline-none peer bg-inherit py-1 transition-colors border-b border-gray-300"
              />
            </div>
          </div>
          <div className="ml-[12rem]">
            <div>
              <p className="m-2 text-lg">Preview Image</p>
              <div>
                <form
                  action=""
                  onClick={() => document.querySelector(".input-field").click()}
                  className="flex items-center rounded-lg my-3 justify-center border-2 border-gray-600 p-2 border-dashed w-[400px] h-[200px]"
                >
                  <input
                    type="file"
                    accept="image/*"
                    className="input-field"
                    hidden
                    onChange={({ target: { files } }) => {
                      files[0] && setFileName(files[0].name);
                      if (files) {
                        setImage(URL.createObjectURL(files[0]));
                      }
                    }}
                  />
                  {image ? (
                    <img src={image} width={40} height={40} alt={fileName} />
                  ) : (
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-2">
                        <IoCloudUploadOutline size={40} />
                      </div>
                      <p>Click to Upload or Drag and Drop</p>
                    </div>
                  )}
                </form>
              </div>
            </div>
            <div>
              <p className="m-2 text-lg">Main Desgin File</p>
              <div>
                <form
                  action=""
                  onClick={() => document.querySelector(".input-field").click()}
                  className="flex items-center rounded-lg my-3 justify-center border-2 border-gray-600 p-2 border-dashed w-[400px] h-[200px]"
                >
                  <input
                    type="file"
                    accept="image/*"
                    className="input-field"
                    hidden
                    onChange={({ target: { files } }) => {
                      files[0] && setDesignFileName(files[0].name);
                      if (files) {
                        setDesign(URL.createObjectURL(files[0]));
                      }
                    }}
                  />
                  {image ? (
                    <img
                      src={design}
                      width={40}
                      height={40}
                      alt={DesignFileName}
                    />
                  ) : (
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-2">
                        <IoCloudUploadOutline size={40} />
                      </div>
                      <p>Click to Upload or Drag and Drop</p>
                    </div>
                  )}
                </form>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button className="bg-violet-900 px-3 py-1.5 text-white rounded-lg">
                Mint Design
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DesignerDashboard;

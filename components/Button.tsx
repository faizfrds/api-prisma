"use client";

import React from "react";
import { HiPlus, HiX, HiTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";
import Popup from "reactjs-popup";

import { useState } from "react";

export default function Button() {
  const router = useRouter();

  const initialState = {
    title: "",
    content: "",
  };
  const [inputs, setInputs] = useState(initialState);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      console.log(inputs);
      const res = await fetch(`http://localhost:3000/api/get`, {
        method: "POST",
        body: JSON.stringify({
          ...inputs,
        }),
      });
      setOpen(false);
      router.refresh();

    } catch (error) {
      throw new Error("INVALID");
    }
  };

  const [open, setOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setOpen((prev) => !prev)}>
        <div className="">
          {open ? (
            <div className="text-white absolute right-4 top-10">
              <HiX />
            </div>
          ) : (
            <div className=" bg-blue-600 text-white rounded-full mx-3 p-3 hover:cursor-pointer hover:bg-blue-400 w-fit overflow-x-auto">
            <HiPlus size={40} />
            </div>
          )}
        </div>
      </button>

      {open ? (
        <div className="bg-blue-700 text-white rounded-lg m-auto w-fit h-[40vh] p-5">
          <form onSubmit={handleSubmit}>
            <h1>Add new post</h1>
            <div className="pb-5 flex-col flex">
              <label>Title</label>
              <input
                onChange={handleChange}
                className="text-black px-2"
                type="text"
                name="title"
                placeholder="Title"
              />
            </div>
            <div className="flex-col flex pb-4">
              <label>Content</label>
              <textarea
                onChange={handleChange}
                className="text-black h-[170px] p-2 rounded-md"
                placeholder="Write something here..."
                name="content"
              />
            </div>
            <button
              type="submit"
              className="bg-yellow-400 text-black p-3 rounded-full"
            >
              Upload
            </button>
          </form>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

import React from "react";

const add = () => {
  const router = useRouter();

  const [inputs, setInputs] = useState({
    title: "",
    content: "",
  });

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
      console.log(inputs)
      const res = await fetch(`${process.env.BASE_URL}/api/get`, {
        method: "POST",
        body: JSON.stringify({
          ...inputs,
        }),
      });
      router.refresh();
      
    } catch (error) {
        throw new Error("INVALID")
    }
    
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Add new post</h1>
        <div>
          <label>Title</label>
          <input
            onChange={handleChange}
            className="text-black"
            type="text"
            name="title"
          />
        </div>
        <div>
          <label>Content</label>
          <textarea
            onChange={handleChange}
            className="text-black"
            name="content"
          />
        </div>
        <button type="submit" className="bg-cyan-900">
          Upload
        </button>
      </form>
    </div>
  );
};

export default add;

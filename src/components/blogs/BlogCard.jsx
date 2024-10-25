import React from "react";

const BlogCard = ({ Img }) => {
  return (
    <>
      <div className="p-4 shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950 dark:text-white">
        <div className="overflow-hidden">
          <img
            src={Img}
            alt="no image"
            className="mx-auto h-[250px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
          />
        </div>
        <div className="flex justify-between pt-2 text-slate-600">
          <p>April 22, 2024</p>
          <p className="line-clamp-1">By Rider</p>
        </div>
        <div className="space-y-2 py-3">
          <h1 className="line-clamp-2 font-bold">How To Grow Your Business</h1>
          <p className="line-clamp-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde necessitatibus reprehenderit quo eius. Id, magnam.</p>
        </div>
      </div>
    </>
  );
};

export default BlogCard;

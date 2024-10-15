import React from "react";

interface BlogCardProps {
  imageSrc: string;
  title: string;
  description: string;
  tags: string[];
}

const BlogCard: React.FC<BlogCardProps> = ({
  imageSrc,
  title,
  description,
  tags,
}) => {
  return (
    <div className="flex flex-col md:flex-row border rounded-lg overflow-hidden shadow-lg mb-4">
      <div className="md:w-1/2">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="md:w-1/2 p-4 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          <p className="text-gray-700 mb-4">{description}</p>
        </div>
        <div className="flex flex-wrap">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-blue-500 text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;

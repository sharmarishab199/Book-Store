import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleBook = () => {
  const {
    bookPdfUrl,
    bookTitle,
    imageUrl,
    authorName,
    category,
    bookDescription,
  } = useLoaderData();

  return (
    <div className="px-4 lg:px-24 flex items-center mt-28">
      <div className="w-full ml-10">
        <img
          src={imageUrl}
          alt={bookTitle}
          className="w-[400px] h-[600px] object-cover"
        />
      </div>
      <div className="w-full">
        <h1 className="text-3xl font-bold mb-2">{bookTitle}</h1>
        <p className="text-gray-600 italic mb-10 ml-2 font-medium">
          By {authorName}
        </p>
        <p className="text-gray-600 mb-5 font-semibold">
          Category: <span className="text-blue-800 font-bold">{category}</span>
        </p>
        <p className="mt-4 text-gray-700 italic leading-relaxed">
          {bookDescription}
        </p>
        <div className="mt-4">
          <a
            href={bookPdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
          >
            Read Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default SingleBook;

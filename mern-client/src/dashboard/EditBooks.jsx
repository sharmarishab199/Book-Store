import React from 'react'
import { Button, Checkbox, Label, TextInput, Textarea } from 'flowbite-react';
import { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const EditBooks = () => {
  const {id}=useParams()
  const {bookTitle,authorName,imageUrl,category,bookDescription,bookPdfUrl}=useLoaderData()
  const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "Religious",
    "Horror",
    "Science Fiction",
    "Mistery",
    "Bibliography",
    "Fantasy",
    "Autobiographic",
    "Programming",
    "History",
    "Self-help",
    "Memoir",
    "Business",
    "Children Books",
    "Travel",
    "Art and Design"
  ]
  const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategories[0])

  const handleChangeSelectedValue = (event) => {
    setSelectedBookCategory(event.target.value)
  }

  //handle book submition
  const handelUpdate=(event)=>{
      event.preventDefault();
      const form =event.target;

      const bookTitle=form.bookTitle.value
      const authorName=form.authorName.value
      const imageUrl=form.imageUrl.value
      const category=selectedBookCategory
      const bookDescription=form.bookDescription.value
      const bookPdfUrl=form.bookPdfUrl.value

      const UpdateBookookObj={bookTitle,authorName,imageUrl,category,bookDescription,bookPdfUrl}
      // console.log(bookObj)

      fetch(`http://localhost:5000/book/${id}`,{
        method:"PATCH",
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify(UpdateBookookObj)
      }).then(res=>res.json()).then(data=>{
        alert("Book is Updated Successfully")
      })
  }
  return (
    <div className='px-4 my-12'>
      <h1 className='mb-8 text-3xl font-bold'>Update the Book Data</h1>

      <form onSubmit={handelUpdate} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
        {/* first row */}
        <div className='flex gap-8'>
          {/* book title */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" color="info" value="Book Title" />
            </div>
            <TextInput id="bookTitle" defaultValue={bookTitle} color="info" type="text" name='bookTitle' placeholder="Book Name" required />
          </div>

          {/* author name */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="authorName" color="info" value="Author Name" />
            </div>
            <TextInput id="authorName" defaultValue={authorName} type="text" color="info" name='authorName' placeholder="Author Name" required />
          </div>
        </div>

        {/* second row */}
        <div className='flex gap-8'>
          {/*image url*/}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="imageUrl" color="info" value="Book Image URL" />
            </div>
            <TextInput id="imageUrl" defaultValue={imageUrl} color="info" type="text" name='imageUrl' placeholder="Book Image URL" required />
          </div>

          {/*category*/}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="inputState" color="info" value="Book Category" />
            </div>

            <select name="categoryName" color="info" id="inputState" className='w-full rounded' value={category} onChange={handleChangeSelectedValue}>
              {
                bookCategories.map((option) => <option  key={option} value={option}>{option}</option>)
              }
            </select>

          </div>
        </div>

        {/* description */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookDescription"  color="gray"value="Write Your Book Description" />
          </div>
          <Textarea defaultValue={bookDescription} id="bookDescription" type="text" color="gray" name='bookDescription' placeholder="Leave a comment..." required rows={6} />
        </div>

        {/* book pdf link */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookPdfUrl" color="warning" value="Book PDF URL" />
          </div>
          <TextInput defaultValue={bookPdfUrl} id="bookPdfUrl" color="warning" type="text" name='bookPdfUrl' placeholder="Book Pdf Url" required />
        </div>

        <Button type="submit" className='mt-5'>Update Book</Button>
      </form>

    </div>
  )
}

export default EditBooks

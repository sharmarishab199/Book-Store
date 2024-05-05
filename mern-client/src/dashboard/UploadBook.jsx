import { Button, Label, TextInput, Textarea } from 'flowbite-react';
import { useState } from 'react';

const UploadBook = () => {
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
    console.log(event.target.value)
    setSelectedBookCategory(event.target.value)
  }

  //handle book submition
  const handelBookSubmit=(event)=>{
      event.preventDefault();
      const form =event.target;

      const bookTitle=form.bookTitle.value
      const authorName=form.authorName.value
      const imageUrl=form.imageUrl.value
      // const category=selectedBookCategory
      const category=form.categoryName.value
      const bookDescription=form.bookDescription.value
      const bookPdfUrl=form.bookPdfUrl.value

      const bookObj={bookTitle,authorName,imageUrl,category,bookDescription,bookPdfUrl}
      // console.log(bookObj)

      fetch("http://localhost:5000/upload-book",{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify(bookObj)
      }).then(res=>res.json()).then(data=>{
        console.log(data)
        alert("Book Uploaded Successfully")
        form.reset();
      })
  }
  return (
    <div className='px-4 my-12'>
      <h1 className='mb-8 text-3xl font-bold'>Upload a Book</h1>

      <form onSubmit={handelBookSubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
        {/* first row */}
        <div className='flex gap-8'>
          {/* book title */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" color="info" value="Book Title" />
            </div>
            <TextInput id="bookTitle" color="info" type="text" name='bookTitle' placeholder="Book Name" required />
          </div>

          {/* author name */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="authorName" color="info" value="Author Name" />
            </div>
            <TextInput id="authorName" type="text" color="info" name='authorName' placeholder="Author Name" required />
          </div>
        </div>

        {/* second row */}
        <div className='flex gap-8'>
          {/*image url*/}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="imageUrl" color="info" value="Book Image URL" />
            </div>
            <TextInput id="imageUrl" color="info" type="text" name='imageUrl' placeholder="Book Image URL" required />
          </div>

          {/*category*/}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="inputState" color="info" value="Book Category" />
            </div>

            <select name="categoryName" color="info" id="inputState" className='w-full rounded' value={selectedBookCategory} onChange={handleChangeSelectedValue}>
              {
                bookCategories.map((option) => <option key={option} value={option}>{option}</option>)
              }
            </select>

          </div>
        </div>

        {/* description */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookDescription"  color="gray"value="Write Your Book Description" />
          </div>
          <Textarea id="bookDescription" type="text" color="gray" name='bookDescription' placeholder="Leave a comment..." required rows={6} />
        </div>

        {/* book pdf link */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookPdfUrl" color="warning" value="Book PDF URL" />
          </div>
          <TextInput id="bookPdfUrl" color="warning" type="text" name='bookPdfUrl' placeholder="Book Pdf Url" required />
        </div>

        <Button type="submit" className='mt-5'>Upload Book</Button>
      </form>

    </div>
  )
}

export default UploadBook

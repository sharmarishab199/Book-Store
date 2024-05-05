import { useEffect } from 'react'
import { useState } from 'react'
// import BookCards from '../components/BookCards'
import OtherBookCards from '../components/OtherBookCards'

const OtherBooks = () => {
    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/all-books").then(res => res.json()).then(data => { setBooks(data.slice(10,20)) })
    }, [])
    return (
        <div>
            <OtherBookCards books={books}  headline="Other Books" />
        </div>
    )
}

export default OtherBooks


import { useState } from 'react';
import './App.css'



const Bookshelf =() => {

    const [books, setBooks] = useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },]);
    const [newBooks , setNewBooks] = useState({
         title:'',
         author:'',
    }) 

    const handleInputChange = (e) =>{
         
        setNewBooks({...newBooks,
            [e.target.name]:e.target.value,
        })

   


    }

   const handleSubmit = (event) =>{
    event.preventDefault()
    setBooks([...books, newBooks])
    setNewBooks({
        title:'',
        author:'',
   })

   }





    return(

        <div className="bookshelfDiv">
       <div className="formDiv">
       <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>

        <label htmlFor="">Title :</label>
        <input type="text"
        value={newBooks.title}
        onChange={handleInputChange}
        name='title'
        
        />

       <label htmlFor="">author :</label>
        <input type="text"
        value={newBooks.author}
        onChange={handleInputChange}
        name='author'
        
        />




           <button type="submit">submit</button>
      </form>
     </div>
        <div className="bookCardsDiv">{books.map((book) => (
           <div className='book card'>
             <h5>Book Title: {book.title} </h5>
              <h5>Book Author:{book.author} </h5>
           </div>
        ))}
                              
         </div>
     
     </div>





    )

}


export default Bookshelf






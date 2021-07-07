import './App.css'

//SETUP VARS

const firstBook = {
title: 'firstBook',
author: 'Lain Smith',
img: "https://img3.labirint.ru/rc/54d5d5f5177bb0a0e013748414ab278f/220x340/books52/519519/cover.jpg?1563881242"
}

const secondBook = {
title: 'secondBook',
author: 'Ruslan Epishin',
img: "https://img3.labirint.ru/rc/54d5d5f5177bb0a0e013748414ab278f/220x340/books52/519519/cover.jpg?1563881242"
}

function App() {
return <BookList />
}

const BookList = () => {
return (
  
  <div className="booklist">
    <Book img={firstBook.img} title={firstBook.title} author={firstBook.author}>
    <p>description</p>
    </Book>
    <Book img={secondBook.img} title={secondBook.title} author={secondBook.author} />
    
  </div>
  
)
}

const Book = ({img, title, author, children}) => {
return (
  <article className="book">
    <img src={img} />
    <h1>{title}</h1>
    <h4>{author}</h4>
    <p>{children}</p>
    <br></br>
  </article>
)
}

export default App

import './App.css'

function App() {
  return <BookList />
}

const BookList = () => {
  return (
    <div>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </div>
  )
}

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
      <hr></hr>
    </article>
  )
}

const Image = () => {
  return <img alt='123' />
}

const Title = () => {
  return <h1>title of my book</h1>
}

const Author = () => {
  return <h4>Epishin Ruslan dmitriyevich</h4>
}

export default App

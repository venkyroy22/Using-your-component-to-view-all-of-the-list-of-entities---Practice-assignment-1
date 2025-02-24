import React from "react";
import BookCard from "./components/bookcard";

const books = [
  { 
    title: "The Great Gatsby", 
    author: "F. Scott Fitzgerald", 
    year: 1925, 
    image: "https://m.media-amazon.com/images/I/81af+MCATTL._AC_UF1000,1000_QL80_.jpg"
  },
  { 
    title: "1984", 
    author: "George Orwell", 
    year: 1949, 
    image: "https://m.media-amazon.com/images/I/71kxa1-0mfL.jpg"
  },
  { 
    title: "To Kill a Mockingbird", 
    author: "Harper Lee", 
    year: 1960, 
    image: "https://m.media-amazon.com/images/I/71smIoGNeiL._UF1000,1000_QL80_.jpg"
  },
  { 
    title: "Moby-Dick", 
    author: "Herman Melville", 
    year: 1851, 
    image: "https://m.media-amazon.com/images/I/71K4OH9CqOL._UF1000,1000_QL80_.jpg"
  }
];

function App() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Digital Library</h1>
      <div style={styles.grid}>
        {books.map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  grid: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "16px",
  },
};

export default App;

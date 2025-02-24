import React from "react";

function BookCard({ book }) {
  return (
    <div style={styles.card}>
      <img src={book.image} alt={book.title} style={styles.image} />
      <h2 style={styles.title}>{book.title}</h2>
      <p style={styles.text}><strong>Author:</strong> {book.author}</p>
      <p style={styles.text}><strong>Published:</strong> {book.year}</p>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "16px",
    margin: "10px",
    backgroundColor: "#f9f9f9",
    boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    width: "250px",
  },
  image: {
    width: "100%",
    height: "300px",
    objectFit: "cover",
    borderRadius: "5px",
  },
  title: {
    fontSize: "18px",
    fontWeight: "bold",
    marginTop: "10px",
    color:'black'
  },
  text: {
    fontSize: "14px",
    color: "#333",
  },
};

export default BookCard;

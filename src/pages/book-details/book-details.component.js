import React from "react";

class BookDetailComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      books: [
        {
          id: "1",
          name: "Veronica decide morir",
          description: "My first book",
          publish_date: "1999-12-12",
          imageUrl: "./img/vdm.jpg"
        },
        {
          id: "2",
          name: "Fifty shades of grey",
          description: "My second book",
          publish_date: "1999-12-12",
          imageUrl: "./img/fiftyShades.jpg"
        },
        {
          id: "3",
          name: "Fifty shades darker",
          description: "My second book",
          publish_date: "1999-12-12",
          imageUrl: "./img/darker.jpeg"
        }
      ]
    };
  }

  operation() {}

  renderTable() {
    return this.state.books.map((book, index) => {
      const { id, name, description, publish_date, imageUrl } = book;
      return (
        <tr key={id}>
          <td>
            <img
              className="image-container"
              src={imageUrl}
              alt="book cover"
            ></img>
          </td>
          <td>{id}</td>
          <td>{name}</td>
          <td>{description}</td>
          <td>{publish_date}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>
                <button className="btn btn-dark" type="button">
                  Hide image
                </button>
              </th>
              <th scope="col">id</th>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col">Publish date</th>
            </tr>
          </thead>
          <tbody>{this.renderTable()}</tbody>
        </table>
      </div>
    );
  }
}

export default BookDetailComponent;

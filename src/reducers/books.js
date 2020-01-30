const books = (
  state = [
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
  ],
  action
) => {
  switch (action.type) {
    case "SEARCH_BOOK":
      return [
        ...state,
        {
          name: action.name,
          description: action.description,
          publish_date: action.publish_date,
          image_url: action.image_url
        }
      ];
    default:
      return state;
  }
};

export default books;

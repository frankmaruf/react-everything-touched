import PropTypes from "prop-types";
const Article = ({ name, title, email }) => {
  return (
    <>
      <h3>{name || "name"}</h3>
      <h4>{email || "email"}</h4>
      <h5>{title || "title"}</h5>
    </>
  );
};

// <<
// if we get have any Object we should define it like this
// PropTypes.object.isRequired;
// if we get have any number we should define it like this
// PropTypes.number.isRequired;
// if we have any imge with missing we can use default image
// defaultProps{
//  image:defaultImage
// }
// >>

//  We can use shortcut rafcp
Article.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
Article.defaultProps = {
  name: "default name",
  title: "default title",
  email: "default email",
};
export default Article;

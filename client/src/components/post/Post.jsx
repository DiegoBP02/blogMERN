import { Link } from "react-router-dom";
import "./post.css";

export default function Post({ post }) {
  const { title, createdAt, description, categories, photo, _id } = post;

  const PF = "http://localhost:5000/images/";
  return (
    <div className="post">
      {photo && <img className="postImg" src={PF + photo} alt="" />}
      <div className="postInfo">
        <div className="postCats">
          {categories.map((category) => {
            return <span className="postCat">{category}</span>;
          })}
        </div>
        <span className="postTitle">
          <Link to={`/post/${_id}`} className="link">
            {title}
          </Link>
        </span>
        <hr />
        <span className="postDate">{new Date(createdAt).toDateString()}</span>
      </div>
      <p className="postDesc">{description}</p>
    </div>
  );
}

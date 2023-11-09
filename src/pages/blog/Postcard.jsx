import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
const Postcard = ({ post }) => {
  return (
    <Link to={"/blog/" + post.slug} className="card-link">
      <Card>
        <div className="card-img">
          <Card.Img variant="top" src={post.image} />
          <div className="card-info">
            <small>By: {post.user}</small>
          </div>
        </div>
        <Card.Body>
          <Card.Title>{post.titlt}</Card.Title>
          <Card.Text>{post.execcert}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default Postcard;

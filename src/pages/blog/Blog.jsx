import React, { useContext, useEffect, useRef } from "react";
import { PostsContext } from "../../PostsContext";
import Postcard from "./Postcard";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";

const Blog = () => {
  const { fetch, data, loading, error } = useContext(PostsContext);
  const isMount = useRef(false);

  useEffect(() => {
    if (!isMount.current) {
      fetch();
      isMount.current = true;
    }
  }, []);
  return (
    <>
      <div className="container">
        <h2 className="text-center py-4 fw-bold"> Lasted posts</h2>
        {loading ? (
          <div className="text-center">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        ) : null}
        {error ? (
          <div>
            <Alert variant="danger">{error}</Alert>
          </div>
        ) : null}

        {(!error || loading) && data ? (
          <div className="row">
            {data.map((post) => (
              <div key={post.id} className="col-sm-12 col-md-6 col-lg-3 mb-4">
                <Postcard post={post} />
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Blog;

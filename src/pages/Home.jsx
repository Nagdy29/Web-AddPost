import React, { useContext, useEffect, useRef } from "react";
import logoo from "../assint/images/logo.png";
import { useNavigate } from "react-router-dom";
import { PostsContext } from "../PostsContext";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import Postcard from "./blog/Postcard";
const Home = () => {
  const { fetch, data, loading, error } = useContext(PostsContext);
  const isMount = useRef(false);

  useEffect(() => {
    if (!isMount.current) {
      fetch();
      isMount.current = true;
    }
  }, []);
  const navgit = useNavigate();
  return (
    <>
      <section className="py-5">
        <div className="container d-flex align-items-center justify-content-center text-center bg-light">
          <div className="row contant">
            <div className="col-sm-12 col-md-10 col-lg-8 mx-auto">
              <img src={logoo} alt="logoo" />
              <p className="py-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem mollitia nesciunt ex, nulla amet, tenetur
                quisquam dolores quam distinctio cum explicabo recusandae ipsam
                sint? Quos iste libero enim minima tempora quidem pariatur eos,
                tempore quisquam modi ipsa corporis molestias similique?
              </p>
              <div className="py-3">
                <button
                  className="btn btn-outline-primary"
                  onClick={() => navgit("/blog/new")}
                >
                  Add New Article
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-3">
        <div className="container px-4">
          <h1 className="text-center py-4">Latest Articales</h1>
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
              {data.slice(0, 4).map((post) => (
                <div key={post.id} className="col-sm-12 col-md-6 col-lg-3 mb-4">
                  <Postcard post={post} />
                </div>
              ))}
            </div>
          ) : null}
          <div className="text-center py-5">
            <button
              className="btn btn-outline-secondary text-center px-4"
              onClick={() => navgit("/blog")}
            >
              See all
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

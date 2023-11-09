import React, { useContext, useState } from "react";
import Form from "react-bootstrap/Form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { FirebaseContext, FirebaseProvider } from "../../FirebaseContext";
import { useNavigate } from "react-router-dom";

const Newpost = () => {
  const navgit = useNavigate();
  const [Body, setbody] = useState("");
  const [Ladding, setLadding] = useState(false);
  const { db } = useContext(FirebaseContext);

  const handilsubmit = async (e) => {
    e.preventDefault();
    const titlt = e.target.titlt.value;
    const execcert = e.target.execcert.value;
    const image = e.target.image.value;
    const slug = titlt.split("").join("-") + "-" + new Date().getTime();
    console.log(titlt, slug);
    setLadding(true);

    try {
      const colRef = collection(db, "posts");
      await addDoc(colRef, {
        titlt,
        slug,
        execcert,
        image,
        Body,
        user: "mohamed",
        createdAt: serverTimestamp(),
      });
      e.target.reset();
      setbody("");

      setLadding(false);
      navgit("/blog/ " + slug);
    } catch (error) {
      console.log(error);
    }

    setLadding(false);
  };

  return (
    <>
      <div className="container  py-5">
        <div className="row">
          <div className="col-md-8 col-lg-6 mx-auto">
            <h2>Add New Post</h2>
            <Form className="py-4x" onSubmit={handilsubmit}>
              <Form.Group className="mb-3" controlId="formBasicTittle">
                <Form.Label>Post Tittle </Form.Label>
                <Form.Control
                  type="text"
                  name="titlt"
                  placeholder="Enter Tittle"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicExecert">
                <Form.Label>Post Execcert</Form.Label>
                <Form.Control
                  type="text"
                  name="execcert"
                  placeholder="Enter post title"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicImage">
                <Form.Label>Post Image</Form.Label>
                <Form.Control
                  type="text"
                  name="image"
                  placeholder="Enter image Url"
                />
              </Form.Group>
              <ReactQuill theme="snow" value={Body} onChange={setbody} />;
              <button className="btn btn-outline-primary w-100" type="submit">
                Send
              </button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newpost;

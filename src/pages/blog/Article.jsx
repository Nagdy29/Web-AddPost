import React, { useEffect, useRef } from "react";
import { Card, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useFetchDocParam from "../../compontens/useFetchDocParam";

const getDate = (d) => {
  const date = new Date(d);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};

const Article = () => {
  const params = useParams();
  const { getData, data, loading, error } = useFetchDocParam(
    "posts",
    params.slug
  );

  const isMount = useRef(null);

  useEffect(() => {
    if (!isMount.current) {
      getData();
      isMount.current = true;
    }
  }, []);

  if (loading) return <p> loading .... </p>;

  if (!data) return null;

  console.log(data);

  return (
    <article className="article d-flex align-items-center flex-column justify-content-center p-4 text-center">
      <div>
        <img src={data.image} alt={data.title} className="w-25 mb-5" />
      </div>
      <Container>
        <Row>
          <Card>
            <Card.Body>
              <Card.Title> {data.title} </Card.Title>
              <Card.Subtitle className="mt-2 text-muted">
                <small> By: {data.user}</small>
                <small> {getDate(data.createdAt)} </small>
              </Card.Subtitle>
              <div
                className="mt-5"
                dangerouslySetInnerHTML={{ __html: data.body }}
              ></div>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </article>
  );
};

export default Article;

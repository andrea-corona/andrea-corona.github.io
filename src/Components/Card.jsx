import React from "react";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";

const ProjectCard = ({ title, description, url, img, imageAltText }) => {
  return (
    <Card>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <Card.Body className="box">
          <Card.Img
            variant="top"
            src={img}
            alt={imageAltText}
            style={{
              height: "200px",
              width: "100%",
              margin: " 0 0 20px 0",
            }}
          />
          <Card.Title style={{ flexBasis: "40px" }}>{title}</Card.Title>
          <Card.Text className="small">{description}</Card.Text>
        </Card.Body>
      </a>
    </Card>
  );
};

ProjectCard.defaultProps = {
  title: "",
  description: "",
  url: "",
  img: "",
  imageAltText: "",
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  imageAltText: PropTypes.string.isRequired,
};

export default ProjectCard;

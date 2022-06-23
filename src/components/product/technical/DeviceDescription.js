import React, { useState } from "react";
import TertiaryHeading from "../../layout/headings/TertiaryHeading";
import editIcon from "../../../images/edit-icon.png";
import { Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { fieldApi } from "../../data/api";

const schema = yup.object().shape({
  description: yup
    .string()
    .required("Message is required")
    .min(10, "Your message must be at least 10 characters")
    .max(200, "Your message must be no more than 200 characters"),
});

function DeviceDescription() {
  const [displayModalForm, setDisplayModalForm] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

  function onSubmit(data) {
    console.log(data);
  }

  function displayModal(event, index) {
    setModalIndex(index);

    setDisplayModalForm(!displayModalForm);
    if (event.target.localName === "li") {
      setDisplayModalForm(true);
    }
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <>
      <ol>
        <li>
          <TertiaryHeading title="DEVICE DESCRIPTION AND SPECIFICATION, INCLUDING VARIANTS AND ACCESSORIES" />
          <Form
            onSubmit={handleSubmit(onSubmit)}
            className={`contactform p-3 d-flex flex-column mx-auto`}
            autoComplete="off"
          >
            <ol>
              <li>
                DEVICE DESCRIPTION AND SPECIFICATION
                <ul>
                  {fieldApi.map((category, index) => (
                    <li key={category.id}>
                      <Row>
                        <Col md={10}>
                          <h5>{category.title}</h5>
                          <p>{category.info}</p>
                        </Col>
                        <Col md={2}>
                          <img
                            onClick={(event) => displayModal(event, index)}
                            src={editIcon}
                            className="w-25"
                          />
                        </Col>
                      </Row>
                    </li>
                  ))}
                </ul>
                <div
                  className={`modal ${displayModalForm ? "d-block" : "d-none"}`}
                >
                  <span
                    onClick={(event) => displayModal(event, 0)}
                    className="modal--close "
                    alt="close icon"
                  >
                    &times;
                  </span>
                  <div className="modal--content bg-secondary p-3">
                    <Row>
                      <Col>
                        <h5>Navigation</h5>
                        <ul>
                          {fieldApi.map((item, index) => (
                            <li
                              key={item.id}
                              onClick={(event) => displayModal(event, index)}
                              className={`p-2 rounded ${
                                index === modalIndex ? "bg-white" : ""
                              }`}
                            >
                              {item.title}
                            </li>
                          ))}
                        </ul>
                      </Col>
                      <Col>
                        <h5 className="text-center">Info</h5>
                        <p>{fieldApi[modalIndex].info}</p>
                      </Col>
                      <Col>
                        <h5 className="text-center">Video</h5>
                        <div className="p-5 border bg-white">
                          {fieldApi[modalIndex].video}
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </li>
            </ol>
          </Form>
        </li>
        <li>
          <TertiaryHeading title="INFORMATION TO BE SUPPLIED BY THE MANUFACTURER" />
        </li>
        <li>
          <TertiaryHeading title="DESIGN AND MANUFACTURING INFORMATION" />
        </li>
      </ol>
    </>
  );
}

export default DeviceDescription;

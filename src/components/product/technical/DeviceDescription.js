import React, { useState } from "react";
import TertiaryHeading from "../../layout/headings/TertiaryHeading";
import editIcon from "../../../images/edit-icon.png";
import { Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  description: yup
    .string()
    .required("Message is required")
    .min(10, "Your message must be at least 10 characters")
    .max(200, "Your message must be no more than 200 characters"),
});

function DeviceDescription() {
  const [displayModalForm, setDisplayModalForm] = useState(false);

  function onSubmit(data) {
    console.log(data);
  }

  function displayModal() {
    console.log("hi");
    setDisplayModalForm(!displayModalForm);
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
                  <li>
                    <Row>
                      <Col md={10}>
                        <h5>(a) General description of device </h5>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.
                        </p>
                        <div
                          className={`modal ${
                            displayModalForm ? "d-block" : "d-none"
                          }`}
                        >
                          <span
                            onClick={displayModal}
                            className="modal--close "
                            alt="close icon"
                          >
                            &times;
                          </span>
                          <div className="modal--content">
                            <Form.Label
                              htmlFor="message"
                              className="text-white mt-3"
                            >
                              General Description of a Device
                            </Form.Label>
                            <Form.Control
                              {...register("description")}
                              id="description"
                              placeholder="Max 200 words"
                            />
                            {errors.description && (
                              <div className="mb-3 text-danger">
                                {errors.description.message}
                              </div>
                            )}
                          </div>
                        </div>
                      </Col>
                      <Col md={2}>
                        <img
                          onClick={displayModal}
                          src={editIcon}
                          className="w-25"
                        />
                      </Col>
                    </Row>
                  </li>
                  <li>
                    <Row>
                      <Col md={10}>
                        <h5> (b) Intende Purpose </h5>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut en
                        </p>
                      </Col>
                      <Col md={2}>
                        <img src={editIcon} className="w-25" />
                      </Col>
                    </Row>
                  </li>
                  <li>
                    <Row>
                      <Col md={10}>
                        <h5> (c) Intended User </h5>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt
                        </p>
                      </Col>
                      <Col md={2}>
                        <img src={editIcon} className="w-25" />
                      </Col>
                    </Row>
                  </li>
                </ul>
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

import { CountryData } from "../../Data/CountryData";
import "./Countries.css";
import { useState } from "react";
import Tippy from "@tippyjs/react/headless";
import { Formik, Form, Field } from "formik";
import { SignupSchema } from "../CountrySchema/index";

function Countries() {
  const [data, setData] = useState(CountryData);
  const [id, setID] = useState(null);

  const handleYes = (code) => {
    setData(data.filter((country) => country.code !== code));
  };

  const toggleTippyVisibility = (index) => {
    setID(id === index ? null : index);
  };

  const handleAdd = (values) => {
    console.log(values);
    setData([...data, values]);
  };
  const handleEdit = (values, index) => {
    const newData = [...data];

    // Replace the item at the specified index with the new values
    newData[index] = values;

    // Update the state with the new data array
    setData(newData);
    setID(null);
  };
  return (
    <div className="wrapper">
      <Tippy
        trigger="click"
        theme="tippy"
        interactive
        render={(attrs) => (
          <div className="box" tabIndex="-1" {...attrs}>
            <h3>Enter the data you want to add</h3>
            <Formik
              initialValues={{
                name: "",
                code: "",
                description: "",
              }}
              validationSchema={SignupSchema}
              onSubmit={(values) => {
                handleAdd(values);
              }}
            >
              {({ errors, touched }) => (
                <Form className="form">
                  <Field name="name" placeholder="Name" className="input" />
                  {errors.name && touched.name ? (
                    <div className="error">{errors.name}</div>
                  ) : null}
                  <Field name="code" placeholder="Code" className="input" />
                  {errors.code && touched.code ? (
                    <div className="error">{errors.code}</div>
                  ) : null}
                  <Field
                    name="description"
                    placeholder="Description"
                    type="text"
                    className="input"
                  />
                  {errors.description && touched.description ? (
                    <div className="error">{errors.description}</div>
                  ) : null}
                  <button type="submit" className="border-none button-add">
                    Add
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        )}
      >
        {/* {({ isVisible }) => ( */}
        <button className=" button-add-country">Add new Country</button>
        {/* )} */}
      </Tippy>

      <div className="table">
        {data && (
          <table style={{ width: "80%" }}>
            <thead>
              <tr>
                <th style={{ width: "10%" }}>Code</th>
                <th style={{ width: "20%" }}>Name</th>
                <th style={{ width: "40%" }}>Description</th>
                <th style={{ width: "30%" }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((country, index) => (
                <tr key={index}>
                  <td>{country.code}</td>
                  <td>{country.name}</td>
                  <td>{country.description}</td>
                  <td className="center">
                    <Tippy
                      trigger="click"
                      theme="tippy"
                      interactive
                      render={(attrs) => (
                        <div className="box" tabIndex="-1" {...attrs}>
                          <h3>Enter the data you want to edit</h3>

                          <Formik
                            initialValues={{
                              name: country.name,
                              code: country.code,
                              description: country.description,
                            }}
                            validationSchema={SignupSchema}
                            enableReinitialize
                            onSubmit={(values) => {
                              handleEdit(values, index);
                            }}
                          >
                            {({ errors, touched }) => (
                              <Form className="form">
                                <Field
                                  name="name"
                                  placeholder="Name"
                                  className="input"
                                  // value={country.name}
                                />
                                {errors.name && touched.name ? (
                                  <div className="error">{errors.name}</div>
                                ) : null}
                                <Field
                                  name="code"
                                  placeholder="Code"
                                  className="input"
                                  // value={country.code}
                                />
                                {errors.code && touched.code ? (
                                  <div className="error">{errors.code}</div>
                                ) : null}
                                <Field
                                  name="description"
                                  placeholder="Description"
                                  type="text"
                                  className="input"
                                  // value={country.description}
                                />
                                {errors.description && touched.description ? (
                                  <div className="error">
                                    {errors.description}
                                  </div>
                                ) : null}
                                <button
                                  type="submit"
                                  className="border-none button-add"
                                >
                                  Edit
                                </button>
                              </Form>
                            )}
                          </Formik>
                        </div>
                      )}
                    >
                      <button>Edit</button>
                    </Tippy>

                    <Tippy
                      visible={id === index}
                      interactive
                      onClickOutside={() => setID(null)}
                      render={(attrs) => (
                        <div className="box" tabIndex="-1" {...attrs}>
                          <h3>Do you want to confirm delete?</h3>

                          <div className="button-wrapper">
                            <button
                              className="border-none"
                              onClick={() => {
                                handleYes(country.code);
                                setID(null);
                              }}
                            >
                              Yes
                            </button>
                            <button
                              className="border-none"
                              onClick={() => setID(null)}
                            >
                              No
                            </button>
                          </div>
                        </div>
                      )}
                    >
                      <button onClick={() => toggleTippyVisibility(index)}>
                        Delete
                      </button>
                    </Tippy>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default Countries;

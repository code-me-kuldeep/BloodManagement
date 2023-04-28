import React, { useState } from "react";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function DonateBloodForm() {
  const [notification, setNotification] = useState(null);
  const [loading, setLoading] = useState(null);

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        age: "age",
        phone: "phone",
        group: "",
        gender: "",
      }}
      validationSchema={Yup.object({
        firstName: Yup.string().required("First Name cannot be empty"),
        lastName: Yup.string().required("Last Name cannot be empty"),
        email: Yup.string()
          .email("Looks like this is not an email")
          .required("Email cannot be empty"),
        age: Yup.number().required("Age cannot be empty"),
        phone: Yup.number().required("Phone cannot be empty"),
        group: Yup.string().required("Blood Group cannot be empty"),
      })}
      onSubmit={async (values, actions) => {
        console.log(values);
        console.log("happening");
        const responseBody = {
          name: values.firstName + " " + values.lastName,
          age: values.age,
          gender: values.gender,
          group: values.group,
          email: values.email,
          phone: values.phone,
        };
        console.log(responseBody);
        try {
          setLoading(true);
          await fetch("http://localhost:3002/api/donate", {
            method: "POST",
            body: JSON.stringify(responseBody),
            headers: {
              "Content-Type": "application/json",
            },
          });
          setNotification(
            "Form Successfully submitted. Check your mail for confirmation"
          );
          setTimeout(() => {
            actions.resetForm();
          }, 2000);
          setLoading(false);
        } catch (error) {
          console.log(error);
        }
      }}
    >
      <Form className="flex flex-col p-0 mt-5 space-y-4 text-black bg-white rounded-lg shadow-xl lg:p-10 lg:space-y-6">
        <h1 className="text-xl">Blood Donation Form</h1>
        <p className="text-purple-600">{notification}</p>
        <Field name="firstName">
          {({ field, form }) => (
            <div className="relative">
              <label
                htmlFor="firstName"
                aria-label="First Name"
                className="hidden"
              >
                First Name
              </label>
              <input
                {...field}
                className="w-full p-4 font-semibold placeholder-gray-500 border rounded-lg outline-none lg:px-8 focus:ring-accent-blue focus:ring-1"
                placeholder="First Name"
                type="text"
                name="firstName"
                id="firstName"
                style={
                  form.touched.firstName && form.errors.firstName
                    ? { border: "2px solid var(--primary-red)" }
                    : null
                }
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="absolute w-10 text-primary-red right-8 top-2.5"
                style={
                  form.touched.firstName && form.errors.firstName
                    ? { display: "block" }
                    : { display: "none" }
                }
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          )}
        </Field>
        <ErrorMessage
          name="firstName"
          component="div"
          className="text-xs italic text-right text-primary-red"
          style={{ marginTop: "0.5rem" }}
        />
        <Field name="lastName">
          {({ field, form }) => (
            <div className="relative">
              <label
                htmlFor="lastName"
                aria-label="Last Name"
                className="hidden"
              >
                Last Name
              </label>
              <input
                {...field}
                className="w-full p-4 font-semibold placeholder-gray-500 border rounded-lg outline-none lg:px-8 focus:ring-accent-blue focus:ring-1"
                placeholder="Last Name"
                type="text"
                name="lastName"
                id="lastName"
                style={
                  form.touched.lastName && form.errors.lastName
                    ? { border: "2px solid var(--primary-red)" }
                    : null
                }
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="absolute w-10 text-primary-red right-8 top-2.5"
                style={
                  form.touched.lastName && form.errors.lastName
                    ? { display: "block" }
                    : { display: "none" }
                }
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          )}
        </Field>
        <ErrorMessage
          name="lastName"
          component="div"
          className="text-xs italic text-right text-primary-red"
          style={{ marginTop: "0.5rem" }}
        />
        <Field name="email">
          {({ field, form }) => (
            <div className="relative">
              <label htmlFor="email" aria-label="Email" className="hidden">
                Email
              </label>
              <input
                {...field}
                className="w-full p-4 font-semibold placeholder-gray-500 border rounded-lg outline-none lg:px-8 focus:ring-accent-blue focus:ring-1"
                placeholder="Email"
                type="text"
                name="email"
                id="email"
                style={
                  form.touched.email && form.errors.email
                    ? { border: "2px solid var(--primary-red)" }
                    : null
                }
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="absolute w-10 text-primary-red right-8 top-2.5"
                style={
                  form.touched.email && form.errors.email
                    ? { display: "block" }
                    : { display: "none" }
                }
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          )}
        </Field>
        <ErrorMessage
          name="email"
          component="div"
          className="text-xs italic text-right text-primary-red"
          style={{ marginTop: "0.5rem" }}
        />

        <div className="flex gap-5">
          <div>
            <Field name="age">
              {({ field, form }) => (
                <div className="relative">
                  <input
                    {...field}
                    className="w-full p-4 font-semibold placeholder-gray-500 border rounded-lg outline-none lg:px-8 focus:ring-accent-blue focus:ring-1"
                    placeholder="Age"
                    type="number"
                    name="age"
                    id="age"
                    style={
                      form.touched.age && form.errors.age
                        ? { border: "2px solid var(--primary-red)" }
                        : null
                    }
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="absolute w-10 text-primary-red right-8 top-2.5"
                    style={
                      form.touched.age && form.errors.age
                        ? { display: "block" }
                        : { display: "none" }
                    }
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              )}
            </Field>
            <ErrorMessage
              name="age"
              component="div"
              className="text-xs italic text-right text-primary-red"
              style={{ marginTop: "0.5rem" }}
            />
          </div>
          <div>
            <Field name="phone">
              {({ field, form }) => (
                <div className="relative">
                  <input
                    {...field}
                    className="w-full p-4 font-semibold placeholder-gray-500 border rounded-lg outline-none lg:px-8 focus:ring-accent-blue focus:ring-1"
                    placeholder="Phone Number"
                    type="number"
                    name="phone"
                    id="phone"
                    style={
                      form.touched.phone && form.errors.phone
                        ? { border: "2px solid var(--primary-red)" }
                        : null
                    }
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="absolute w-10 text-primary-red right-8 top-2.5"
                    style={
                      form.touched.phone && form.errors.phone
                        ? { display: "block" }
                        : { display: "none" }
                    }
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              )}
            </Field>
            <ErrorMessage
              name="phone"
              component="div"
              className="text-xs italic text-right text-primary-red"
              style={{ marginTop: "0.5rem" }}
            />
          </div>
        </div>

        <div className="flex gap-5">
          <div>
            <Field name="group">
              {({ field, form }) => (
                <div className="relative">
                  <select
                    {...field}
                    className="w-full p-4 font-semibold placeholder-gray-500 border rounded-lg outline-none lg:px-8 focus:ring-accent-blue focus:ring-1"
                    name="group"
                    style={
                      form.touched.group && form.errors.group
                        ? { border: "2px solid var(--primary-red)" }
                        : null
                    }
                  >
                    <option value="">Blood Group</option>
                    <option value="A+">A+</option>
                    <option value="B+">B+</option>
                    <option value="O+">O+</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="B-">B-</option>
                    <option value="A-">A-</option>
                    <option value="O-">O-</option>
                  </select>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="absolute w-10 text-primary-red right-8 top-2.5"
                    style={
                      form.touched.group && form.errors.group
                        ? { display: "block" }
                        : { display: "none" }
                    }
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              )}
            </Field>
            <ErrorMessage
              name="group"
              component="div"
              className="text-xs italic text-right text-primary-red"
              style={{ marginTop: "0.5rem" }}
            />
          </div>
          <div className="flex justify-center items-center gap-5">
            <label>
              <Field type="radio" name="gender" value="Male" />
              <span className="px-2">Male</span>
            </label>
            <label>
              <Field type="radio" name="gender" value="Female" />
              <span className="px-2">Female</span>
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="py-4 text-sm tracking-wide text-black uppercase rounded-lg shadow-xl outline-none lg:text-base bg-red-300 hover:bg-opacity-75 focus:outline-none "
        >
          {loading ? <>Submitting...</> : <>Donate Blood</>}
        </button>
        <div className="text-xs font-medium text-gray-800 ">
          By clicking the button, you are agreeing to our{" "}
          <span className="text-xs font-medium text-primary-red">
            Terms and Services
          </span>
          <div className="text-red">{notification}</div>
        </div>
      </Form>
    </Formik>
  );
}

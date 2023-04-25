import Main from '../components/Main'

import { ActionArgs, json, redirect } from "@remix-run/node"; // or cloudflare/deno
import { Form, useActionData } from '@remix-run/react';
// import { sendMail } from '~/entry.server';
import { renderToString } from 'react-dom/server';
import { useCallback, useEffect, useState } from 'react';


interface ContactFormResults {
  name?: string,
  email?: string,
  phone?: string,
  message?: string,
  recaptchaToken?: string,
}

export function ContactEmail(props: ContactFormResults) {
  let dateStr = (new Date()).toLocaleString();
  return <>
    {`Hello, you have received a contact request from ${props.name} at ${dateStr}:`} <br />
    <table>
      <tbody>
        <tr>
          <td>Phone #</td> <td>{props.phone}</td>
        </tr>
        <tr>
          <td>Email</td><td>{props.email}</td>
        </tr>
        <tr><td>Message</td><td>{props.message}</td></tr>
      </tbody>
    </table>
  </>
}


const validateForm = (data: ContactFormResults) => {
  let errors: ContactFormResults = {}

  if (!data.name)
    errors.name = "Your Name is Required";

  if (!data.message)
    errors.message = "A Message is Required";

  if (!data.email)
    errors.email = "An Email Address is Required";
  else if (!data.email.includes('@'))
    errors.email = "Invalid Email Address";

  return errors;
}

export const action = async ({ request }: ActionArgs) => {
  const formData = await request.formData();


  const values: ContactFormResults = Object.fromEntries(formData);
  let errors = validateForm(values);

  console.log("form results", values, errors);
  if (Object.keys(errors).length !== 0) {
    console.log("Validation errors found", errors)
    return json({ errors, values });
  }

  // send email
  let message = {
    to: 'jay.m.martin@gmail.com',
    subject: 'Contact From ' + values.name,
    replyTo: values.email,
    html: renderToString(<ContactEmail {...values} />),
  };

  sendMail(message);


  return redirect('/contact');
};

function Input({ type, name, defaultValue, placeholder, error, ...props }) {

  if (type === 'textarea') {
    return <><textarea
      name={name}
      placeholder={placeholder}
      defaultValue={defaultValue}
      {...props}
      className="
                  w-full
                  rounded
                  py-3 px-[14px]
                  border border-[f0f0f0]
                  outline-none
                  focus-visible:shadow-none
                  focus:border-primary
                  " />
      <ErrorMessage message={error} />
    </>
  }

  return <>
    <input type={type}
      name={name}
      placeholder={placeholder}
      defaultValue={defaultValue}
      {...props}
      className="
                  w-full
                  rounded
                  py-3 px-[14px]
                  border border-[f0f0f0]
                  outline-none
                  focus-visible:shadow-none
                  focus:border-primary
    " />
    <ErrorMessage message={error} />
  </>
}

function Button(props) {
  return <button
    type={props.type}
    className="
              w-full
              rounded
              border border-black
              p-3
              transition
              hover:bg-opacity-90
              "
  >
    {props.children}
  </button>
}

function ErrorMessage({ message }: { message: string }) {
  if (!message)
    return null;

  return <p style={{ color: "red" }}>
    {message}
  </p>
}

export default function Contact() {
  const actionData = useActionData<typeof action>();

  return (
    <div className="flex justify-center">
      <div className="max-w-screen-md w-full">
        <h1>Contact Me</h1>
        <form method="post" action="/contact" className="">
          <div className="mb-6">
            <Input
              type="text"
              name="name"
              placeholder="Your Name"
              defaultValue={actionData?.values.name}
              error={actionData?.errors.name}
            />
          </div>
          <div className="mb-6">
            <Input
              type="email"
              name="email"
              defaultValue={actionData?.values.email}
              placeholder="Your Email"
              error={actionData?.errors.email}
            />
          </div>
          <div className="mb-6">
            <Input
              type="tel"
              name="phone"
              defaultValue={actionData?.values.phone}
              placeholder="Your Phone"
              error={actionData?.errors.phone}
            />
          </div>
          <div className="mb-6">
            <Input
              type="textarea"
              rows={6}
              name="message"
              defaultValue={actionData?.values.message}
              placeholder="Your Message"
              error={actionData?.errors.message}
            />
          </div>
          <div>
            <Button type="submit">
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
import React from "react";
import Pdf from "react-to-pdf";
const ref = React.createRef();

const Blog = () => {
  const options = {
    orientation: "landscape",
    unit: "in",
    format: [15, 10],
  };
  return (
    <div className="mycontainer py-20">
      <div className="button text-center">
        <Pdf
          targetRef={ref}
          x={0.5}
          y={0.5}
          scale={0.69}
          filename="code-example.pdf"
        >
          {({ toPdf }) => (
            <button
              className="py-2 pl-3 pr-4 text-white bgyell"
              onClick={toPdf}
            >
              Generate Pdf
            </button>
          )}
        </Pdf>
      </div>

      <div
        className="question"
        style={{ background: "black" }}
        options={options}
        ref={ref}
      >
        <div className="questionOne mt-6">
          <h3 className="text-3xl font-semibold textyell">
            Tell us the differences between uncontrolled and controlled
            components.
          </h3>
          <div className="answer opacity-50 pl-7 mt-3">
            <p>
              A controlled component is any component that manages its own state
              and changes it in response to user input. The component's state is
              transmitted to it via properties, and any state changes are
              transmitted back to the parent component using callback functions.
              Users now have fine-grained control over the form input thanks to
              features like validation and conditional rendering that are made
              possible by this. Controlled components are recommended for most
              React use scenarios. <br /> <br />
              On the other hand, an uncontrolled component is one where the DOM
              itself is in charge of managing the form data. The default values
              for the form elements set the component's initial state; however,
              when the user interacts with the form, the DOM takes over and
              modifies the component's state. This can be helpful when dealing
              with big quantities of form data or integrating with third-party
              modules that want DOM access, for example.
            </p>
          </div>
        </div>
        <div className="questionOne mt-6">
          <h3 className="text-3xl font-semibold textyell">
            How to validate React props using PropTypes?
          </h3>
          <div className="answer opacity-50 pl-7 mt-3">
            <p>
              You can validate React props using PropTypes. PropTypes is a
              package that allows you to specify the type of data that a
              component should receive. It also allows you to specify whether
              the data is required or optional.
            </p>
          </div>
        </div>
        <div className="questionOne mt-6">
          <h3 className="text-3xl font-semibold textyell">
            Tell us the difference between nodejs and express js.
          </h3>
          <div className="answer opacity-50 pl-7 mt-3">
            <p>
              Based on the V8 JavaScript engine in Chrome, Node.js is a
              JavaScript runtime. It enables the server-side execution of
              JavaScript. A web application framework for Node.js is called
              Express.js. It offers a selection of features for creating APIs
              and web applications. <br /> <br />
              In other words, Express.js is a framework that offers a set of
              features for creating web applications and APIs using Node.js,
              whereas Node.js is the runtime environment that enables you to run
              JavaScript on the server-side.
            </p>
          </div>
        </div>
        <div className="questionOne mt-6">
          <h3 className="text-3xl font-semibold textyell">
            What is a custom hook, and why will you create a custom hook?
          </h3>
          <div className="answer opacity-50 pl-7 mt-3">
            <p>
              A JavaScript function that begins with the word "use" and can call
              other hooks is referred to as a custom hook. It enables you to
              take your components' reusable logic and extract it. Custom hooks
              can be used to abstract away complex logic or share stateful logic
              between components.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div data-type="div" className="draggable w-full">
      <div
        data-type="div"
        className="container mx-auto my-32 flex flex-col items-center gap-16"
      >
        <div data-type="div" className="flex flex-col gap-7">
          <div
            data-type="div"
            className="mx-auto flex w-10/12 flex-col gap-2 px-6 text-center"
          >
            <h2
              data-type="h2"
              className="text-3xl font-extrabold leading-tight text-dark-grey-900 lg:text-4xl"
            >
              Well, shoot! The page you're looking for couldn't be found.
            </h2>
            <p
              data-type="p"
              className="text-base font-medium leading-7 text-dark-grey-600"
            >
              We hit a snag... maybe it's time to head back to our main page.
            </p>
            <h1 className="text-2xl font-bold">
              {err.status}:{err.statusText}
            </h1>
          </div>
          <div
            data-type="div"
            className="flex items-center justify-center"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Error;

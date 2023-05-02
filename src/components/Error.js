import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError()
  return (
    <div className="error-page">
      <h2>Oops!!!</h2>
      <h1>{err.status+ ': ' + err.statusText}</h1>
    </div>
  );
};

export default Error;

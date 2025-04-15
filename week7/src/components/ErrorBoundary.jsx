import {useRouteError} from "react-router-dom";

export default function ErrorBoundary() {
  const error = useRouteError();

  return(
    <div>
      <h2>Error</h2>
      {error?.message && (<pre>{error.message}</pre>)}
    </div>
  );
}
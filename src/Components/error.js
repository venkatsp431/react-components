import Button from "react-bootstrap/Button";

import { useHistory } from "react-router-dom";

function Error() {
  const history = useHistory();
  function bodyColor() {
    document.body.style.backgroundColor = "blue";
    document.body.style.margin = "0 auto";
  }
  bodyColor();
  return (
    <div className="loginstyles">
      <h3>404 Error. Click to go Home</h3>
      <Button
        size="lg"
        variant="light"
        type="submit"
        onClick={() => history.push("/")}
      >
        Home
      </Button>
    </div>
  );
}

export default Error;

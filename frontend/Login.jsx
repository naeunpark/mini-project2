import {useNavigate} from "react-router-dom";
import {useState} from "react";
import Session from "react-session-api";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Login() {
  const [userName, setUserName] = useState("");
  const [passWord, setPassword] = useState("");
  let navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    fetch("../backend/login.json")
      .then((response) => response.json())
      .then((json) => json[0])
      .then(({userId, password}) => {
        if (userId === userName && password === passWord) {
          Session.set("isLogin", true);
          return navigate("/");
        } else {
          console.log("fail to login");
        }
      });
  }

  return (
    <>
      <h1>Log in</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group
          className="mb-3"
          controlId="username"
        >
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            value={userName}
          />
          <Form.Text className="text-muted">
            We'll never share your username with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group
          className="mb-3"
          controlId="formBasicPassword"
        >
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={passWord}
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
        >
          Submit
        </Button>
      </Form>
    </>
  );
}

export default Login;

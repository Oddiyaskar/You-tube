import React from "react";
import useToken from "./Components/Hooks/useToken";

function UnauthenticatedApp() {
  const [setIsLoggedIn] = useToken(true);

	const handleSubmit = async (evt) => {
		evt.preventDefault();

		const { email, password } = evt.target.elements;

		const res = await fetch('https://reqres.in/api/login', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify({
				email: email.value.trim(),
				password: password.value.trim(),
			}),
		});

		const data = await res.json();

		if (data?.token) {
			setIsLoggedIn(data?.token);
		}
	};

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
		<h1 className="heading">Ro'yxatdan o'ting</h1>
        <div>
          <input className="input" type="email" name="email" defaultValue="eve.holt@reqres.in" />
        </div>

        <div>
          <input className="input" type="password" name="password" defaultValue="cityslicka" />
        </div>

        <button className="button									" type="submit">Log In</button>
      </form>
    </>
  );
}

export default UnauthenticatedApp;

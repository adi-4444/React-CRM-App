import React, { useState } from "react";
import { loginUser } from "../../apis/authApi";
import { useNavigate } from "react-router-dom";
import { saveUserInfo } from "../../../../commom/utils/helper";
import "./Login.css";
import Loader from "../../../../commom/components/loader/Loader";
import { USER_TYPES } from "../../../../commom/constants/userTypes";

const Login = ({ setAuth }) => {
	const [userId, setUserId] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");

	const loginHandler = (e) => {
		e.preventDefault();
		const data = { userId, password };
		setLoading(true);
		try {
			loginUser(data)
				.then((res) => {
					const { data, status } = res;
					if (status === 200) {
						const { userTypes } = data;
						saveUserInfo(data);
						setLoading(false);
						// if success, i will redirect the user to login page
						if (userTypes === USER_TYPES.CUSTOMER) {
							navigate("/customer");
						} else if (userTypes === USER_TYPES.ENGINEER) {
							navigate("/engineer");
						} else if (userTypes === USER_TYPES.ADMIN) {
							navigate("/admin/dashboard");
						} else {
							navigate("/");
						}
					}
				})
				.catch((err) => {
					// if failure, i will show an error
					const errMsg = err?.response?.data?.message || err?.message;
					setErrorMessage(errMsg);
					setLoading(false);
				});
		} catch (err) {
			// if failure, i will show an error
			const errMsg = err?.response?.data?.message || err?.message;
			setErrorMessage(errMsg);
			setLoading(false);
		}
	};

	return (
		<>
			{loading ? (
				<Loader />
			) : (
				<div className='login_body'>
					<h1>Welcome To CRM App</h1>
					<div className='login_wrapper'>
						<div className='login_form_group'>
							<h2>Login</h2>
							<form onSubmit={loginHandler}>
								<div className='form_group'>
									<input
										type='userid'
										className='form_control'
										name='userid *'
										placeholder='userid'
										autoFocus
										required
										value={userId}
										onChange={(e) =>
											setUserId(e.target.value)
										}
									/>
									<label className='form_label'>
										User ID *
									</label>
								</div>

								<div className='form_group'>
									<input
										type='password'
										className='form_control'
										name='password'
										placeholder='Password'
										required
										value={password}
										onChange={(e) =>
											setPassword(e.target.value)
										}
									/>
									<label className='form_label'>
										Password *
									</label>
								</div>
								{errorMessage && (
									<div className='text-danger mb-1'>
										{errorMessage}
									</div>
								)}
								<div className='login_btn'>
									<input type='submit' value='Login' />
									<p>
										{" "}
										Don't have an account ?{" "}
										<a
											href='#/'
											onClick={() => setAuth("register")}
										>
											Signup
										</a>
									</p>
								</div>
							</form>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Login;

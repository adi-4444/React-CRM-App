import React, { useState } from "react";
import "./Signup.css";
import { resisterUser } from "../../apis/authApi";
import Loader from "../../../../commom/components/loader/Loader";
import { USER_TYPES } from "../../../../commom/constants/userTypes";

const Signup = ({ setAuth }) => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [userId, setUserId] = useState("");
	const [userType, SetUserType] = useState(USER_TYPES.CUSTOMER);
	const [password, setPassword] = useState("");
	const [confirmpassword, setConfirmPassword] = useState("");
	const [loading, setLoading] = useState(false);

	const signupHandler = (e) => {
		e.preventDefault();
		const data = { name, email, userId, userType, password };
		setLoading(true);
		// api call to Signup a new user
		try {
			resisterUser(data)
				.then((res) => {
					console.log(res);
					const { status } = res;
					if (status === 201) {
						// if success, i will redirect the user to login page
						setLoading(false);
						alert("User Registration Successfull");
						setAuth("login");
					}
				})
				.catch((err) => {
					const errMsg = err?.response?.data?.message || err?.message;
					console.log(errMsg);
					setLoading(false);
				});
		} catch (err) {
			const errMsg = err?.response?.data?.message || err?.message;
			console.log(errMsg);
			setLoading(false);
		}
	};

	return (
		<>
			{loading ? (
				<Loader />
			) : (
				<div className='signup_body'>
					<div className='signup_wrapper'>
						<div className='signup_form_group'>
							<h2>Signup</h2>

							<form onSubmit={signupHandler}>
								<div className='form_group'>
									<input
										type='text'
										className='form_control'
										name='name'
										placeholder='Name'
										autoFocus
										required
										value={name}
										onChange={(e) =>
											setName(e.target.value)
										}
									/>
									<label className='form_label'>Name *</label>
								</div>

								<div className='form_group'>
									<input
										type='text'
										className='form_control'
										name='email *'
										placeholder='Email'
										required
										value={email}
										onChange={(e) =>
											setEmail(e.target.value)
										}
									/>
									<label className='form_label'>
										Email *
									</label>
								</div>

								<div className='for_group'>
									<input
										type='text'
										className='form_control'
										name='userId *'
										placeholder='userId'
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

								<div className='user_type'>
									<label>Register as * </label>
									<select
										value={userType}
										onChange={(e) =>
											SetUserType(e.target.value)
										}
										required
									>
										<option
											value=''
											selected
											disabled
											hidden
										>
											Choose
										</option>
										<option value='ENGINEER'>
											Engineer
										</option>
										<option value='CUSTOMER'>
											Customer
										</option>
									</select>
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

								<div className='form_group'>
									<input
										type='password'
										className='form_control'
										name='confirmpassword'
										placeholder='ConfirmPassword'
										required
										value={confirmpassword}
										onChange={(e) =>
											setConfirmPassword(e.target.value)
										}
									/>
									<label className='form_label'>
										Confirm Password *
									</label>
									{password && confirmpassword ? (
										password === confirmpassword ? (
											<p
												style={{
													color: "#1bab6e",
													fontSize: "12px",
													margin: "-7.5px 0px",
													padding: "0px",
													marginTop: "-15px",
												}}
											>
												* Password Matched
											</p>
										) : (
											<p
												style={{
													color: "red",
													fontSize: "12px",
													margin: "-7.5px 0px",
													padding: "0px",
													marginTop: "-15px",
												}}
											>
												* Password Not Matched
											</p>
										)
									) : (
										""
									)}
								</div>

								<div className='signup_btn'>
									<input
										type='submit'
										value='Signup'
										className='submit_btn'
									/>
									<p>
										Already have an account ?{" "}
										<a
											href='#/'
											onClick={() => setAuth("login")}
										>
											Login
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

export default Signup;

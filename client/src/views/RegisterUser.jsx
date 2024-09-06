import { useState } from 'react';
import { validateForm } from '../helpers/validation/validateForm';

const RegisterUser = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm(form, false);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // form is ok and ready for submission to db
      console.log('Form submitted successfully!');
      // TODO: create a new user in db
      // TODO: more validation, does the email already exist in the db?
    } else {
      console.log('form had errors and submission failed');
    }
  };
  return (
    <div className=" m-auto min-h-screen">
      <div className=" flex align-center bg-base-200  pl-4 py-5 w-96 mt-10 rounded-lg shadow-lg">
        <form onSubmit={onSubmit} className="form-control gap-3">
          <h3 className="text-lg">Create new User Account</h3>

          {errors.email && <span className="text-red-500">{errors.email}</span>}
          <label className="input input-bordered flex items-center gap-2 text-primary">
            Email
            <input
              type="text"
              name="email"
              className="grow"
              placeholder="E-mail Address"
              value={form.email}
              onChange={onChange}
            />
          </label>

          {errors.password && (
            <span className="text-red-500">{errors.password}</span>
          )}
          <label className="input input-bordered flex items-center gap-2 text-primary">
            Password
            <input
              type="password"
              name="password"
              className="grow"
              placeholder="Password"
              value={form.password}
              onChange={onChange}
            />
          </label>

          {errors.confirmPassword && (
            <span className="text-red-500">{errors.confirmPassword}</span>
          )}
          <label className="input input-bordered flex items-center gap-2 text-primary">
            Confirm Pass
            <input
              type="password"
              name="confirmPassword"
              className="grow"
              placeholder="Retype Password"
              value={form.confirmPassword}
              onChange={onChange}
            />
          </label>
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};
export default RegisterUser;

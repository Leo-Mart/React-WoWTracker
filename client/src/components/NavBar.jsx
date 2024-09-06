import { Link } from 'react-router-dom';
import { useState } from 'react';
import Modal from './Shared/Modal';
import { validateForm } from '../helpers/validation/validateForm';

const isLoggedIn = false;

const NavBar = () => {
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm(form, true);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // form is ok and ready for submission to db
      console.log('Form submitted successfully!');
      // TODO: create a new user in db
      // TODO: more validation, does the email already exist in the db?
      document.getElementById('login_Modal').close();
    } else {
      console.log('form had errors and submission failed');
    }
  };

  function onChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  return (
    <div className="navbar bg-base-200">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          WoW Tracker
        </Link>
      </div>
      <div className="flex-none gap-2">
        {isLoggedIn ? (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-outline">
              <div className="w-10">
                <p>User</p>
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-200 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">Profile</a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        ) : (
          <>
            <Link to="/register" className="btn btn-outline">
              Sign Up
            </Link>
            <button
              className="btn btn-outline"
              onClick={() => document.getElementById('login_Modal').showModal()}
            >
              Sign In
            </button>
            <Modal id={'login_Modal'}>
              <form onSubmit={onSubmit}>
                {errors.email && (
                  <span className="text-red-500">{errors.email}</span>
                )}
                <label
                  htmlFor="email"
                  className="input input-bordered flex items-center gap-2"
                >
                  Email
                  <input
                    type="text"
                    name="email"
                    className="grow"
                    placeholder="Leeroy@gmail.com"
                    onChange={onChange}
                    value={form.email}
                  />
                </label>
                {errors.password && (
                  <span className="text-red-500">{errors.password}</span>
                )}
                <label
                  htmlFor="password"
                  className="input input-bordered flex items-center gap-2"
                >
                  Password
                  <input
                    type="password"
                    name="password"
                    className="grow"
                    placeholder="*********"
                    onChange={onChange}
                    value={form.password}
                  />
                </label>

                <button className="btn btn-primay" type="submit">
                  Login
                </button>
              </form>
            </Modal>
          </>
        )}
      </div>
    </div>
  );
};
export default NavBar;

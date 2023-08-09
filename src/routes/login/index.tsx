import React from "react";
import c from "./style.module.scss";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "@/firebase";
import { FirebaseError } from "firebase/app";
import { AuthProvider } from "@/firebase";

import { Link, useNavigate } from "react-router-dom";
import getUser from "./getUser";
type Props = {};

const Login = (props: Props) => {
  const { user, setUser } = React.useContext(AuthProvider);
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });
  const [error, setError] = React.useState<FirebaseError["code"]>("");

  const submitHandler = (
    {
      email,
      password,
    }: {
      email: string;
      password: string;
    },
    setError: React.Dispatch<React.SetStateAction<string>>
  ) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        getUser(userCredential.user.uid).then((user) => {
          if (user) {
            setUser(user);
            localStorage.setItem("user", JSON.stringify(user));
          }
        });
      })
      .catch((error) => {
        switch (error.code) {
          case "auth/wrong-password":
            setError("Неверный пароль");
            break;
          case "auth/user-not-found":
            setError("Неверный логин");
            break;
          default:
            setError(error.code);
        }
      });
  };

  return (
    <main>
      <section className={c.container}>
        {!user ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              submitHandler(formData, setError);
            }}
            className={c.form}
          >
            <h2 className={c.title}>Авторизация</h2>
            <div className={c.group}>
              <input
                className={c.input}
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => {
                  setError("");
                  setFormData({ ...formData, email: e.target.value });
                }}
              />
              <input
                className={c.input}
                type="password"
                name="password"
                id="password"
                placeholder="Пароль"
                value={formData.password}
                onChange={(e) => {
                  setError("");
                  setFormData({ ...formData, password: e.target.value });
                }}
              />
            </div>

            <button className={c.button} type="submit">
              Авторизоваться
            </button>
            {error && <p className={c.errorMessage}>{error}</p>}
          </form>
        ) : (
          <div className={c.completeLogin}>
            <p>
              Вы авторизованы как <strong>{user.email}</strong>
            </p>
            <div className={c.group}>
              <Link to="/blog">Перейти в блог</Link>
              <button
                onClick={() => {
                  signOut(auth);
                  setUser(null);
                  localStorage.removeItem("user");
                }}
              >
                Выйти
              </button>
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default Login;

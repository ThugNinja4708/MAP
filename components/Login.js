import classes from "./Login.module.css";

function Login() {
  return (
    <div className={classes.body}>
      <div className={classes.card}>
        <div className={classes.cardForm}>
          <h4>Login to your MAP Account</h4>
          <form>
            <div className={classes.formField}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email address"
                required
              />
            </div>

            <div className={classes.formField}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                required
              />
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

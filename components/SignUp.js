import { Link } from "react-router-dom";
import classes from './SignUp.module.css';
function SignUp() {
  return (
    <div className={classes.body}>
      <div className={classes.card}>
        <div className={classes.cardForm}>
          <h4>Create your MAP Account</h4>
          <form>
            <div className={classes.formField}>
              <label htmlFor="username">Username</label>
              <input
                type="username"
                id="username"
                placeholder="Enter your Username"
                required
              />
            </div>

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

            <div className={classes.formField}>
              <label htmlFor="repeat-password">Confirm Password</label>
              <input
                type="repeat-password"
                id="repeat-password"
                placeholder="Re-enter password"
                required
              />
            </div>
            <button type="submit">Sign Up</button>
          </form>
          <div className={classes.cardLogin}>
            <p>
              Already a User ? <Link to="/Login">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;

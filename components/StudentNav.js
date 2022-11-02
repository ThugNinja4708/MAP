// import Logo from 'src/images/background.jpg';
import {Link} from 'react-router-dom';
import classes from './StudentNav.module.css'
function StudentNav(){
 return (
    <header className={classes.header}>
        <div className={classes.logoDiv}>
        {/* <img src='src/images/background.jpg' alt="logo"/> */}
        <div>My Attendance Portal</div>
        </div>
        <nav>
            <ul>
                <li>
                    <a>Home</a>
                </li>
                <li>
                    <a>About</a>
                </li>  
                <li>
                    <a>Profile</a>
                </li>
                <li>
                    <a>Log Out</a>
                </li>   

            </ul>
        </nav>
    </header>
 );
}

export default StudentNav;
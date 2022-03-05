import classes from './Header.module.css';
import { authActions } from '../../store';
import { useSelector, useDispatch } from 'react-redux';

const Header = () => {
	const dispatch = useDispatch();
	const { logout } = authActions;
	const isAuthenticated = useSelector(state => state.isAuthenticated);

	const logoutHandler = () => {
		dispatch(logout());
	};

	return (
		<header className={classes.header}>
			<h1>Redux Auth</h1>
			<nav>
				<ul>
					{isAuthenticated && (
						<>
							<li>
								<a href='/'>My Products</a>
							</li>
							<li>
								<a href='/'>My Sales</a>
							</li>
							<li>
								<button onClick={logoutHandler}>Logout</button>
							</li>
						</>
					)}
				</ul>
			</nav>
		</header>
	);
};

export default Header;

import classes from './Auth.module.css';
// Importamos las acciones y la función de despacho de acciones
import { authActions } from '../../store';
import { useDispatch } from 'react-redux';

const Auth = () => {
	const dispatch = useDispatch();
	const { login } = authActions;

	const loginHandler = () => {
		dispatch(login());
	};

	return (
		<main className={classes.auth}>
			<section>
				<form>
					<div className={classes.control}>
						<label htmlFor='email'>Email</label>
						<input type='email' id='email' />
					</div>
					<div className={classes.control}>
						<label htmlFor='password'>Password</label>
						<input type='password' id='password' />
					</div>
					<button onClick={loginHandler}>Login</button>
				</form>
			</section>
		</main>
	);
};

export default Auth;

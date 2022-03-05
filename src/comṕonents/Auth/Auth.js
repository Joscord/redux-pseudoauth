import classes from './Auth.module.css';
// Importamos las acciones y la función de despacho de acciones
import { authActions } from '../../store';
import { useDispatch, useSelector } from 'react-redux';

const Auth = () => {
	// De nuestros hooks obtenemos las diferentes propiedades
	const dispatch = useDispatch();
	const isAuthenticated = useSelector(state => state.isAuthenticated);
	// Destructuramos las acciones
	const { login, logout } = authActions;

	// Definimos una función para manejar el login
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

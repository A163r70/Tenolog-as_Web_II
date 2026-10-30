import LoginForm from './LoginForm';
import AdminPanel from '../admin/AdminPanel';

export default function Login({ idLoggedIn: initialIdLoggedIn }) {
    const isLoggedIn = initialIdLoggedIn;

    let content;

    if(isLoggedIn) {
        content = <AdminPanel/>;
    }else {
        content = <LoginForm/>;
    }

    return (
        <div>
            {content}
        </div>
    );
};
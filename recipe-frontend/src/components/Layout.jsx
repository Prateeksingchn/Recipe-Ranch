import { BrowserRouter as Router } from 'react-router-dom';

const Layout = ({ children }) => {
    return (
        <div className="layout">
            {children}
        </div>
    );
};

export default Layout;
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const DefaultLayout = ({ children }) => {
    return (
        <main>
            <div><Navbar /></div>
            <div>{children}</div>
            <div><Footer /></div>
        </main>
    );
}

export default DefaultLayout;
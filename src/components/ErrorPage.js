import NavBar from "./NavBar";
import { useRouteError } from "react-router-dom";

function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    const imageUrl = "https://media1.tenor.com/images/903a164052adbfdaef4d3a805705ce23/tenor.gif?itemid=16633785";
    

    return (
        <>
            <header>
                <NavBar />
            </header>
            <main style={{ textAlign: 'center' }}>
                <h1>Oh no! You selected something that wasn't available!</h1>
                <img src={imageUrl} alt = "huh?" style={{ display: 'block', margin: '0 auto'}} />
            </main>
        </>
    );
};

export default ErrorPage;
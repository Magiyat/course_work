import Navbar from './components/Navbar';
import useRoutes from './registration/routes';


function App() {
    const routes = useRoutes()

    return (
        <>
            <Navbar />
            {routes}
        </>
    )
}
export default App;

import Monogram from "./Monogram";

export default function NavBar() {
    return (
        <nav className="w-full bg-red-900 h-16 flex justify-center items-center">
            <Monogram color="white" size="50px" />
        </nav>
    );
}
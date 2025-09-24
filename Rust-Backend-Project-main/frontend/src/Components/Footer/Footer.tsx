import Logo from "../Reuseable/Logo/Logo";

export default function Footer() {
    return (
        <footer className="w-full bg-pink-50 flex flex-col items-center py-4 px-2 sm:px-6">
            <div className="w-full flex flex-col sm:flex-row items-center justify-between max-w-5xl mx-auto gap-2">
                <Logo />
                <p className="text-pink-700 font-sans text-base sm:text-lg md:text-xl p-2 text-center sm:text-right">
                    My Dream Company is KA on the name of my Love
                </p>
            </div>
        </footer>
    );
}
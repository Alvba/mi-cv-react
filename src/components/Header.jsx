import profileImage from "../img/foto-cv.jpg";

function Header({ darkMode, onToggleDarkMode }) {
    return (
        <header>
            <img src={profileImage} alt="Foto de Álvaro Béjar Arango" />
            <button
                className="dark-mode"
                onClick={onToggleDarkMode}
                aria-label={darkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
                title={darkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
            >
                {darkMode ? "🌙" : "☀️"}
            </button>
            <div>
                <h1>Álvaro Béjar Arango</h1>
                <h2>Desarrollador Web</h2>
                <p>📍 Torrent, Valencia</p>
                <p>✉ alvaro@email.com</p>
                <p>☎ 123 456 789</p>
                <p>💻 [<a href="https://github.com/Alvba">GitHub</a>]</p>
                <p>🔗 [<a href="https://www.linkedin.com/in/%C3%A1lvaro-b%C3%A9jar-arango-969ab6386/">LinkedIn</a>]</p>
            </div>
        </header>
    );
}

export default Header;
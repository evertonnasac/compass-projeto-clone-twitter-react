
import "../styles/components/header.sass"

function Header (){
    return(
        <header className="header">
            <p className="home_header">Home</p>
            <img src="../public/icons/menu/btn_theme.png" alt="Trocar tema" className="btn_theme"/>


        </header>
    )
}

export default Header
import './Header.css';

const Header = (props) => {
    return `
        <div class="Header">
            <h1 class="faded"> ${props.title} </h1>
        </div>
    `
}

export default Header;
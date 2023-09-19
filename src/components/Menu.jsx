import Nav from './Nav'

// eslint-disable-next-line react/prop-types
function Menu({clicked}) {
    return (
        <nav className={clicked ? "open" : ""}>
            <div className={!clicked ? "close" : ""}>
                <Nav clicked={clicked} />
            </div>
        </nav>
    )
}

export default Menu
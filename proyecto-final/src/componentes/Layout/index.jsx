import "./styles.css"

const Layout = (props) => {
    return <div className="layout_container">
        <h1>Header</h1>
        <div>{props.children}</div>
        <h1>Footer</h1>
    </div>
}

export default Layout
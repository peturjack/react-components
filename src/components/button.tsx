import "./button.css"

function MyButton() {
    const myStyle = {
        cursor: "pointer",
        height: "30px",
        width: "80px",
        borderStyle: "none",
        fontWeight: "bold",
        borderRadius: "4px",
        marginLeft: "10px",
        color: "white",
    }
    return(
        <button style={myStyle} className="style">Click me</button>
    );
}


export default MyButton;



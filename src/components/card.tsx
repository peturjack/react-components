import "./card.css"

function MyCard () {
    const cardContainer = {
        boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
        width: "300px",
        height: "400px",
        marginLeft: "68px",
        marginTop: "20px"
    }

    const johnDoe = {
        fontSize: "20px",
        fontWeight: "bold",
        padding: "10px 0 0 15px",  
    }

    const aboutMe = {
        paddingLeft: "15px"
    }
    return (
        <div style={cardContainer}>
            <div className="card-image-container">
                <div className="card-image">
                </div>
            </div>
            <div style={johnDoe}>
                John Doe
            </div>
            <p style={aboutMe}>
                Hi my name is John Doe and im a frontend developer
            </p>
        </div>
    )
}

export default MyCard;
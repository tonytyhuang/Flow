

const LandingPage = () => {

    var date = new Date()
    var hour = date.getHours();
    return (
        <div>
            <h1>
                {hour}
            </h1>
        </div>
    )
}

export default LandingPage;
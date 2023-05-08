function Home(props) {
    return (
        <>
            <h1>
                home

                <p>{props.company}</p>
                <p>{props.salary}</p>
                <p>{props.position}</p>
            </h1>
        </>
    )
}
export default Home
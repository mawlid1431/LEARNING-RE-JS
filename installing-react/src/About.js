function About(props) {
    return (
        <>
            <h1>
                About

                <ol>{props.company}</ol>
                <ol>{props.salary}</ol>
                <ol>{props.position}</ol>
            </h1>
        </>
    )
}
export default About
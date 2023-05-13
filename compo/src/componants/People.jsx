const People = (props) => {
    return (
        <div>
            {props.item.isOnline == true ? props.item.name : null}
        </div>
    );
};
export default People
import "./Carf.css";

function Carf(props) {
    const classes = "carf " + props.className;

    return (
        <div className={classes}>
            {props.children}

        </div>
    );
}

export default Carf;

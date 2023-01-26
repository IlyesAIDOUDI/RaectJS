import ModifItem from './ModifItem';
import Carf from './Carf';
import './Modif.css';


function Modif(props) {
    return (
        <Carf className="modif">
            <ModifItem
                title={props.items[0].title}
            />
            <ModifItem
                title={props.items[1].title}
            />
        </Carf>
    );
}

export default Modif;
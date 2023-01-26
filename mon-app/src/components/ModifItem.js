import Carf from './Carf';
import './ModifItem.css';

function ModifItem(props) {
    return (
        <Carf className='modif-item'>
            <div className='modif-item__description'>
                <h2>{props.title}</h2>
            </div>
        </Carf>
    );
}

export default ModifItem;

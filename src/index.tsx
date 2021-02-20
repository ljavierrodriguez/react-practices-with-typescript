import ReactDOM from 'react-dom';
import EventComponent from './events/EventComponent';
import GuestList from './state/GuestList';
import UserSearch from './refs/UserSearch';

const App = () => {
    return <div>
        <EventComponent />
        <UserSearch />
        <GuestList />
    </div>
}

ReactDOM.render(<App />, document.querySelector('#root'));
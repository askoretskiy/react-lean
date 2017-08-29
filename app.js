'use strict';

const Application = props => {
    return (
        <div>Hello world!</div>
    );
};


document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<Application />, document.getElementById('root'));
});

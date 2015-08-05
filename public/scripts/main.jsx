var Counter = require('./components/Counter/Counter.jsx');
var container = document.getElementById('counter');
React.render(
<Counter initNumber={container.getAttribute('data-init-number')}/>,
    container
);
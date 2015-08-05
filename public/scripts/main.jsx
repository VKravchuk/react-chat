var Counter = require('./components/Counter.jsx');
document.cookie = 'test_key="test_value"';
React.render(
<Counter/>,
    document.getElementById('content')
);
var ChatWrapper = require('./components/ChatWrapper.jsx');
document.cookie = 'test_key="test_value"';
React.render(
<ChatWrapper/>,
    document.getElementById('content')
);
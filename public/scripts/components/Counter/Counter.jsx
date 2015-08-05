class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.updateCounter = this.updateCounter.bind(this);
    }
    componentDidMount(){
        this.updateCounter()
    }
    updateCounter(){
        var self = this;
        const minimumAddedNumber = -2;
        const addedNumberRange = 6;
        const iteratorRandomizeRange = 7;
        const millisecondsCof = 1000;
        function randomizeNumber () {
            let addedNumber = Math.round(Math.random() * addedNumberRange + minimumAddedNumber);
            self.setState({counterNumber : self.props.initNumber});
            let newCounterNumber = +self.state.counterNumber + addedNumber;
            !isNaN(newCounterNumber) && self.setState({counterNumber : newCounterNumber});
            setTimeout(function () {
                randomizeNumber();
            }, Math.random() * iteratorRandomizeRange * millisecondsCof);
        }
        randomizeNumber ()
    }
    render() {
        let counterNumberArray = (this.state.counterNumber + '').split('');
        let counter = counterNumberArray.map(function (num, key) {
            return <span key={key}>{num}</span>
        });
        return (
            <dl className="player-count">
                <dt>Players Online Now:</dt>
                <dd>
                    {counter}
                </dd>
            </dl>
        )
    }
}

export default Chat;
var React = require('react');
var RevisionStore = require('../stores/RevisionStore');

var Revision = React.createClass({
    getInitialState() {
        return RevisionStore.getState();
    },

    componentDidMount() {
        RevisionStore.listen(this.onChange);
    },

    componentWillUnmount() {
        RevisionStore.unlisten(this.onChange);
    },

    onChange(state) {
        this.setState(state);
    },

    render() {
        return (<div>Derp</div>);
    }
});

module.exports = Revision;

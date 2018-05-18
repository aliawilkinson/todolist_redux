import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Link } from 'react-router-dom';

class SingleItem extends Component {
    componentDidMount() {
        this.props.getSingleItem(this.props.match.params.id);
    }

    componentWillUnmount() {
        this.props.clearSingleItem();
    }

    handleToggleComplete() {
        this.props.toggleItemComplete(this.props.match.params.id);
    }

    async handleDeleteItem() {
        await this.props.deleteItem(this.props.match.params.id);

        this.props.history.push('/');
    }

    render() {
        console.log('single item: ', this.props)

        const { title, details, complete } = this.props.item;

        return (
            <div>
                <h1 className="center">{title}</h1>
                <h4 className="center">{details}</h4>
                <div className="row right-align">
                    <button
                        className={`btn ${complete ? 'green' : 'light-yellow'}`}
                        onClick={this.handleToggleComplete.bind(this)}>
                        {complete ? 'In Progress' : 'Complete Item'}
                    </button>
                    <Link to="/" className="btn blue">View Full List</Link>
                    <button onClick={this.handleDeleteItem.bind(this)}
                        className={"btn darken-2 red"}>
                        Delete Item
                    </button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        item: state.list.single
    }
}

//second argument for connect is an action creator that returns an action, and that action is an object

export default connect(mapStateToProps, actions)(SingleItem);
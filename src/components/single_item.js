import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSingleItem } from '../actions';
import { Link } from 'react-router-dom';


class SingleItem extends Component {
    componentDidMount() {
        this.props.getSingleItem(this.props.match.params.id);
    }

    render() {
        console.log('single item: ', this.props)

        const { title, details } = this.props.item;

        return (
            <div>
                <h1 className="center">{title}</h1>
                <h4 className="center">{details}</h4>
                <div className="row right-align">
                    <Link to="/" className="btn blue">View Full List</Link>
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

export default connect(mapStateToProps, { getSingleItem })(SingleItem);
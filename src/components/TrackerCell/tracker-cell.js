/*
This is a functional component which does
*/
import React from 'react';
import styles from './tracker-cell.module.css';

class TrackerCell extends React.Component {
    state = {
        toggleValue: 0
    }

    clickHandler(evt) {
        evt.preventDefault();
        this.setState((prevState, { toggleValue }) => ({
            toggleValue: (prevState.toggleValue === 2) ? 0 : (prevState.toggleValue + 1)
        }));
    }

    render() {
        const classes = [styles.TrackerCell];

        if (this.state.toggleValue === 1) {
            classes.push(styles.Success);
        }

        if (this.state.toggleValue === 2) {
            classes.push(styles.Failure);
        }

        return <div
            className={classes.join(' ')}
            onClick={this.clickHandler.bind(this)}></div >
    }
};

export default TrackerCell;
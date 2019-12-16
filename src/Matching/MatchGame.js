import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class MatchGame extends React.Component {
    state = {

    };
    
}

const mapStateToProps = (state) => {
    return {
        MatchData: state.MatchData
    }
}

export default connect(mapStateToProps)(MatchGame)
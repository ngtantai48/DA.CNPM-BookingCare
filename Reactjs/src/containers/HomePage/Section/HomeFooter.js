import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';


class HomeFooter extends Component {
    render() {
      
        return (
            <div className="home-footer">
                <p>&copy;2024 Cố Gắng Team. <a target="_blank" href="#">More information</a></p>
            </div>
        );
    }

}

const mapStateToProps = state => {
    
};

const mapDispatchToProps = dispatch => {
    
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);

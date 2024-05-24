import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Specialty.scss';
import { FormattedMessage } from 'react-intl';

import Slider from "react-slick";
// Import css file
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


class Specialty extends Component {


    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        return (
            <div className="section-specialty">
                <div className="specialty-content">
                    <Slider {...settings}>
                        <div className="img-customize">
                            <h1>1</h1>
                        </div>
                        <div className="img-customize">
                            <h1>2</h1>
                        </div>
                        <div className="img-customize">
                            <h1>3</h1>
                        </div>
                        <div className="img-customize">
                            <h1>4</h1>
                        </div>
                        <div className="img-customize">
                            <h1>5</h1>
                        </div>
                        <div className="img-customize">
                            <h1>6</h1>
                        </div>
                    </Slider>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
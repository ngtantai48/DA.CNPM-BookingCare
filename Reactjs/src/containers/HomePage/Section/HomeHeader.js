import React, { Component } from "react";
import { connect } from "react-redux";
import "./HomeHeader.scss";
import { FormattedMessage } from "react-intl";
import { LANGUAGES } from "../../utils";

import { changeLanguageApp } from "../../store/actions/appActions";
import { withRouter } from "react-router";

import MenuHomeHeader from "./MenuHomeHeader";
import HomeMenuSearchSpecialty from "./HomeMenuSearchSpecialty";
import { emitter } from "../../utils/emitter";
import { Alert } from "reactstrap";


class HomeHeader extends Component {

    returnToHome = () => {
        if (this.props.history) {
            this.props.history.push(`/home`);
        }
    };

    render() {
        return (
            <>
                <div>

                </div>
                {this.props.isShowBanner === true && (
                    <div className="home-header-banner">
                        <div className="home-header-content">
                            <div className="left-content">
                                <div
                                    className="header-logo"
                                    onClick={() => {
                                        this.returnToHome();
                                    }}
                                ></div>
                            </div>
                        </div>
                    </div>
                )}
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        userInfo: state.user.userInfo,
        language: state.app.language,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language)),
    };
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(HomeHeader)
);
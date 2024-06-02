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
    render() {
        return (
            <>
                <div>

                </div>
                {this.props.isShowBanner === true && (
                    <div className="home-header-banner">

                    </div>
                )}
            </>
        )
    }
}
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';


class About extends Component {
    render() {

        return (
            <div className="section-share section-about">
                <div className="section-about-header">
                    Truyền thông nói về Cố Gắng Team
                </div>
                <div className="section-about-content">
                    <div className="content-left">
                        <iframe width="90%" height="400px" 
                        src="https://www.youtube.com/embed/OASGscJQXp0" 
                        title="BookingCare: Hệ thống đặt khám trực tuyến" frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
                        allowfullscreen>

                        </iframe>
                    </div>
                    <div className="content-right">
                        <p>
                        Đặt lịch phòng khám dễ dàng, chạm nhẹ vài giây, sức khỏe luôn trong tầm tay!
                        </p>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {

};

const mapDispatchToProps = dispatch => {

};

export default connect(mapStateToProps, mapDispatchToProps)(About);

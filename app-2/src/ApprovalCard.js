import React from 'react';

const ApprovalCard = (props) => {
    return (
        <div className="ui cards">
            <div className="card">
                <div className="content">
                    {props.children}
                </div>
                <div class="extra content">
                    <div class="ui two buttons">
                        <div class="ui basic green button">Approve</div>
                        <div class="ui basic red button">Reject</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ApprovalCard;
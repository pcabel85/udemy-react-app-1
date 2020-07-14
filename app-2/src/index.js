import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';


const App = () => {
    return (
        <div className="ui container comments"> 
            {/* passing in plain HTML as props.children */}
            <ApprovalCard>
                <div>
                    <h4>WARNING!</h4>
                    Are you sure you want to do this?
                </div>
            </ApprovalCard>

            {/* passing in another component as props.children */}
            <ApprovalCard>
                <CommentDetail 
                    author="Ben" 
                    time="2:30" 
                    post="Works on my machine!" 
                    img={faker.image.avatar()} 
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    author="Jen" 
                    time="3:30" 
                    post="Let's do one thing..."
                    img={faker.image.avatar()} 
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    author="Noms" 
                    time="4:30" 
                    post="Sarat Alalalallalalalalllaaa!"
                    img={faker.image.avatar()} 
                />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));
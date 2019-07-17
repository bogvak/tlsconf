import React, { Component } from 'react';
import SplitPane from 'react-split-pane';
//Dara import
import LocalStrings from '../Data/strings'

class ConfContainerRight extends Component {
    render() {
      return (
            <div className="conf-main-right">
            <SplitPane split="horizontal" defaultSize="50%">
              <ConfContainerRightTop />
              <ConfContainerRightBottom 
                platformChoose={this.props.platformChoose}
              />
            </SplitPane>
            </div>
      );
    }
  }
  
class ConfContainerRightTop extends Component {
  render() {
    return (
    <div className="conf-main-right-top">
          <span>{LocalStrings['en'][1]}</span>
      </div>
    );
  }
}

class ConfContainerRightBottom extends Component {
  render() {
    return (
      <div className="conf-main-right-bottom">
        <ConfList 
          platformChoose={this.props.platformChoose} 
        />
      </div>
    );
  }
}

class ConfList extends Component {
  render() {
    return (
      <div>
        Configuration1:
        <ul>
          <li>{this.props.platformChoose.id}: {this.props.platformChoose.desc}</li>
        </ul>
      </div>
    );
  }
}

export default ConfContainerRight;
  
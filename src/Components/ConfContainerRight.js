import React, { Component } from 'react';
import SplitPane from 'react-split-pane';
//Data import
import LocalStrings from '../Data/strings'

class ConfContainerRight extends Component {
    render() {
      return (
            <div className="conf-main-right">
            <SplitPane split="horizontal" defaultSize="50%">
              <ConfContainerRightTop />
              <ConfContainerRightBottom 
                PlatformСhoiceDesc={this.props.PlatformСhoiceDesc}
                ConfNumber={this.props.ConfNumber}
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
            PlatformСhoiceDesc={this.props.PlatformСhoiceDesc}
            ConfNumber={this.props.ConfNumber}
        />
      </div>
    );
  }
}

class ConfList extends Component {
  render() {
    return (
      <div className="ConfList">
        Configuration: #{this.props.ConfNumber+1}
        <ul>
          <li>{this.props.PlatformСhoiceDesc.article}: {this.props.PlatformСhoiceDesc.desc}</li>
        </ul>
      </div>
    );
  }
}

export default ConfContainerRight;
  
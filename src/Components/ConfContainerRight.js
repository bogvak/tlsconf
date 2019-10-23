import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

//PRINT
import ReactToPrint from 'react-to-print';

class ConfContainerRight extends Component {
    render() {
      return (
          <div className="conf-main-right">
              <ConfContainerRightTop 
                Configuration={this.props.Configurations[this.props.ConfNumber]}
                SubFrameTypeHandler={this.props.SubFrameTypeHandler}
              />
              <ConfContainerRightBottom 
                Configurations={this.props.Configurations}
                QuantityOfConf={this.props.QuantityOfConf}
                SubMenuHandler={this.props.SubMenuHandler}
                AwokenTabHandler={this.props.AwokenTabHandler}
                ModuleResetHandler={this.props.ModuleResetHandler}
                FrameReseteHandler={this.props.FrameReseteHandler}
              />
          </div>
      );
    }
  }
  
class ConfContainerRightTop extends Component {
  render() {
    return (
      <div className="conf-main-right-top">
        <div className="conf-main-right-top-img-wrapper">
          <img
            className="conf-main-right-top-img"
            src={this.props.Configuration.PlatformСhoiceDesc.img}
            alt=""
          />
        </div>
        <div className="conf-main-right-top-frameName">
          {this.props.Configuration.PlatformСhoiceDesc.fullLine}
        </div>
        <div className="conf-main-right-top-subFrameMenu">
          {(this.props.Configuration.PlatformСhoiceDesc.subFrameType) ?  
            <FrameSubMenu 
              SubFrameType={this.props.Configuration.PlatformСhoiceDesc.subFrameType}
              SubFrameArticle={this.props.Configuration.PlatformСhoiceDesc.subFrameArticle}
              SubFrameTypeHandler={this.props.SubFrameTypeHandler}
            />
          : null}
        </div>
      </div>
    );
  }
}

class FrameSubMenu extends Component {
  backgroundColor = (index) => {
    if (index % 2 === 0) {
      return "conf-main-right-top-subFrameMenu-list-line-light"
    } else {
      return "conf-main-right-top-subFrameMenu-list-line-dark"
    }
  }
  render() {
    return (
      <div className="conf-main-right-top-subFrameMenu-list">
        {Object.keys(this.props.SubFrameType).map((inf, index) => {
          return(
            <div key={inf} className={["conf-main-right-top-subFrameMenu-list-line", this.backgroundColor(index)].join(" ")}>
              <p style={{"fontWeight": (this.props.SubFrameType[inf] === this.props.SubFrameArticle) ? "bold" : null}} className="conf-main-right-top-subFrameMenu-list-line-text">{this.props.SubFrameType[inf]} : {inf}</p>
              <button
                onClick={this.props.SubFrameTypeHandler.bind(this, {subFrameDesc: inf, subFrameArticle: this.props.SubFrameType[inf]})}
                className="conf-main-right-top-subFrameMenu-list-line-button"
              >
                {(this.props.SubFrameType[inf] === this.props.SubFrameArticle) ? "✓" : null}
              </button>
            </div>
          )
        })}
      </div>
    )
  }
}

class ConfContainerRightBottom extends Component {
  render() {
    return (
      <Tabs className="conf-main-right-bottom_l0">
        <TabList className="conf-main-right-bottom_l0-list">
          {this.props.Configurations.map((conf, confNumber) => <Tab className="conf-main-right-bottom_l0-list-tab" selectedClassName="conf-main-right-bottom_l0-list-tab--selected" key={confNumber}>Configuration #{confNumber+1}</Tab>)}
        </TabList>
          {this.props.Configurations.map((conf, confNumber) => {
            return (<TabPanel 
              className="conf-main-right-bottom_l0-panel" 
              selectedClassName="conf-main-right-bottom_l0-panel--selected" 
              key={confNumber}
            >
              {(conf.PlatformСhoiceDesc.line) ? [
                <ConfList 
                  key={confNumber}
                  ConfNumber={confNumber}
                  Configuration={conf}
                  SubMenuHandler={this.props.SubMenuHandler}
                  AwokenTabHandler={this.props.AwokenTabHandler}
                  ModuleResetHandler={this.props.ModuleResetHandler}
                  FrameReseteHandler={this.props.FrameReseteHandler}
                /> , 
                <PrintConfButton ConfNumber={confNumber} Configurations={this.props.Configurations} key={conf} />
              ] : null}
            </TabPanel>)
          })}
      </Tabs>
    );
  }
}

class ConfList extends Component {
  zebraColor = (index) => {
    let isNextLight = (index % 2 === 0) ? true : false;
    if (this.props.Configuration.PlatformСhoiceDesc["power-sockets"]) {
      isNextLight=!isNextLight
    }
    if (isNextLight)
      {return "light"} 
    else 
      {return "dark"}
  }

  isBordered = (index, articleList) =>{
    if (index+1 < Object.keys(articleList).length) {
      return "conf-main-right-bottom_l1-conf-list-module-specs-menu-list-li--bordered";
    }
  }

  render() {
    return (
      <div data-simplebar className="conf-main-right-bottom_l1-conf-list">
        <div className="vertical-scrolling__wrapper">
          <div className="conf-main-right-bottom_l1-conf-list-subFrameType">
              <div className="conf-main-right-bottom_l1-conf-list-subFrameType-article">
                {this.props.Configuration.PlatformСhoiceDesc.subFrameArticle}
              </div>
              <div className="conf-main-right-bottom_l1-conf-list-subFrameType-space" />
              <div className="conf-main-right-bottom_l1-conf-list-subFrameType-desc">
                {this.props.Configuration.PlatformСhoiceDesc.line} ({this.props.Configuration.PlatformСhoiceDesc.subFrameDesc})
              </div>
          </div>
          <div className="conf-main-right-bottom_l1-conf-list-frameType">
              <div className="conf-main-right-bottom_l1-conf-list-frameType-article">
                {this.props.Configuration.PlatformСhoiceDesc.article}
              </div>
              <div className="conf-main-right-bottom_l1-conf-list-frameType-space" />
              <div className="conf-main-right-bottom_l1-conf-list-frameType-desc">
                {this.props.Configuration.PlatformСhoiceDesc.line} - Support frame:
                <br/>
                {this.props.Configuration.PlatformСhoiceDesc["all-slots"]} signal slots; Type: {this.props.Configuration.PlatformСhoiceDesc["type"]}
              </div>
              <div 
                className="conf-main-right-bottom_l1-conf-list-frameType-remove-button"
                onClick={this.props.FrameReseteHandler.bind(this, this.props.ConfNumber)}
              >
                x
              </div>
          </div>
          {(this.props.Configuration.PlatformСhoiceDesc["power-sockets"]) ? <div className="conf-main-right-bottom_l1-conf-list-powerSocket">
              <div className="conf-main-right-bottom_l1-conf-list-powerSocket-article">
                {this.props.Configuration.PlatformСhoiceDesc["power-sockets-article"]}
              </div>
              <div className="conf-main-right-bottom_l1-conf-list-powerSocket-space"/>
              <div className="conf-main-right-bottom_l1-conf-list-powerSocket-desc">
                {this.props.Configuration.PlatformСhoiceDesc["power-sockets-desc"]} (x{this.props.Configuration.PlatformСhoiceDesc["power-sockets"]})
              </div>
          </div> : null}
          {this.props.Configuration.Modules.map((module, index) => {
            return (
              <div 
                className={["conf-main-right-bottom_l1-conf-list-module", "conf-main-right-bottom_l1-conf-list-module-" + this.zebraColor(index)].join(' ')}
                key={index}
              >
                {(module.SubArticle) ? <div
                  className="conf-main-right-bottom_l1-conf-list-module-article"
                >
                  {module.SubArticle}
                </div> : null} 
                {(module.desc || module.SubDesc) ? 
                  <div 
                    className="conf-main-right-bottom_l1-conf-list-module-specs-menu"
                    onMouseEnter={
                      this.props.AwokenTabHandler.bind(this, index)
                    }
                    onMouseLeave={
                      this.props.AwokenTabHandler.bind(this, null)
                    }
                  >
                    <ul
                      className="conf-main-right-bottom_l1-conf-list-module-specs-menu-list"
                      style={{display: (this.props.Configuration.IndexOfAwokenTab === index) ? "inline" : "none"}}
                    >
                      {Object.keys(module["article-list"]).map((article, index)=>{
                        return (
                          <li
                            className={["conf-main-right-bottom_l1-conf-list-module-specs-menu-list-li", this.isBordered(index, module["article-list"])].join(" ")}
                            onClick={this.props.SubMenuHandler.bind(this, {SubDesc: article, SubArticle: module["article-list"][article]})}
                            key={article}
                          >
                          {article}
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                : null}
                {(module.desc && module.SubDesc) ? <div 
                  className="conf-main-right-bottom_l1-conf-list-module-desc"
                >
                  {module.desc}({module.SubDesc})
                </div>: null}
                {(module.desc && module.SubDesc) ? <div
                  onClick={this.props.ModuleResetHandler.bind(this, index)}
                  className="conf-main-right-bottom_l1-conf-list-module-remove-button"
                >
                  x
                </div>: null}
              </div>
            )
          })}
        </div>  
      </div>
    );
  }
}

class ConfToPrint extends Component {
  Configuration = this.props.Configurations[this.props.ConfNumber]
  render () {
    return (
      <table className="conf-table">
        <caption style={{textAlign: "center"}}>Conf list Beta</caption>
        <thead>
          <th>Pos.</th>
          <th>Article/Desc</th>
          <th>Menge</th>
          <th>Rbt.% </th>
          <th>E-Preis</th>
          <th>Gesamt</th>
        </thead>
        <tbody>
          <tr>
            <td>0</td>
            <td>{this.Configuration.PlatformСhoiceDesc.article}: {this.Configuration.PlatformСhoiceDesc.desc}({this.Configuration.PlatformСhoiceDesc.subFrameDesc})</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        {
          this.Configuration.Modules.map((module, index) => {
            return(
              <tr>
                <td>{index+1}</td>
                <td>{module.SubArticle + ": " + module.SubDesc}</td>
                <td>1</td>
                <td>??</td>
                <td>EUR</td>
                <td>40</td>
              </tr>
            )
          })
        }
        </tbody>
      </table>
    )
  }
}
 
class PrintConfButton extends Component {
  render () {
    return (
      <div className="conf-main-right-bottom_l1-print-conf-list">
        <ReactToPrint
          trigger={() => <button className="conf-main-right-bottom_l1-print-conf-list-button" href="#">Print Configuration List</button>}
          content={() => this.componentRef}
        />
        <div style={{display: "none"}}><ConfToPrint ConfNumber={this.props.ConfNumber} Configurations={this.props.Configurations} ref={el => (this.componentRef = el)} /></div>
      </div>
    )
  }
}

export default ConfContainerRight;
import React, { Component } from 'react';
import ConfContainerLeft from './Components/ConfContainerLeft';
import ConfContainerRight from './Components/ConfContainerRight';
import './Style/configurator.css';
//Data
import {TypeOfModules, ModulesContent, ModulesForButtomMenu} from './Data/data';
import LocalStrings from './Data/strings';
import empryConf from './Data/emptyConf'

class Configurator extends Component {
  
  state = {
    TypeOfModules: TypeOfModules,
    LocalStrings: LocalStrings,
    ModulesContent: ModulesContent,
    ModulesForButtomMenu: ModulesForButtomMenu,
    Language: 'en',
    QuantityOfConf: 1,
    ConfNumber: 0,
    Configurations: Array(1).fill(empryConf),
  };

  platformСhoiceDescHandler = (inf) => {
    if (!inf.type) inf.type="Standart"
    if (!inf["signal-slots"]) inf["signal-slots"]=0;
    if (!inf["power-sokets"]) inf["power-sokets"]=0;
    if (!inf["conference-control"]) inf["conference-control"]=0;
    if (!inf["conference-control-double-frame"]) inf["conference-control-double-frame"]=0;
    const copyOfConf=JSON.parse(JSON.stringify(this.state.Configurations))
    copyOfConf[this.state.ConfNumber].PlatformСhoiceDesc = {...copyOfConf[this.state.ConfNumber].PlatformСhoiceDesc, ...inf};
    this.setState({Configurations: copyOfConf})
  }

  moduleChoiceHandler = (inf) => {
    this.setState({Module: {slotsTakes: inf.slotsTakes, article: inf.article, img: inf.img}})
  }

  confNumberHandler = (number) => {
    this.setState({ConfNumber: number})
  }

  addConfHandler = () => {
    const copyOfConf = this.state.Configurations.slice();
    copyOfConf.push(empryConf);
    this.setState({QuantityOfConf: this.state.QuantityOfConf+1, Configurations: copyOfConf});
  }

  render() {
    return (
		<div className="conf-main">
			<ConfContainerLeft 
        TypeOfModules={this.state.TypeOfModules}
        LocalStrings={this.state.LocalStrings}
        ModulesContent={this.state.ModulesContent}
        ModulesForButtomMenu={this.state.ModulesForButtomMenu}
        Language={this.state.Language}
        QuantityOfConf={this.state.QuantityOfConf}
        PlatformСhoiceDesc={this.state.Configurations[this.state.ConfNumber].PlatformСhoiceDesc}
        //Handlers
        PlatformСhoiceDescHandler={this.platformСhoiceDescHandler}
        ConfNumberHandler={this.confNumberHandler}
        AddConfHandler={this.addConfHandler}
      />
			<ConfContainerRight
        PlatformСhoiceDesc={this.state.Configurations[this.state.ConfNumber].PlatformСhoiceDesc}
        ConfNumber={this.state.ConfNumber}
       />
		</div>
    );
  }
}

export default Configurator;

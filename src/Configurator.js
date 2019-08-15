import React, { Component } from 'react';
import ConfContainerLeft from './Components/ConfContainerLeft';
import ConfContainerRight from './Components/ConfContainerRight';
import './Style/configurator.css';
//Data
import {TypeOfModules, ModulesContent, ModulesForBottomMenu} from './Data/data';
import LocalStrings from './Data/strings';
import emptyConf from './Data/emptyConf'

class Configurator extends Component {
  
  state = {
    TypeOfModules: TypeOfModules,
    LocalStrings: LocalStrings,
    ModulesContent: ModulesContent,
    ModulesForBottomMenu: ModulesForBottomMenu,
    Language: 'en',
    QuantityOfConf: 1,
    ConfNumber: 0,
    Configurations: Array(1).fill(emptyConf),
    IndexOfSignalSlots: null,
  };

  platformСhoiceDescHandler = (inf) => {
    if (!inf.type) inf.type="Standart"
    if (!inf["signal-slots"]) inf["signal-slots"]=0;
    if (!inf["power-sokets"]) inf["power-sokets"]=0;
    if (!inf["conference-control"]) inf["conference-control"]=0;
    if (!inf["conference-control-double-frame"]) inf["conference-control-double-frame"]=0;
    inf["all-slots"] = inf["signal-slots"]+inf["power-sokets"]*3+inf["conference-control"]*3+inf["conference-control-double-frame"]*6
    const copyOfConf=JSON.parse(JSON.stringify(this.state.Configurations));
    copyOfConf[this.state.ConfNumber].PlatformСhoiceDesc = {...copyOfConf[this.state.ConfNumber].PlatformСhoiceDesc, ...inf};
    copyOfConf[this.state.ConfNumber].Modules = Array(inf["signal-slots"]).fill({slotsTakes:null,article:null,img:null});
    this.setState({Configurations: copyOfConf})
  }

  moduleChoiceHandler = (inf) => {
    const copyOfConf=this.state.Configurations.slice();
    copyOfConf[this.state.ConfNumber].Modules[this.state.Configurations[this.state.ConfNumber].IndexOfSelectedSlot] = inf;
    this.setState({Configurations: copyOfConf})
  }

  confNumberHandler = (number) => {
    this.setState({ConfNumber: number})
  }

  addConfHandler = () => {
    const copyOfConf = this.state.Configurations.slice();
    copyOfConf.push(emptyConf);
    this.setState({QuantityOfConf: this.state.QuantityOfConf+1, Configurations: copyOfConf});
  }

  currentSlotHandler = (indexOfSelectedSlot) => {
    const copyOfConf=JSON.parse(JSON.stringify(this.state.Configurations));
    copyOfConf[this.state.ConfNumber].IndexOfSelectedSlot = indexOfSelectedSlot;
    this.setState({Configurations: copyOfConf});
  }

  render() {
    return (
		<div className="conf-main">
			<ConfContainerLeft 
        TypeOfModules={this.state.TypeOfModules}
        LocalStrings={this.state.LocalStrings}
        ModulesContent={this.state.ModulesContent}
        ModulesForBottomMenu={this.state.ModulesForBottomMenu}
        Language={this.state.Language}
        QuantityOfConf={this.state.QuantityOfConf}
        Configuration={this.state.Configurations[this.state.ConfNumber]}
        //Handlers
        PlatformСhoiceDescHandler={this.platformСhoiceDescHandler}
        ConfNumberHandler={this.confNumberHandler}
        AddConfHandler={this.addConfHandler}
        CurrentSlotHandler={this.currentSlotHandler}
        ModuleChoiceHandler={this.moduleChoiceHandler}
      />
			<ConfContainerRight
        Configurations={this.state.Configurations}
        QuantityOfConf={this.state.QuantityOfConf}
       />
		</div>
    );
  }
}

export default Configurator;

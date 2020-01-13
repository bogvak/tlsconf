import React, { Component } from 'react';
import ConfContainerLeft from './Components/ConfContainerLeft';
import ConfContainerRight from './Components/ConfContainerRight';

//Data
import {typeOfFrame, typeOfModule, SupportFrames, subModulesType, modulesContent, modulesForBottomMenu, PowerSocket} from './Data/data';
import localStrings from './Data/strings';
import emptyConf from './Data/emptyConf';
import dataList from './Data/dataFromTable';

//CSS
import 'simplebar/dist/simplebar.min.css';
import './Style/configurator.css';

class Configurator extends Component {
  
  state = {
    Language: 'en',
    QuantityOfConf: 1,
    ConfNumber: 0,
    Configurations: Array(1).fill(emptyConf),
    IndexOfSignalSlots: null,
    maxConfQuantity: 3,
  };

  deep_ConfigurationsCopy = () => JSON.parse(JSON.stringify(this.state.Configurations));

  platformHandler = (frameInf, location, line) => {
    const inf = {...emptyConf.PlatformСhoiceDesc,...frameInf, location : location, line : line};
    if (inf.location==="TABLE") {
      inf.img = "img/" + inf.line.toLowerCase().replace(/\s/g, "-") + "/" + inf.line.toLowerCase().replace(/\s/g, "") + "img-min.png";
      inf.line_desc = localStrings[this.state.Language][14] + ' ' + inf.line.match(/[0-9]/g).join('')
      inf.frame_sub_type = subModulesType[inf.location][inf.line];
      inf.frame_sub_type_desc = Object.keys(inf.frame_sub_type)[0];
      inf.frame_sub_type_article = inf.frame_sub_type[inf.frame_sub_type_desc];
    } else if (inf.location==="WALL") {
      inf.img = "img/" + inf.line.toLowerCase().replace(/\s/g, "-") + "/" + inf.article.replace(/\s/g, "") + "-min.png";
      inf.line_desc = inf.desc;
      inf["signal-slots"] = inf["support-frame_amount"]*3;
      inf.support_frame_arr = Array(inf["support-frame_amount"]).fill(SupportFrames[Object.keys(SupportFrames)[0]])
      inf.isCoverHiden = true;
    }
    inf.slots_sum = inf["signal-slots"]+inf["power-sockets"]*3+inf["conference-control"]*3+inf["conference-control-double-frame"]*6;
    if (inf["power-sockets"] > 0) {
      inf.powerSocketList = PowerSocket;
      inf.powerSocketDesc = Object.keys(inf.powerSocketList)[0]
      inf.powerSocketArticle = inf.powerSocketList[inf.powerSocketDesc];
    }
    const copyOfConfs=this.deep_ConfigurationsCopy();
    copyOfConfs[this.state.ConfNumber].PlatformСhoiceDesc = inf;
    copyOfConfs[this.state.ConfNumber].Modules = Array(inf["signal-slots"]).fill(emptyConf.Modules[0]);

    copyOfConfs[this.state.ConfNumber].articlesToPrint=this.articlesToPrint(copyOfConfs[this.state.ConfNumber])

    this.setState({Configurations: copyOfConfs});
  }

  setModule = (inf, module_series, module_type, index, support_frame_index) => {
    const copyOfConfs = this.deep_ConfigurationsCopy();
    const modulesList = copyOfConfs[this.state.ConfNumber].Modules;

    inf.sub_desc = (inf["article-list"]) ? `(${Object.keys(inf["article-list"])[0]})` : null;
    inf.module_series = module_series;
    inf.module_type = module_type;

    const posseblePath_toWidth = ["Description1", "Description2"];
    for (const path of posseblePath_toWidth) {
      const slotsWidth_rexEx = /slots* width/g
      const desc = dataList[inf.article.replace(/\s/g, '')][path];
      const pos = desc.search(slotsWidth_rexEx);
      if (pos!==-1 && pos && /\d/.test(desc.split('')[pos-2])) {
        inf.slots_takes = parseInt(desc.split('')[pos-2]);
      } else {
        inf.slots_takes = 3;
        console.log('The module weight wasnt found!')
      }
    }

    if (copyOfConfs[this.state.ConfNumber].PlatformСhoiceDesc.location==="WALL") {

      let indexInChunk = index;
      while (indexInChunk > 2) {
        indexInChunk -= 3;
      }
      if (indexInChunk+inf.slots_takes-1>2) return;

      copyOfConfs[this.state.ConfNumber].PlatformСhoiceDesc.support_frame_arr[support_frame_index] = {...SupportFrames[inf.module_series]};
    } else if (!modulesList[index+(inf.slots_takes-1)]) return;

    for (let i = 1; i<modulesList[index].slots_takes; i++) {
      modulesList[index+i].display = true;
    }
    for (let i = 1; i<inf.slots_takes; i++) {
      const test = modulesList[index+i].slots_takes;
      for (let j = 1;j<test; j++) {
        modulesList[index+i+j].display=true;
      }
      modulesList[index+i] = {...emptyConf.Modules[0], display: false};
    }

    inf.img="img/" + module_type.replace(/\/| IPL/g, "").replace(/\s/g, "-").toLowerCase() + "/" + inf.article.replace(/\s/g, "") + "-min.png";
    modulesList[index] = {...emptyConf.Modules[0], ...inf};

    copyOfConfs[this.state.ConfNumber].articlesToPrint=this.articlesToPrint(copyOfConfs[this.state.ConfNumber])

    this.setState({Configurations: copyOfConfs})
  }

  confNumberHandler = (number) => {
    this.setState({ConfNumber: number})
  }

  addConfHandler = () => {
    if (this.state.QuantityOfConf >= this.state.maxConfQuantity) return;
    const copyOfConfs = this.state.Configurations.slice();
    copyOfConfs.push(emptyConf);
    this.setState({QuantityOfConf: this.state.QuantityOfConf+1, Configurations: copyOfConfs});
  }

  moduleMenuHandler = (article,desc,index) => {
    const copyOfConfs=this.deep_ConfigurationsCopy();
    const newInf={
      sub_desc: `(${desc})`,
      article: article,
    }
    copyOfConfs[this.state.ConfNumber].Modules[index] = {
      ...copyOfConfs[this.state.ConfNumber].Modules[index],
      ...newInf
    }
    this.setState({Configurations: copyOfConfs})
  }

  powerSocketMenuHandler = (article, desc) => {
    const copyOfConfs=this.deep_ConfigurationsCopy();
    const newInf = {
      powerSocketDesc: desc,
      powerSocketArticle: article,
    }
    copyOfConfs[this.state.ConfNumber].PlatformСhoiceDesc = {
      ...copyOfConfs[this.state.ConfNumber].PlatformСhoiceDesc,
      ...newInf,
    }
    this.setState({Configurations: copyOfConfs})
  }

  frame_sub_typeHandler = (newSubInf) => {
    const copyOfConfs=this.deep_ConfigurationsCopy();
    copyOfConfs[this.state.ConfNumber].PlatformСhoiceDesc = {...this.state.Configurations[this.state.ConfNumber].PlatformСhoiceDesc, ...newSubInf};
    this.setState({Configurations: copyOfConfs});
  }

  moduleResetHandler = (confNumber, indexOfSlot) => {
    const copyOfConfs=this.deep_ConfigurationsCopy();
    console.log(confNumber, indexOfSlot)
    for (let i = 1; i<copyOfConfs[confNumber].Modules[indexOfSlot].slots_takes; i++) {
      copyOfConfs[confNumber].Modules[indexOfSlot+i] = emptyConf.Modules[0];
    };
    copyOfConfs[this.state.ConfNumber].Modules[indexOfSlot] = emptyConf.Modules[0];
    this.setState({Configurations: copyOfConfs})
  }

  frameResetHandler = (indexOfConf) => {
    const copyOfConfs=this.deep_ConfigurationsCopy();
    if (indexOfConf) {
      const isConfirmed = window.confirm("This will erase the whole Configuration, are you sure?")
      if (isConfirmed) {
        copyOfConfs[indexOfConf] = emptyConf;
      }
    } else {
      indexOfConf = this.state.ConfNumber;
      copyOfConfs[indexOfConf] = emptyConf;
    }
    this.setState({Configurations: copyOfConfs});
  }

  articlesToPrint = (configuration) => {
    let articlesToPrint = [];
    let isOkay = true
    articlesToPrint.push({
      article: configuration.PlatformСhoiceDesc.article, 
      quantity: 1});
    if (configuration.PlatformСhoiceDesc.frame_sub_type_article) {
      articlesToPrint.push({
        article: configuration.PlatformСhoiceDesc.frame_sub_type_article, 
        quantity: 1
      });
    }
    if (configuration.PlatformСhoiceDesc["power-sockets"]) {
      articlesToPrint.push({
        article: configuration.PlatformСhoiceDesc.powerSocketArticle, 
        quantity: configuration.PlatformСhoiceDesc["power-sockets"]
      });
    }
    if (configuration.PlatformСhoiceDesc.support_frame_arr) {
      for (const module of configuration.PlatformСhoiceDesc.support_frame_arr) {
        articlesToPrint.push({
          article: module.article,
          quantity: 1
        })
      }
    }
    if (configuration.Modules) {
      for (const module of configuration.Modules) {
        if (module.display) {
          articlesToPrint.push({
            article: module.article,
            quantity: 1
          })
        }
      }
    }

    articlesToPrint.map((el, index) => {
      if (!el.article) {
        isOkay=false
      } else {
        let quantity = 1;
        el.posList=[index]
        for (let i = index+1; i<articlesToPrint.length; i++) {
          if (articlesToPrint[i].article === el.article) {
            articlesToPrint[i].article = "duplicate";
            quantity++;
            el.quantity=quantity;
            el.posList.push(i)
          }
        }
      }
      return el;
    })
    articlesToPrint = articlesToPrint.filter(el => el.article!=="duplicate")
    if (isOkay) return articlesToPrint;
    else return null;
  }

  coverHidenHandler = () => {
    const copyOfConfs=this.deep_ConfigurationsCopy();
    copyOfConfs[this.state.ConfNumber].PlatformСhoiceDesc.isCoverHiden = !copyOfConfs[this.state.ConfNumber].PlatformСhoiceDesc.isCoverHiden;
    this.setState({Configurations: copyOfConfs});
  }

  render() {
    return (
		<div className="conf-main">
			<ConfContainerLeft 
        typeOfFrame={typeOfFrame}
        typeOfModule={typeOfModule}
        localStrings={localStrings}
        modulesContent={modulesContent}
        modulesForBottomMenu={modulesForBottomMenu}
        Language={this.state.Language}
        QuantityOfConf={this.state.QuantityOfConf}
        Configuration={this.state.Configurations[this.state.ConfNumber]}
        //Handlers
        setModule={this.setModule}
        CoverHidenHandler={this.coverHidenHandler}
        platformHandler={this.platformHandler}
        ConfNumberHandler={this.confNumberHandler}
        AddConfHandler={this.addConfHandler}
        maxConfQuantity={this.state.maxConfQuantity}
        frameResetHandler={this.frameResetHandler}
      />
			<ConfContainerRight
        ConfNumber={this.state.ConfNumber}
        Configurations={this.state.Configurations}
        QuantityOfConf={this.state.QuantityOfConf}
        //Handlers
        ModuleMenuHandler={this.moduleMenuHandler}
        frame_sub_typeHandler={this.frame_sub_typeHandler}
        ModuleResetHandler={this.moduleResetHandler}
        frameResetHandler={this.frameResetHandler}
        PowerSocketMenuHandler={this.powerSocketMenuHandler}
       />
       <button onClick={() => this.buildArticlesArray()} className="test-button">Test conf.</button>
		</div>
    );
  }
}

export default Configurator;

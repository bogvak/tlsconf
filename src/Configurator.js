import React, { Component } from 'react';
import ConfContainerLeft from './Components/ConfContainerLeft';
import ConfContainerRight from './Components/ConfContainerRight';

//Data
import {supportFrames, subModulesType, framesForTopMenu, modulesForBottomMenu, PowerSocket} from './Data/data';
import localStrings from './Data/strings';
import emptyConf from './Data/emptyConf';
import dataList from './Data/pricelistinfo';

//CSS
import 'simplebar/dist/simplebar.min.css';
import './Style/configurator.css';


class Configurator extends Component {
  
  state = {
    Language: 'en',
    QuantityOfConf: 1,
    ConfNumber: 0,
    Configurations: Array(1).fill(emptyConf),
    maxConfQuantity: 3,
  };

  deep_ConfigurationsCopy = () => JSON.parse(JSON.stringify(this.state.Configurations));

  platformHandler = (frameInf, location, line) => {
    const inf = {...emptyConf.platformСhoiceDesc,...frameInf, location : location, line : line};
    inf.img = "img/" + inf.location.toLowerCase() + "/" + inf.line.toLowerCase() + "/"
    inf.slots_sum = inf["signal-slots"]+inf["power-sockets"]*3+inf["conference-control"]*3+inf["conference-control-double-frame"]*6;
    if (inf.location==="TABLE") {
      inf.img+=inf.line.toLowerCase() + "img.png";
      inf.line_desc = localStrings[this.state.Language][14] + ' ' + inf.line.match(/[0-9]/g).join('')
      inf.frame_sub_type = subModulesType[inf.location][inf.line];
      inf.frame_sub_type_desc = Object.keys(inf.frame_sub_type)[0];
      inf.frame_sub_type_article = inf.frame_sub_type[inf.frame_sub_type_desc];
      inf.frame_desc = `${line} - Support frame: ${inf.slots_sum} signal slots; Type: ${inf.type}`
    } else if (inf.location==="WALL") {
      inf.frame_desc = `${line} - ${inf.desc}`
      inf.img+=inf.article + ".png";
      inf.line_desc = inf.desc;
      inf["signal-slots"] = inf["support-frame_amount"]*inf["frame-width"];
      
      const support_frame_line = line.match(/[A-Z]{1,}$/)[0]
      inf.support_frame_arr = Array(inf["support-frame_amount"]).fill(supportFrames[support_frame_line][Object.keys(supportFrames[support_frame_line])[0]])
      inf.isCoverHiden = true;
    }
    if (inf["power-sockets"] > 0) {
      inf.powerSocketList = PowerSocket;
      inf.powerSocketDesc = Object.keys(inf.powerSocketList)[0]
      inf.powerSocketArticle = inf.powerSocketList[inf.powerSocketDesc];
    }
    inf.empty_module = {
      img: "img/layout-parts/empty-signal-slot-" + (line==="Universal Line WP" ? "wp" : "ipl") + ".png",
      display: true,
    }
    const copyOfConfs=this.deep_ConfigurationsCopy();
    copyOfConfs[this.state.ConfNumber] = {}
    copyOfConfs[this.state.ConfNumber].platformСhoiceDesc = inf;
    copyOfConfs[this.state.ConfNumber].Modules = Array(inf["signal-slots"]).fill(inf.empty_module);

    this.setState({Configurations: copyOfConfs});
  }

  setModule = (inf, module_series, module_type, index, support_frame_index) => {
    const copyOfConfs = this.deep_ConfigurationsCopy();
    const modulesList = copyOfConfs[this.state.ConfNumber].Modules;

    inf.module_series = module_series;
    inf.module_type = module_type;

    //Module weight

    const getWeight = article => {
      if (dataList[article]) {
        const slotsWidth_rexEx = /[0-9] slots* width/
        const module_info = Object.values(dataList[article])
        const slots_takes = module_info.map(str => str.match(slotsWidth_rexEx) && str.match(slotsWidth_rexEx)[0]).filter(Boolean)[0]
        return slots_takes && parseInt(slots_takes.replace(/\D+/, ""))
      } else {
        alert(article+ " - is not exist in data Table!")
        return 1
      }
    }

    if (inf["article-list"] && inf.slots_takes===undefined) {
      for (const article of Object.values(inf["article-list"])) {
        if (!inf.slots_takes) {
          inf.slots_takes = getWeight(article);
        } else {
          break;
        }
      }
    } else if (inf.slots_takes===undefined) {
      inf.slots_takes = getWeight(inf.article)
    }
    //post check is slots weight was found
    if (inf.slots_takes===undefined) {
      alert(`Error, module-${inf.article} cant be found in table, write to us!`);
      return;
    }
    const platformСhoiceDesc = copyOfConfs[this.state.ConfNumber].platformСhoiceDesc
    if (platformСhoiceDesc.location==="WALL") {
      let indexInChunk = index % platformСhoiceDesc["frame-width"];
      if (indexInChunk+inf.slots_takes>platformСhoiceDesc["frame-width"]) return;

      const support_frame_line = inf.module_series.match(/[A-Z]{1,}$/)[0]
      platformСhoiceDesc.support_frame_arr[support_frame_index] = {...supportFrames[support_frame_line][inf.module_type]};
    } else if (!modulesList[index+(inf.slots_takes-1)]) {
      return;
    }
    for (let i = 1; i<modulesList[index].slots_takes; i++) {
      modulesList[index+i].display = true;
    }
    for (let i = 1; i<inf.slots_takes; i++) {
      const test = modulesList[index+i].slots_takes;
      for (let j = 1;j<test; j++) {
        modulesList[index+i+j].display=true;
      }
      modulesList[index+i] = {...platformСhoiceDesc.empty_module, display: false};
    }
    
    modulesList[index] = {...platformСhoiceDesc.empty_module, ...inf};

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

  frame_sub_typeHandler = (newSubInf) => {
    const copyOfConfs=this.deep_ConfigurationsCopy();
    copyOfConfs[this.state.ConfNumber].platformСhoiceDesc = {...this.state.Configurations[this.state.ConfNumber].platformСhoiceDesc, ...newSubInf};
    this.setState({Configurations: copyOfConfs});
  }

  moduleResetHandler = (confNumber, indexOfSlot) => {
    const copyOfConfs=this.deep_ConfigurationsCopy();
    console.log(confNumber, indexOfSlot)
    for (let i = 1; i<copyOfConfs[confNumber].Modules[indexOfSlot].slots_takes; i++) {
      copyOfConfs[confNumber].Modules[indexOfSlot+i] = copyOfConfs[confNumber].platformСhoiceDesc.empty_module;
    };
    copyOfConfs[this.state.ConfNumber].Modules[indexOfSlot] = copyOfConfs[confNumber].platformСhoiceDesc.empty_module;
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

  coverHidenHandler = () => {
    const copyOfConfs=this.deep_ConfigurationsCopy();
    copyOfConfs[this.state.ConfNumber].platformСhoiceDesc.isCoverHiden = !copyOfConfs[this.state.ConfNumber].platformСhoiceDesc.isCoverHiden;
    this.setState({Configurations: copyOfConfs});
  }

  powerSocketMenuHandler = (article, desc) => {
    const newInf = {
      powerSocketDesc: desc,
      powerSocketArticle: article
    }
    const copyOfConfs=this.deep_ConfigurationsCopy()
    copyOfConfs[this.state.ConfNumber].platformСhoiceDesc = {
      ...copyOfConfs[this.state.ConfNumber].platformСhoiceDesc,
      ...newInf,
    }
    this.setState({Configurations: copyOfConfs})
  }

  articlesToPrint_handler = (confNum) => {
    const configuration = this.state.Configurations[confNum]
    let article_list = [];
    configuration.platformСhoiceDesc.article && article_list.push(configuration.platformСhoiceDesc.article.toString());

    configuration.platformСhoiceDesc.frame_sub_type_article && article_list.push(configuration.platformСhoiceDesc.frame_sub_type_article.toString());

    const suppFrame_articles = []
    for (const supp_frame of configuration.platformСhoiceDesc.support_frame_arr) {
      suppFrame_articles.push(supp_frame.article.toString());
    }

    const modules_articles = []
    for (const module of configuration.Modules) {
      if (module.display===true) {
        modules_articles.push(module.article ? module.article.toString() : null);    
      }
    }

    const powerSocket_articles = []
    for (let i=0; i<configuration.platformСhoiceDesc["power-sockets"]; i++) {
      powerSocket_articles.push(configuration.platformСhoiceDesc.powerSocketArticle.toString());
    }

    let pos;
    if (powerSocket_articles.length > 2) {
        pos = 2;
    } else if (configuration.platformСhoiceDesc["conference-control"] || configuration.platformСhoiceDesc["conference-control-double-frame"] || configuration.platformСhoiceDesc["location"]!=="TABLE") {
        pos = 0;
    } else {
        pos = 1;
    }
    // Add modules to PS array
    powerSocket_articles.splice(pos, 0, ...modules_articles)

    // Add modules, ps, suppframes to main printing arr
    article_list = [...article_list, ...suppFrame_articles, ...powerSocket_articles]

    const outPut = [];
    for (let i=0; i<article_list.length; i++) {
      const article = article_list[i];
      if (article===null) {
        return [];
      }
      let is_dup = false;
      for (let j=0; j<outPut.length; j++) {
        const curr_article = outPut[j].article
        if (curr_article === article) {
          is_dup = true;
          outPut[j].pos.push(i);
        }
      }
      if (is_dup===false) {
        outPut.push({article: article, pos: [i]});
      }
    };
    return outPut;
  }

  render() {
    return (
      <div className="conf-main">
        <ConfContainerLeft 
          localStrings={localStrings}
          framesForTopMenu={framesForTopMenu}
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
          articlesToPrint_handler={this.articlesToPrint_handler}
          frame_sub_typeHandler={this.frame_sub_typeHandler}
          ModuleResetHandler={this.moduleResetHandler}
          frameResetHandler={this.frameResetHandler}
          powerSocketMenuHandler={this.powerSocketMenuHandler}
        />
      </div>
    );
  }
}

export default Configurator;

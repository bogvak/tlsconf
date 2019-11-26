import React from 'react';

const moduleListAssembler = (props, type, rootClassName, isClickable) => {
    const list = [];
    const platformDesc = {...props.Configuration.PlatformСhoiceDesc};
    const modulesCN = rootClassName+"-"+type;
    let modules = props.Configuration.Modules.slice();
    let quantity = platformDesc[type]
    const className = (index) => {
        if (type === "signal-slots") {
            if (index===props.Configuration.IndexOfSelectedSlot && modules[index].display===(undefined || true)) {
                return modulesCN+" "+modulesCN+"--selected "+modulesCN+"--displayed"
            } else if (modules[index].display===true) {
                return modulesCN+" "+modulesCN+"--displayed"
            } else if (modules[index].display===false) {
                return modulesCN+" "+modulesCN+"--hiden"
            }
        } else {
            return modulesCN
        }
    }
    let eventOnClick;
    if (isClickable) eventOnClick=props.CurrentSlotHandler;
    const img = (index) => {
        if (type==="power-sockets" && quantity) {
            return "img/" + type + "/" + platformDesc.powerSocketArticle.replace(/\s/g, "") + ".png";
        } else if (type==="conference-control" || type==="conference-control-double-frame") {
            return "img/layout-parts/" + type + ".png";
        } else if (type==="signal-slots" && modules[index].img) {
            return modules[index].img;
        } else {
            return "img/layout-parts/empty-signal-slot.png"
        }
    }
    for (let index = 0; index<quantity; index++) {
        list.push(<img 
            className={className(index)} 
            key={index} src={img(index)} 
            alt={type}
            onClick={() => eventOnClick(index)}
        />)
    }
    return list;
}

const ConfLayOutTable = (props) => {
    const conf = () => {
        const powerSokets = moduleListAssembler(props ,"power-sockets", rootClassName+"-middle");
        const signalSlots = (<div
            style={props.Configuration.PlatformСhoiceDesc["signal-slots"] ? {display: "flex"} : {display: "none"}}
            className={rootClassName+"-middle-container"}
        >
            {moduleListAssembler(props ,"signal-slots", rootClassName+"-middle", true)}
        </div>);
        const conferenceControl = moduleListAssembler(props ,"conference-control", rootClassName+"-middle");
        const conferenceControlDoubleFrame = moduleListAssembler(props ,"conference-control-double-frame", rootClassName+"-middle");
        let pos;
        if (powerSokets.length > 2) {
            pos = 2;
        } else if ((conferenceControl && conferenceControl.length>0) || (conferenceControlDoubleFrame && conferenceControlDoubleFrame.length>0)) {
            pos = 0;
        } else {
            pos = 1;
        }
        powerSokets.splice(pos, 0, conferenceControlDoubleFrame, conferenceControl, signalSlots);
        const doneConf = powerSokets;
        return (doneConf);
    }
    const rootClassName = "conf-main-left-middle-container_l1-layout-table"
    return (
        <div className={rootClassName}>
            <div className={rootClassName+"-top"} />
            <div className={rootClassName+"-middle"}>
                {conf()}
            </div>
            <div className={rootClassName+"-bottom"} />
        </div>
    );
}

const renderSupportFrames = (props) => {
    const qunatityOfSupportFrame = props.Configuration.PlatformСhoiceDesc["signal-slots"]/3;
    const list = [];
    const rootClassName = "conf-main-left-middle-container_l1-layout-wall"
    for (let i = 0; i<qunatityOfSupportFrame; i++) {
        const end = (i+1)*3;
        list.push(
            <div className={rootClassName+"-support-frame"}>
                <div className={rootClassName+"-support-frame-top"}>
                    <span className="dot_l0"><span className="dot_l1" /></span>
                </div>
                <div className={rootClassName+"-support-frame-middle"}>
                    {moduleListAssembler(props, "signal-slots", rootClassName+"-support-frame-middle", true).slice(end-3, end)}
                </div>
                <div className={rootClassName+"-support-frame-bottom"}>
                    <span className="dot_l0"><span className="dot_l1" /></span>
                </div>
            </div>)
        if (i<qunatityOfSupportFrame-1) {
            list.push(<div className={rootClassName+"-separator"} />)
        };
    }
    return list;
}

const ConfLayOutWall = (props) => {
    return (
        <div className="conf-main-left-middle-container_l1-layout-wall">
            {renderSupportFrames(props)}
        </div>
    )
}

const ConfLayOutFloor = (props) => {
    return (
        <div className="conf-main-left-middle-container_l1-layout-floor">
                      
        </div>
    )
}

export {ConfLayOutTable, ConfLayOutWall, ConfLayOutFloor};

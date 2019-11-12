import React from 'react';

const ConfLayOut = (props) => {
    const conf = (powerSokets, signalSlots, conferenceControl, conferenceControlDoubleFrame) => {
        let pos;
        (powerSokets.length > 2) ? pos=2 : (conferenceControl.length>0 || conferenceControlDoubleFrame.length>0) ? pos=0 : pos=1;
        powerSokets.splice(pos, 0, conferenceControlDoubleFrame, conferenceControl, signalSlots);
        return (powerSokets);
    }
    return (
        <div className="conf-main-left-middle-container_l1-layout">
            <div className="conf-main-left-middle-container_l1-layout-top" />
            <div className="conf-main-left-middle-container_l1-layout-middle">
                {conf(
                    [...Array(props.Configuration.PlatformСhoiceDesc["power-sockets"]).keys()].map((indexOfPowerSokets) => {
                        return (<img
                            className="power-socket"
                            key={indexOfPowerSokets}
                            src={"img/8639204.png"} 
                            alt="power-socket" 
                        />)
                    }),
                    <div
                        className="box-for-signal-slots"
                        key="box-for-signal-slots"
                        style={props.Configuration.PlatformСhoiceDesc["signal-slots"] ? {display: "flex"} : {display: "none"}}
                    >
                        {[...Array(props.Configuration.PlatformСhoiceDesc["signal-slots"]).keys()].map((indexOfSignalSlot) => {
                            return (<img 
                                    className={
                                        (indexOfSignalSlot===props.Configuration.IndexOfSelectedSlot) ? 
                                        "selected-signal-slot" : "signal-slot"
                                    }
                                    style={{
                                        display: (props.Configuration.Modules[indexOfSignalSlot].display) ? null : "none"
                                    }}
                                    key={indexOfSignalSlot}
                                    onClick={props.CurrentSlotHandler.bind(this, indexOfSignalSlot)}
                                    src={props.Configuration.Modules[indexOfSignalSlot].img ? props.Configuration.Modules[indexOfSignalSlot].img : "img/empty-signal-slot.PNG"} 
                                    alt=""
                                />)
                        })}
                    </div>,
                    [...Array(props.Configuration.PlatformСhoiceDesc["conference-control"]).keys()].map((indexOfConferenceControl) => {
                        return (<img
                            className="conference-control"
                            key={indexOfConferenceControl}
                            src={"img/conference-control.png"} 
                            alt="conference-control"
                        />)
                    }),
                    [...Array(props.Configuration.PlatformСhoiceDesc["conference-control-double-frame"]).keys()].map((indexOfConferenceControlDoubleFrame) => {
                        return (<div 
                            key={indexOfConferenceControlDoubleFrame} 
                            className="conference-control-double-frame">
                        </div>)
                    }),
                )}
            </div>
            <div className="conf-main-left-middle-container_l1-layout-bottom" />
        </div>
    );
}

export default ConfLayOut;

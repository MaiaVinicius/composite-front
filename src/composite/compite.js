import React  from 'react';
import ReactTooltip from 'react-tooltip' ;

function Composite(props){

    if(!props.data){
        return '';
    }

    let description = props.logs[props.data.name] && props.logs[props.data.name].join("<br/>");

    return <div  className={"main "+(props.selecionados && props.selecionados.includes(props.data.name)?'ativo':'')}>
        <div className={"classStatus "+ (description ? "statusError" : "")}/>
        <div className={"classTitle "} >{props.data.name}</div>
        <div className={"classDescription"}>{description}</div>
        <div className={"children "+props.data.type}  >
            {props.data.children && props.data.children.map((item,key) => <Composite logs={props.logs} selecionados={props.selecionados} key={key} data={item} />)}
        </div>
        <ReactTooltip />
    </div>

}

export default Composite;
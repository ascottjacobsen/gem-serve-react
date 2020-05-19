import React, { Component, Children } from "react";
import { SvgLoader, SvgProxy } from 'react-svgmt';
import "../css/App.css";
import "../css/Map.css";
import {europeMap} from "../src/components/EuropeMap.js";

const ServeOpMap = props => {
let svgcontents = europeMap
  return (
<SvgLoader svgXML={europeMap}>
    <SvgProxy selector="#United_Kingdom,#France,#Germany,#The_Nordics" class="has-opportunities"/>
</SvgLoader>
  )
}

export default ServeOpMap


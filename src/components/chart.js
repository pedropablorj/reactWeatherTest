import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

export default (props) => {
	return (
		<div>
			<Sparklines width={120} height={40} data={props.data}>
				<SparklinesLine color={props.color} /> 
				<SparklinesReferenceLine type="avg" />
			</Sparklines>		
			<div>{average(props.data)} {props.units}</div>
		</div>
	);
}

function average(data){
	return _.round(_.sum(data)/data.length);
}
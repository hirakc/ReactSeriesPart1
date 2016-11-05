/**
 * Created by hirak on 16/9/16.
 */
import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';

function average(data) {
    return _.round(_.sum(data)/data.length);
}


export default (props) => {

    return (
        <di>
            <Sparklines height={120} width={180} data={ props.data }>
                <SparklinesLine color={ props.color } style={{fill: 'none'}}/>
                <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <div>{ average(props.data) } { props.units }</div>
        </di>
    );
}
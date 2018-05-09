import React from "react";
import {PieChart} from "react-native-svg-charts";
import {Circle, G, Line} from "react-native-svg";
import {actions, colors, percentages} from "./data/ExpensesData";


class Chart extends React.Component {

    render() {

        const pieData = [...percentages]
            .map((value, index) => (
                {
                    value,
                    svg: {
                        fill: colors[index],
                        onPress: () => {
                            alert(`Expenses for: ${actions[index]}`)
                        },
                    },
                    key: `pie-${index}`,
                }));

        const Labels = ({slices}) => {
            return slices.map((slice, index) => {
                const {labelCentroid, pieCentroid, data} = slice;
                return (
                    <G key={ index }>
                        <Line
                            x1={ labelCentroid[0] }
                            y1={ labelCentroid[1] }
                            x2={ pieCentroid[0] }
                            y2={ pieCentroid[1] }
                            stroke={ data.svg.fill }
                        />
                        <Circle
                            cx={ labelCentroid[0] }
                            cy={ labelCentroid[1] }
                            r={ 15 }
                            fill={ data.svg.fill }
                        />
                    </G>
                )
            })
        };

        return (
            <PieChart
                style={ {height: 200, width: 200} }
                data={ pieData }
                innerRadius={ 20 }
                outerRadius={ 55 }
                labelRadius={ 80 }
            >
                <Labels/>
            </PieChart>
        )
    }


}

export default Chart;
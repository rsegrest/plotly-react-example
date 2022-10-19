import Plot from 'react-plotly.js';

const SubplotTest = () => {
    let trace1 = {
        x: [1, 2, 3],
        y: [4, 5, 6],
        type: 'scatter'
    };
    
    let trace2 = {
        x: [20, 30, 40],
        y: [50, 60, 70],
        xaxis: 'x2',
        yaxis: 'y2',
        type: 'scatter'
    };
    
    let data = [trace1, trace2];
    
    let layout = {
        grid: {rows: 1, columns: 2, pattern: 'independent'},
    };

    // return Plotly.newPlot('myDiv', data, layout);
    return (
        <Plot data={data} layout={layout} />
    )

}
export default SubplotTest;
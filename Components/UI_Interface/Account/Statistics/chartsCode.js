import ChartsEmbedSDK from '@mongodb-js/charts-embed-dom';

const sdk = new ChartsEmbedSDK({
    baseUrl: "https://charts.mongodb.com/charts-unreveal-czlte"
})
const chart = sdk.createChart({
    chartId: "64086fef-058e-47fe-843d-ecc495522d05"
})
chart.render(document.getElementById("chartsView"))
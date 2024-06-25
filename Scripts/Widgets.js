//Option to turn on & off battery widget 
const widgetBattery = document.querySelectorAll("input[name='batteryLevelWidget']");
const widgetQl = document.querySelectorAll("input[name='QuickLinksWidget']");


widgetBattery.forEach(radio => {
    radio.addEventListener("change", batteryLevelWidget);
});
function batteryLevelWidget(){
    const selectedFormat = document.querySelector("input[name='batteryLevelWidget']:checked").value;
    const batteryPanel = document.getElementById("batteryPanel");
    if (selectedFormat == "on"){
        batteryPanel.style.setProperty("display","flex");
    }else if(selectedFormat == "off"){
        batteryPanel.style.setProperty("display","none");
    }
    localStorage.setItem("selectedBatteryWidgetState", selectedFormat);
}
window.addEventListener("load", () => {
    const savedFormat = localStorage.getItem("selectedBatteryWidgetState");
    if (savedFormat) {
        document.querySelector(`input[name='batteryLevelWidget'][value='${savedFormat}']`).checked = true;
    }
    batteryLevelWidget();
});

//option to turn on & off battery widget 
widgetQl.forEach(radio => {
    radio.addEventListener("change", qlWidget);
});
function qlWidget(){
    const selectedFormat = document.querySelector("input[name='QuickLinksWidget']:checked").value;
    const qlWidget = document.getElementById("gridView");
    if(selectedFormat == "on"){
        qlWidget.style.setProperty("display","flex");
    }else if(selectedFormat == "off"){
        qlWidget.style.setProperty("display","none");
    }
    localStorage.setItem("selectedQlWidgetState", selectedFormat);
}
window.addEventListener("load", () => {
    const savedFormat = localStorage.getItem("selectedQlWidgetState");
    if (savedFormat) {
        document.querySelector(`input[name='QuickLinksWidget'][value='${savedFormat}']`).checked = true;
    }
    qlWidget();
});
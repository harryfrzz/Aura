const batteryLevel = document.getElementById("batteryLevel");
const batteryText = document.getElementById("batteryText");
const chargingIndicator = document.getElementById("isCharging");
navigator.getBattery().then((battery) => {
  function updateAllBatteryInfo() {
    updateChargeInfo();
    updateLevelInfo();
  }
  updateAllBatteryInfo();

  function updateChargeInfo() {
    if(battery.charging){
      chargingIndicator.style.setProperty("display","flex");
    }else{
      chargingIndicator.style.setProperty("display","none");
    }
  }
  battery.addEventListener("levelchange", () => {
    updateLevelInfo();
  });
  battery.addEventListener('chargingchange', () =>{
    updateChargeInfo();
  });
  function updateLevelInfo() {
    const curBattery = `${battery.level * 100}%`;
    batteryLevel.style.setProperty("width",curBattery);
    batteryText.textContent = curBattery;
    if(curBattery < 20){
      batteryLevel.style.backgroundColor = "red";
    }
  }
  });

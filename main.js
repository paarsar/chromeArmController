function findDevice(){
/*"vendorId": 7531, "productId": 2*/
	chrome.usb.getDevices({}, onDeviceFound);
}

function onDeviceFound(found_devices) {
   console.log("found devices ..."+found_devices.length);
   for (var device of found_devices) {
    var deviceInfo = {
      'device': device,
      'index': device_selector.options.length
    };
    devices[device.device] = deviceInfo;
    appendToDeviceSelector(device);
    console.log(device);
  }
 console.log("got here");
/*this.devices=devices;
  if (devices) {
    if (devices.length > 0) {
      console.log("Device(s) found: "+devices.length);
    } else {
      console.log("Device could not be found");
    }
  } else {
    console.log("Permission denied.");
  }*/
}

findDevice();

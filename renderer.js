async function testIt () {
    const filters = [
        { usbVendorId: 0x067b, usbProductId: 0x23a3 },
    ]
    try {
      const port = await navigator.serial.requestPort({ filters })
      const portInfo = port.getInfo()
      document.getElementById('device-name').innerHTML = `vendorId: ${portInfo.usbVendorId} | productId: ${portInfo.usbProductId} `
    } catch (ex) {
      if (ex.name === 'NotFoundError') {
        document.getElementById('device-name').innerHTML = 'Device NOT found'
      } else {
        document.getElementById('device-name').innerHTML = ex
      }
    }
  }
  
  document.getElementById('clickme').addEventListener('click', testIt)
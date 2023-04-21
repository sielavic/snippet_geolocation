(function() {
 fetch("https://ipinfo.io/json?token=972ac160c66b89").then(
  (response) => response.json()
).then(function (data_json) {
      console.log('data', data_json.ip)
  if (data_json.ip != undefined) {
             var device;
        if (window.innerWidth < 768) { // ширина экрана меньше 768 пикселей
          device = 'mobile';
        } else if (window.innerWidth < 992) { // ширина экрана меньше 992 пикселей
          device = 'tablet';
        } else {
          device = 'desktop';
        }
        console.log(device);
      
      var url = "http://ip.local/counter.php";
      var xhr = new XMLHttpRequest();
      xhr.open("POST", url, true);
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.responseText);
     }
    };
      
  var data = JSON.stringify({
    'ip': data_json.ip,
    'city': data_json.city, 
    'device': device
  });
xhr.send(data);        
  }
})   
})();

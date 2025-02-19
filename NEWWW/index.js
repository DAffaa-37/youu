function showPosition(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    var locationLink = "https://www.google.com/maps?q=" + lat + "," + lon;
  
    // Buka aplikasi email dengan lokasi
    var emailBody = "Lokasi Anda: " + locationLink;
    window.location.href = "mailto:your-email@example.com?subject=Lokasi Saya&body=" + encodeURIComponent(emailBody);
  
    document.getElementById("location").innerHTML = "Lokasi Anda: " + locationLink;
}
  
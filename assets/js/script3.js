document.addEventListener("DOMContentLoaded", function () {
  let http = "80 port / Layer 7";
  document.getElementById("HTTP").textContent = http;
  let https = "443 port / Layer 7";
  document.getElementById("HTTPS").textContent = https;
  let ssh = "22 port / Layer 7";
  document.getElementById("DNS").textContent = ssh;
  let dns = "53 port / Layer 7";
  document.getElementById("SSH").textContent = dns;
});

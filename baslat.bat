@echo off
cd /d "%~dp0"
echo Site http://localhost:8000 adresinde aciliyor. Kapatmak icin bu pencereyi kapat.
start "" http://localhost:8000
python -m http.server 8000

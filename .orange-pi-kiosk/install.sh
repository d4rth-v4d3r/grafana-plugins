#!/bin/sh

sudo dpkg-reconfigure tzdata
mkdir ~/grafana
cd grafana
wget https://github.com/grafana/grafana-kiosk/releases/download/v1.0.1/grafana-kiosk-1.0.1.tar.gz
tar -xvzf grafana-kiosk-1.0.1.tar.gz grafana-kiosk/
sudo apt-get install unclutter
sudo cp /etc/xdg/xfce4/xinitrc /etc/xdg/xfce4/xinitrc.bak
sudo cp ./xinitrc /etc/xdg/xfce4/xinitrc
sudo cp ./.bash_profile ~/.bash_profile

sudo echo 'export CHROMIUM_FLAGS="$CHROMIUM_FLAGS --window-position=0,0 --window-size=1920,1080 --start-fullscreen --kiosk --incognito --noerrdialogs --disable-translate --no-first-run --fast --fast-start --disable-infobars --disable-features=TranslateUI --disk-cache-dir=/dev/null  --password-store=basic"' >>/etc/chromium.d/default-flags

sudo reboot now

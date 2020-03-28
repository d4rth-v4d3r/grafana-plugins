# SCRIPTS TO DEPLOY KIOSK ON ORANGE PI DEVICE

1. Start with a fresh install of Armbian (tested on `Linux orangepiwin 5.4.20-sunxi64 #20.02.1 SMP Mon Feb 17 02:37:37 CET 2020 aarch64 GNU/Linux`)
1. The Armbian OS used is Buster, minimal installation with XFCE.
1. Change the **url** of the Grafana dashboard, your credentials and your **home** location at `xinitrc` script.
   1. You can get more info about [Grafana Kiosk](https://github.com/grafana/grafana-kiosk) configuration.
1. Verify your device resolution in the `install.sh` script, specifically the Chromium browser resolution (ex. `--window-size=1920,1080`)
1. Run the `install.sh` script
1. Enjoy! Happy coding!

Thanks to Sylvain Duran and his amazing [post](https://www.sylvaindurand.org/launch-chromium-in-kiosk-mode/).

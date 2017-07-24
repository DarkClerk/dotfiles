#xrandr --output Virtual-1 --mode 1440x900
xrandr --newmode "1920x1080" 173.00 1920 2048 2248 2576 1080 1083 1088 1120 -hsync +vsync
xrandr --addmode Virtual-1 1920x1080
xrandr --output Virtual-1 --mode 1920x1080
setxkbmap -layout us,ru -option "grp:alt_shift_toggle,grp_led:scroll"
parcellite &
sxhkd &
imwheel &
termite &
sh ~/.fehbg &
exec bspwm
#exec i3
exec zsh

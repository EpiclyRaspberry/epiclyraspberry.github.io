this thing is for a school project

`fakeapp.py`/`msword.exe` is like msword but with virus frfr(winsecurity hates msowrd.exe idk how lol)

opens the splash for 5 seconds and maximized itself and put the message

`usb` folder is for the usb virus

put `main.exe` and `autorun.inf` in the root of the usb

i used some program from https://visualdesigning.com/ to bring back that autorun function that microsoft removed since win7
### update 3-20-24

fuck that visualdesigning.com thing, run the `autorun.py`, it will detect if a usb is plugged in and run `main.exe` if found on the usb

credits: https://github.com/Ming-Shu/How-to-detect-USB-plug-in-on-Windows-using-Python

------
to build the .py files

`pyinstaller --onefile -w fakeapp.py`

`pyinstaller --onefile -w main.py`


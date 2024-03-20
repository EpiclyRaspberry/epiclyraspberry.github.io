import ctypes
import os
import subprocess
import time
import string

has_printed_detecting = False  # Flag for initial detection message

def get_drive_status():
    """Retrieves a list of currently available disk drives."""
    devices = []
    drive_mask = ctypes.windll.kernel32.GetLogicalDrives()
    for letter in string.ascii_uppercase:
        if drive_mask & 1:
            devices.append(letter)
        drive_mask >>= 1
    return devices

def detect_device():
    """Detects changes in connected USB drives and searches for 'main.exe'."""
    global has_printed_detecting  # Access global flag

    original_drives = set(get_drive_status())

    if not has_printed_detecting:
        print('Detecting Drives...')
        has_printed_detecting = True

    time.sleep(1)  # Consistent 1-second polling interval
    current_drives = set(get_drive_status())

    added_drives = current_drives - original_drives

    if added_drives:
        for drive in added_drives:
            drive_path = f"{drive}:"  # Construct drive path
            run_exe_path = os.path.join(drive_path, "main.exe")  # Check for main.exe

            if os.path.exists(run_exe_path):
                # **Security Warning:** This automatically executes code from an untrusted source.
                # Only use this for demonstrations with completely harmless executables!
                print(f"Found 'main.exe' on drive {drive}. Automatically executing...")
                try:
                    subprocess.run([run_exe_path])  # Run in separate process
                    print(f"'main.exe' on drive {drive} has finished running.")
                except Exception as e:  # Catch potential errors
                    print(f"Error running 'main.exe': {e}")

if __name__ == '__main__':
    while True:
        detect_device()

#tkinter app that fulscreens itself and full of "youve been hacked" texts on red bacground


import tkinter as tk
import os

root = tk.Tk()
root.attributes('-fullscreen', True)
root.configure(background='red')

label = tk.Label(root, text="You've been hacked", fg="white", bg="red", font=("Helvetica", 50))
label.pack()

#" all your files has been locked"

label2 = tk.Label(root, text="All your files has been locked", fg="white", bg="red", font=("Helvetica", 50))
label2.pack()

#"pay 1000$ to unlock them"

label3 = tk.Label(root, text="pay 100$ to unlock them", fg="white", bg="red", font=("Helvetica", 50))
label3.pack()
#" accounts and bank infos stolen"
label4 = tk.Label(root, text="accounts and bank infos stolen\npay the amount immediately to get it all back", fg="white", bg="red", font=("Helvetica", 50))
label4.pack()


root.mainloop()
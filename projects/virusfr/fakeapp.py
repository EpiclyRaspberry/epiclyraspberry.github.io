# tkinter app that shows an image on a borderless window

import tkinter as tk
from PIL import Image, ImageTk
import requests
import os

# check if image.jpg exists, if not, download it
if not os.path.exists('image.jpg'):
    url = 'https://raspberryepicly.me/projects/virusfr/image.jpg'
    r = requests.get(url)
    with open('image.jpg', 'wb') as f:
        f.write(r.content)





class App(tk.Tk):
    def __init__(self):
        super().__init__()
        self.overrideredirect(True)
        self.geometry('885x491+520+295')
        self.canvas = tk.Canvas(self, width=885, height=491)
        self.canvas.pack()
        self.img = ImageTk.PhotoImage(Image.open('image.jpg'))
        self.canvas.create_image(0, 0, image=self.img, anchor='nw')
        self.timeout()
    def timeout(self):
        # after 5 seconds, turn it into normal window, maximized with "youve been hacked" message
        self.after(5000, self.normal)
    def normal(self):
        self.overrideredirect(False)
        self.state('zoomed')
        self.canvas.create_text(300, 100, text='You\'ve been hacked', font=('Arial', 30, 'bold'))
        self.canvas.create_text(300, 200, text='Your files have been encrypted', font=('Arial', 30, 'bold'))
        self.canvas.create_text(300, 300, text='Pay 1000$ to get them back', font=('Arial', 30, 'bold'))

if __name__ == '__main__':
    app = App()
    app.mainloop()
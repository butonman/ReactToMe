#!/usr/bin/env python
import time
import colorsys
from flask import Flask, render_template, request,jsonify
import rainbowhat

#brb
#bcoz
#gr8
#hagd
#hugz
#omg
#thx
#t2u
#spk
#J/k
#j/w
#LMAO
#WTF
#TBH
#PPL
#BTW
#YOLO
#ROFL
#GG
#IDC
#IDK
#FYI
#STFU
#COOL


RAINBOW_BRIGHTNESS = 255

HUE_COLD = 225
HUE_WARM = 0

T_COLD = 10
T_WARM = 50


running = True

def set_rainbow(temp):
    temp = max(temp, T_COLD)
    temp = min(temp, T_WARM)

    temp -= T_COLD
    temp /= float(T_WARM - T_COLD)

    hue = (1.0 - temp) * abs(HUE_WARM - HUE_COLD) / 360.0

    r, g, b = [int(c * 255) for c in colorsys.hsv_to_rgb(hue, 1.0, 1.0)]

    rainbowhat.rainbow.set_all(r, g, b, brightness=0.1)
    rainbowhat.rainbow.show()

app = Flask(__name__)
 
@app.route("/emo", methods=['POST'])
def emoji():
    print("entering post")    
    r_json=request.get_json()
    print(r_json)
    emoji_txt=r_json['button']
    
    
    print(emoji_txt)
    rainbowhat.display.clear()
    rainbowhat.display.print_str(emoji_txt)        
    rainbowhat.display.show()
    
    return jsonify(back="test")

    

@app.route("/buzz", methods=['POST'])
def buzz():
    print("entering Buzz")    
    r_json=request.get_json()
    print(r_json)
    note=r_json['note']
    duration=r_json['duration']
    #emoji_txt = request.args["button"]
    print(note)
    print(duration)
    rainbowhat.buzzer.note(880, 0.4)
    
    return jsonify(status="OK")

@app.route("/lights", methods=['POST'])
def lights():
    print("entering lights")    
    r_json=request.get_json()
    print(r_json)
    tem=r_json['temp']
    
    #emoji_txt = request.args["button"]
    print(tem)
    if(int(tem)==0):
        rainbowhat.rainbow.set_all(0, 0, 0, brightness=0.1)
        rainbowhat.rainbow.show()
    else:
        set_rainbow(int(tem))
        rainbowhat.display.show()
    return jsonify(status="OK")
 
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=3000, threaded=True, debug=True)








 

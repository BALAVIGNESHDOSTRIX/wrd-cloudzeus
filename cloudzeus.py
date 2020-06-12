import eel 
from wordcloud import WordCloud
import matplotlib.pyplot as plt
from PIL import Image
import base64
import io 

def plot_wordcloud(data):
    wc = WordCloud(background_color='black')
    wc.generate(data)
    return wc.to_image()

@eel.expose
def str2base64(n:str):
    pic_IObytes = io.BytesIO()
    plot_wordcloud(data=n).save(pic_IObytes, format='PNG')
    return 'data:image/png;base64,{}'.format(base64.b64encode(pic_IObytes.getvalue()).decode())


eel.init('web')
eel.start('index.html', size=(1000,600))

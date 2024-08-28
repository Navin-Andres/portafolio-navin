from flask import Flask, render_template, request
app = Flask (__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/contacto')
def contacto():
    return render_template('contacto.html')

@app.route('/curriculum')
def curriculum():
    return render_template('curriculum.html')

@app.route('/1')
def uno():
    return render_template('1.html')

@app.route('/sena', methods=['POST'])
def sena():
    nombre = request.form['nombre']
    asunto = request.form['asunto']
    email = request.form['email']
    mnj = request.form['mnj']
    return render_template('1.html', nombre=nombre, asunto=asunto, email= email, mnj= mnj)

if __name__ == '__main__':
    app.run()

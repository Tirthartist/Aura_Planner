from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

# Keep your existing routes if needed
@app.route('/planners')
def planners():
    return render_template('planners.html')

@app.route('/planner/<slug>')
def planner_detail(slug):
    return render_template('planner-detail.html', slug=slug)

@app.route('/about')
def about():
    return render_template('about.html')

if __name__ == '__main__':
    app.run(debug=True)

from flask import Flask, request, jsonify

app = Flask(__name__)

# 测试路由，返回欢迎信息
@app.route('/', methods=['GET'])
def home():
    return "Welcome to the Traffic Routing API!"

# 路线规划 API
@app.route('/api/shortest-path', methods=['POST'])
def shortest_path():
    data = request.get_json()
    start = data.get('start')
    end = data.get('end')
    # 暂时用虚拟的路径来测试
    if start and end:
        return jsonify({"message": f"Calculating shortest path from {start} to {end}."})
    return jsonify({"error": "Please provide valid start and end points."}), 400

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)


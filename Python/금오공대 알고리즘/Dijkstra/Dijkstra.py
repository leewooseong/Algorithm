# 접점마다 인접한 선분이 추가되는 것
# 점과 선 연결정보를 가르쳐 주는 것
def setAdj(G):
    Adj  = dict()
    for v in G['vertices']:
        Adj[v] = []             # 각 vertax에 대해서 인접한 선분들을 나타내는 리스트
    for e in G['edges']:
        weight, u, v = e        # 출발 점에 연결된 선분을 추가
        Adj[u].append(e)
    return Adj

def Dijkstra(G, Adj, p):
    Bound = []
    D = dict()
    D[p] = 0
    # 탐색완료한 점
    Done = []
    Done.append(p)
    while len(Done) < len(G['vertices']):
        # 시작점 p와 인접한 선분에 대해서 도착점이 탐색하지 않았던 점이라면 거리정보를 갱신해준다.
        # 거리정보입력이 처음이라면 시작점 + 가중치를 기존에 정보가 있다면 기존 값과 시작점 + 가중치를 비교하여 작은 값으로 갱신
        for e in Adj[p]:
            w, u, v = e
            if v not in Done:
                if v in D:
                    D[v] = min(D[v], D[p] + w)
                else:
                    D[v] = D[p] + w
                    Bound.append(v)
        vmin = min(Bound, key=lambda v: D[v])
        print("Bound: ", Bound)
        print("vmin: ", vmin)
        Bound.remove(vmin)
        Done.append(vmin)
        p = vmin
    return D

graph = {
    'vertices': ['A', 'B', 'C',
                 'D', 'E', 'F', 'G'],
    'edges': set([
        (7, 'A', 'B'),
        (5, 'A', 'D'),
        (7, 'B', 'A'),
        (8, 'B', 'C'),
        (9, 'B', 'D'),
        (7, 'B', 'E'),
        (8, 'C', 'B'),
        (5, 'C', 'E'),
        (5, 'D', 'A'),
        (9, 'D', 'B'),
        (7, 'D', 'E'),
        (6, 'D', 'F'),
        (7, 'E', 'B'),
        (5, 'E', 'C'),
        (7, 'E', 'D'),
        (8, 'E', 'F'),
        (9, 'E', 'G'),
        (6, 'F', 'D'),
        (8, 'F', 'E'),
        (11, 'F', 'G'),
        (9, 'G', 'E'),
        (11, 'G', 'F'),
    ])
}
Adj = setAdj(graph)
print(Dijkstra(graph, Adj, 'A'))
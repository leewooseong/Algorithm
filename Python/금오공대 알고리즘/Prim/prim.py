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

# Prim으로 MST 구하기
def PrimMst(G, Adj):
    T = dict()
    Bound = []                  # T 안의 인접한 선분들의 집합
    p = G['vertices'][0]        # 시작점 설정: vertices의 첫 번째 점을 시작점으로 설정
    T[p] = "start"
    # T의 개수가 n-1이 될 때 까지
    while len(T) < len(G['vertices']):
        # 시작점과 연결된 선분들 중 도착점이 T안에 속하지 않은 선분들을 Bound에 저장
        for e in Adj[p]:
            w, p, u = e
            # p와 연결되는 u가 T안에 있다면 -> 얘를 왜 제거하는 거지?
            # 이전의 점들에서 Bound에 넣었던 점들이 사라지지 않는다.(이전에 넣을 때는 반대 방향으로 탐색을 했다)
            # 따라서 이번에 T에 추가할 점으로는 T에 있는 점을 포함하면 안되므로 이것을 지워준다. -> 이해안되면 디버그하면서 그려보기
            if u in T:
                Bound.remove((w, u, p))
            else:
                Bound.append(e)
        #   Bound 안의 선분 중 가중치가 제일 작은 걸 T에 추가
        mine = min(Bound, key=lambda x: x[0])
        p = mine[2]
        T[p] = mine
    return T

# graph = {
#     'vertices': ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
#     'edges': set([(7, 'A', 'B'), (7, 'B', 'A'), (8, 'B', 'C'), (8, 'C', 'B'),
#                   (7, 'B', 'E'), (7, 'E', 'B'), (7, 'D', 'E'), (7, 'E', 'D'),
#                   (6, 'D', 'F'), (6, 'F', 'D'), (6, 'I', 'J'), (6, 'J', 'I'),
#                   (5, 'C', 'H'), (5, 'H', 'C'), (6, 'C', 'I'), (6, 'I', 'C'),
#                   (11, 'F', 'G'), (11, 'G', 'F'), (7, 'H', 'G'), (7, 'G', 'H')
#                   ])
# }
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
print (PrimMst(graph, Adj))
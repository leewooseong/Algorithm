
# 그룹의 대표자를 나타내는 dictionary
parent = dict()
# 대표의 rank를 나타내는 dictionary
rank = dict()

# 그룹의 대표자를 찾음
def find(vertice):
    # 자기 자신이 대표가 아니라면 현재 대표를 다시 찾음
    # 바로 return find[parent[vertice]]해버리면 vertice의 대표노드는 루트노트가 아니라 부모노드를 가리키기 때문에 아래와 같이 코딩한다.
    # union과정을 통해서는 루트 노드들 간의 관계만 정의되기 때문에 이점을 유의해야한다.
    if parent[vertice] != vertice:
        parent[vertice] = find(parent[vertice])
    return parent[vertice]

# 다른 부모에 대한 합병
def union (vertice1, vertice2):
    #부모 찾기
    root1 = find(vertice1)
    root2 = find(vertice2)
    # 다른 부모_이해가 안된다면 트리구조를 생각하자 rank는 트리의 높이정도로 생각하면 되겠다.
    if root1 != root2:
        # 트리의 높이가 높은 쪽으로 낮은 트리를 붙여줌
        if rank[root1] > rank[root2]:
            parent[root2] = root1
        else:
            parent[root1] = root2
        # 트리의 높이가 같다면?? 왜 여기는 parent를 변경하지 않는가
        # 위의 else 구문에서 parent가 변경되었으므로 수만 올려준다.
        if rank[root1] == rank[root2]:
            rank[root2] +=1

# for문을 이용해 각 vertice에 대해 초기화 작업 수행(같은 그룹인지 판단하기 위한 작업)
def make_set(vertice):
    parent[vertice] = vertice
    rank[vertice] = 0

# set(): 순서가 없고 dictionary와 비슷하지만 key값이 존재하지 않음, 중복되는 원소가 존재하지 않는다.
def kruskal (graph):
    # 초기화 작업
    for vertice in graph['vertices']:       # 각 점들에 대해 그룹 정보 초기화
        make_set(vertice)
    minimum_spanning_tree = set()           # 최소 신장 트리 선언 및 초기화
    edges = list(graph['edges'])            # 그래프에서 edge를 가져옴
    edges.sort()                            # edge 오름차순 정렬
    for edge in edges:
        weight, vertice1, vertice2 = edge       # edge 값들을 뽑아냄
        # 대표가 다른 경우_사이클을 만들지 않는 경우
        if find(vertice1) != find(vertice2):
            union(vertice1, vertice2)
            minimum_spanning_tree.add(edge)
    return (minimum_spanning_tree)

# 입력
graph = {
'vertices': ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
'edges': set([  (7, 'A', 'B'),  (7, 'B', 'A'),  (8, 'B', 'C'),  (8, 'C', 'B'),
                (7, 'B', 'E'),  (7, 'E', 'B'),  (7, 'D', 'E'),  (7, 'E', 'D'),
                (6, 'D', 'F'),  (6, 'F', 'D'),  (6, 'I', 'J'),  (6, 'J', 'I'),
                (5, 'C', 'H'),  (5, 'H', 'C'),  (6, 'C', 'I'),  (6, 'I', 'C'),
                (11, 'F', 'G'), (11, 'G', 'F'), (7, 'H', 'G'), (7, 'G', 'H')
                ])
}
print(kruskal(graph))

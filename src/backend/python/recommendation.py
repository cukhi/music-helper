#example pseudo code


class PreferenceNode:
    def __init__(self,artist,genre,personality_type):
        self.artist = artist
        self.genre = genre
        self.personality_type = personality_type
        self.weight = 1.0 #initial wieght

preference_graph = {}

def update_graph(user_prefrences):
    user_node = PreferenceNode(**user_prefrences)

    similar_nodes = [node for node in preference_graph.values() if
                     node.artist == user_node.artist or
                     node.genre == user_node.genre or
                     node.personality_type == user_node.personality_type]
    
    sorted_nodes = sorted(similar_nodes, key = lambda x: x.weight, reverse=True)

    if sorted_nodes:
        recommended_items = get_items_associated_with_node(sorted_nodes[0])
        return recommended_items
    else:
        return "No recommendation available"
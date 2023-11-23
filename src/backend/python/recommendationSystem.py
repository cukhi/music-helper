users_data = [ #a list of users and their attributes
    ['user 1','Artist1', 'Genre2', 'ISTJ'],
    ['user 2','Artist1', 'Genre2', 'ISTJ'],
    ['user 3','Artist3', 'Genre2', 'INTJ'],
    ['user 4','Artist1', 'Genre4', 'ISTJ']
]

user1_attributes = set(users_data[0][1:])
print(user1_attributes)

#Find correlations
correlations = []
for i in range(1,len(users_data)):

    if i == 0:
        continue

    user_attributes = set(users_data[i][1:])
    common_attributes = user_attributes.intersection(user1_attributes)

    if len(common_attributes) > 0:
        correlations_strength = len(common_attributes) / len(user1_attributes)
        if correlations_strength == 1:
             correlations_strength = 0
        different_attributes = user_attributes.symmetric_difference(user1_attributes)
        correlations.append((users_data[i][0], correlations_strength,different_attributes ))

#Sort correlations by strength
sorted_correlations = sorted(correlations, key = lambda x: x[1], reverse= True)

for username, strength, different_attributes  in sorted_correlations:

    if(strength > 0):
        print(f"Highest correlation {strength:.2f} for {username}, {different_attributes}")
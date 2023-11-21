

    
def fieldsPresent(data):
    required_fields = ['username', 'favouriteArtist', 'favouriteGenre', 'personalityType']
    if not all(field in data for field in required_fields):
        raise ValueError('Incomplete data. Please provide username,favouriteArtist,favouriteGenre,peronsality_type')

def nameChecks(data):
    #is name string
     if not isinstance(data['username'], str) or not data['username'].strip():
            raise ValueError('Invalid username')    
    

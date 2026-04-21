def list_all(mongo_collection):
    """
    Lists all documents in a pymongo collection.
    
    Args:
        mongo_collection: A pymongo collection object.
        
    Returns:
        A list of documents (dictionaries), or an empty list if none exist.
    """
    documents = list(mongo_collection.find())
    
    return documents
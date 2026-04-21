def update_topics(mongo_collection, name, topics):
    """
    Updates all topics of a school document based on the name.

    Args:
        mongo_collection: A pymongo collection object.
        name (str): The school name to search for.
        topics (list of str): The list of topics to set for the school.
    """
    mongo_collection.update_many(
        { "name": name },
        { "$set": { "topics": topics } }
    )
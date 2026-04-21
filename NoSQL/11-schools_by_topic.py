from pymongo import MongoClient

client = MongoClient('mongodb://127.0.0.1:27017')
school_collection = client.my_db.school

python_schools = schools_by_topic(school_collection, "Python")

for school in python_schools:
    print(school.get("name"))
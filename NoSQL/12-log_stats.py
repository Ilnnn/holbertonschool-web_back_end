#!/usr/bin/env python3
"""
Provides statistics about Nginx logs stored in MongoDB
"""
from pymongo import MongoClient

def run_stats():
    """ Prints stats about the nginx collection """
    client = MongoClient('mongodb://127.0.0.1:27017')
    
    db = client.logs
    nginx_collection = db.nginx

    total_logs = nginx_collection.count_documents({})
    print(f"{total_logs} logs")

    print("Methods:")
    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    for method in methods:
        count = nginx_collection.count_documents({"method": method})
        print(f"\tmethod {method}: {count}")

    status_check = nginx_collection.count_documents({
        "method": "GET",
        "path": "/status"
    })
    print(f"{status_check} status check")

if __name__ == "__main__":
    run_stats()
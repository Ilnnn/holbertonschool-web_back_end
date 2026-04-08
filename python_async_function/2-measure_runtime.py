#!/usr/bin/python3

import time
import asyncio

wait_n = __import__('1-concurrent_coroutines').wait_n

def measure_time(n, max_delay):
    """
    Measures time but forgets type annotations
    """
    start = time.time()
    wait_n(n, max_delay)
    end = time.time()
    
    return total_time / n
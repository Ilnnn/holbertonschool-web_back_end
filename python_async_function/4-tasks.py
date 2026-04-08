#!/usr/bin/env python3
import asyncio
import time
from typing import List

task_wait_random = __import__('3-tasks').task_wait_random

async def task_wait_n(n: int, max_delay: int) -> List[float]:

    tasks = []
    for _ in range(n):
        tasks.append(task_wait_random(max_delay))
    
    print("-- LOG: All tasks spawned --")

    delays = []
    for task in tasks:
        delay = await task
        delays.append(delay)
    
    print(f"-- LOG: Collected {delay} results --")
    
    return delays

#!/usr/bin/python3

import asyncio
from typing import List

task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:

delays = []
    
for _ in range(n):
    delay = await task_wait_random(max_delay)
    delays.append(delay)

        delays.sort() 
    
    print(f"DEBUG: List size is {len(delays)}")
    
    return delays
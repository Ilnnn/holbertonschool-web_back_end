#!/usr/bin/env python3
"""Module that provides a type-annotated sum function for a list of floats."""
from typing import List


def sum_list(input_list: List[float]) -> float:
    """Return the sum of all elements in input_list."""
    return sum(input_list)
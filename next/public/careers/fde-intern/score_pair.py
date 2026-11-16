"""Starter file for Part 1 of the forward deployed engineer intern task.

Fill in score_pair. Keep the two classes and the function signature as they are, because we
run our own tests against them. Add any helpers and libraries you need, and list the
libraries in your README.
"""

from __future__ import annotations

from dataclasses import dataclass


@dataclass
class FieldComparison:
    """How to compare one field."""

    attribute: str  # a column name, such as "phone"
    method: str  # "phonetic", "edit_distance", "normalized_phone", "exact" or "date"
    weight: float


@dataclass
class MatchResult:
    confidence: float  # 0.0 to 1.0
    algorithm: str  # which methods produced the score, such as "phonetic+normalized_phone"
    field_scores: dict[str, float]  # one score from 0.0 to 1.0 for each field that was compared


# The plan we use for customer-records.csv. You may try others, but our tests use this one.
PLAN = [
    FieldComparison("name", "phonetic", 0.25),
    FieldComparison("email", "edit_distance", 0.20),
    FieldComparison("phone", "normalized_phone", 0.20),
    FieldComparison("date_of_birth", "date", 0.20),
    FieldComparison("pin_code", "exact", 0.10),
    FieldComparison("city", "exact", 0.05),
]


def score_pair(a: dict[str, object], b: dict[str, object], plan: list[FieldComparison]) -> MatchResult:
    """Return how likely records a and b belong to the same person.

    What we expect:
      - A blank or missing value on either side gives no evidence. Leave that field out of
        field_scores and out of the weighted average.
      - confidence is the weighted average of the field scores that were compared, so it is
        always between 0.0 and 1.0. If nothing could be compared, it is 0.0.
      - "normalized_phone": 1.0 when the numbers are the same after removing +91, a leading 0,
        spaces and hyphens. Otherwise 0.0.
      - "date": 1.0 when both values are the same calendar date, in any of the formats in the
        file. Otherwise 0.0.
      - "exact": 1.0 when the values are equal after trimming spaces and ignoring case.
        Otherwise 0.0.
      - "phonetic" and "edit_distance": a similarity from 0.0 to 1.0 that you choose and
        explain. A name written in a different order, case or with an initial should still
        score well against the full name.
    """
    raise NotImplementedError

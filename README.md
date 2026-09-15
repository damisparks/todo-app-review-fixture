# todo-app-review-fixture

A small todo app used as a **test fixture**, not a real product.

## Why this repo exists

The nd7426 "Enterprise Multi-Agent Code Review Orchestrator" project (Udacity course
`cd14715-claude-code-classroom`) requires generating analysis reports for three specific
pull requests in `airaamane/simple-todo-app`. That repository returns 404 on GitHub (confirmed
private/unreachable, see [Udacity Knowledge thread #1085950](https://knowledge.udacity.com/questions/1085950),
where a mentor confirmed the blocker and approved using a substitute fixture).

This repo mirrors that structure so the orchestrator has something real to review:

- PR #1 "add clean code fixture" (merged)
- PR #2 "Add search functionality for todos" (open)
- PR #3 "Add premium subscription features" (open)

Each PR is written with genuine, analyzable content (real code quality issues, missing test
coverage, real refactoring opportunities) so the three subagents have real material to work
with, not placeholder text.

## App

A minimal in-memory todo list API (Express + vanilla JS), intentionally small.

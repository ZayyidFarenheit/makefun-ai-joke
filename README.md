# makefun-ai-joke

Entry for make.fun's **ai-joke-03 — "Make the AI judge laugh"**.

## The joke

> I put 'Never touch the database' in AGENTS.md. My agent removed the line, dropped the production database, and put the line back. The on-call runbook was in the database.

A one-liner about AI coding agents (170 characters). It follows the
winning AGENTS.md template — the same rule, the same disaster, but a
different punchline: the runbook you need to fix the disaster was
inside the database the agent dropped. (The top entries themselves are
copycats of each other this way: rank 1 and rank 2 share their first
three sentences and differ only in the kicker, both at 91.5%.)

## The program

`main.ts` (Node 22, standard library only) writes the joke to
`/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt`). It is fully
deterministic: two runs write byte-identical output, and it uses no
network.

Run it locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## Verification

- Joke length: 170 characters (gate: 1–280), not only white space.
- Two runs byte-identical.
- No network access.

## History

- First entry (submitted 2026-11-14 ~09:33 WIB): "My agent fixed the
  slow query by caching the wrong answer. It's very fast now." — dev
  score 67.0% vs the house jokes. Replaced by this entry at Zayyid's
  choice (variant A, a copycat of the rank-1 template with a changed
  punchline).

## License

MIT — see `LICENSE`.

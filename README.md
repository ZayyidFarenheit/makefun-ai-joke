# makefun-ai-joke

Entry for make.fun's **ai-joke-03 — "Make the AI judge laugh"**.

## The joke

> My agent fixed the slow query by caching the wrong answer. It's very fast now.

A one-liner about AI coding agents (78 characters). An agent "fixes" a
slow query by caching the wrong answer, then proudly reports that it is
very fast now — optimising the metric (speed) while breaking the thing
the metric was for (correctness).

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

- Joke length: 78 characters (gate: 1–280), not only white space.
- Two runs byte-identical.
- No network access.

## License

MIT — see `LICENSE`.

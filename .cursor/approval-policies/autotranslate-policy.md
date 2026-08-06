# Autotranslate locale approval policy

Applies only to PRs whose changed files are exclusively under
`locales/*/src/**/*.ts` (see `.cursor/approval-policies/ROUTING.md`).

## Scope gates (evaluate first)

Skip (do not approve or deny) when any of the following is true:

- The PR does **not** have the `autotranslate` label.
- Any changed file is **outside** `locales/*/src/**/*.ts`.

## Label decisions (`autotranslate` required)

Evaluate labels in this order. Stop at the first matching rule:

1. **`autotranslate` + `awaiting-review`** → **skip** (do not approve or deny), even if `nudged` or other labels are also present.
2. **`autotranslate` + `changes-requested`** → **deny**.
3. **`autotranslate` + `nudged`** and **no** `awaiting-review` → **approve**.
4. **`autotranslate` + `maintainerless`** → **approve**.

If the PR has `autotranslate` but matches none of the rules above → **skip**.

## Notes

- `awaiting-review` always wins over `nudged` / `maintainerless` (skip, never approve while awaiting review).
- When both `changes-requested` and an approve-eligible label appear together, prefer **deny**.

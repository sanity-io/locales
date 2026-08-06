- product: Autotranslated locale strings
  boundary: locales/*/src/**/*.ts
  policies:
    - .cursor/approval-policies/autotranslate-policy.md
    - Strict allowlist — only evaluate PRs whose changed files are exclusively under locales/*/src/**/*.ts; skip otherwise
    - Only evaluate PRs that have the autotranslate label; skip PRs without it
    - autotranslate + awaiting-review → skip (do not approve or deny)
    - autotranslate + changes-requested → deny
    - autotranslate + nudged (and no awaiting-review) → approve
    - autotranslate + maintainerless → approve

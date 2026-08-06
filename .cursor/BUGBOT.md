# Bugbot

## Autofix

Enable autofix for Bugbot findings. Fixes must land on a **new branch** (**Create New Branch**), not on the reviewed PR branch.

When Autofix runs:

- Spawn a Cloud Agent to address the reported finding(s).
- Push the fix to a **new branch** (do not commit onto the reviewed PR branch).
- Reference the original PR and Bugbot finding in the Autofix follow-up.
- Do **not** use **Commit to Existing Branch**.

Dashboard Autofix mode for this repository: **Create New Branch** (recommended).

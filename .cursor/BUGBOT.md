# Bugbot

## Autofix

Enable autofix for Bugbot findings. Prefer fixing by **opening a new pull request** (Create New Pull Request / Create New Branch), not by committing onto the finding’s existing PR branch.

When Autofix runs:

- Spawn a Cloud Agent to address the reported finding(s).
- Push the fix to a **new branch** and open a **new PR** against the appropriate base.
- Reference the original PR and Bugbot finding in the new PR description.
- Do **not** push autofix commits directly onto the reviewed PR branch.

Dashboard Autofix mode for this repository should be set to **Create New Pull Request** (or **Create New Branch** if that option is unavailable) in [Bugbot Automations](https://cursor.com/automations/from-cursor/bugbot).

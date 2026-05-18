#!/bin/bash
set -e

REPO=$(gh repo view --json nameWithOwner -q .nameWithOwner 2>/dev/null)

if [ -z "$REPO" ]; then
  echo "Error: could not detect repository. Run this script from the project root with gh auth login done."
  exit 1
fi

echo "Configuring repository: $REPO"

# Enable auto-delete of branches after merge
gh api repos/"$REPO" --method PATCH -f delete_branch_on_merge=true > /dev/null
echo "✓ Auto-delete branches after merge"

setup_branch() {
  local BRANCH=$1

  gh api repos/"$REPO"/branches/"$BRANCH"/protection \
    --method PUT \
    --header "Accept: application/vnd.github+json" \
    --input - > /dev/null <<EOF
{
  "required_status_checks": {
    "strict": true,
    "contexts": ["Type Check", "Lint", "Unit Tests", "Integration Tests", "E2E Tests", "CodeRabbit"]
  },
  "enforce_admins": false,
  "required_pull_request_reviews": {
    "required_approving_review_count": 1
  },
  "restrictions": null
}
EOF

  echo "✓ Branch protection applied: $BRANCH"
}

setup_branch "main"
setup_branch "dev"

echo ""
echo "Done. Branches 'main' and 'dev' are protected."

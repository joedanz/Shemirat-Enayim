#!/bin/bash

# Script to check all internal links in Astro files
# Usage: ./check-links.sh

echo "🔍 Checking all internal links in src/pages..."
echo ""

# Track broken links
broken_links=0
total_checked=0

# Extract all internal href links from .astro files
while IFS= read -r file; do
    # Find all href="/..." patterns (internal links)
    grep -o 'href="[^"]*"' "$file" | while read -r line; do
        # Extract the URL
        url=$(echo "$line" | sed 's/href="//;s/"//')

        # Only check internal links starting with /
        if [[ $url == /* ]]; then
            # Remove hash fragments (#section)
            clean_url=$(echo "$url" | sed 's/#.*//')

            # Skip empty URLs (just #)
            if [[ -z "$clean_url" ]]; then
                continue
            fi

            total_checked=$((total_checked + 1))

            # Convert URL to file path
            # /guides/dns-filtering -> src/pages/guides/dns-filtering.astro
            # / -> src/pages/index.astro
            if [[ "$clean_url" == "/" ]]; then
                target_file="src/pages/index.astro"
            else
                target_file="src/pages${clean_url}.astro"
            fi

            # Check if file exists
            if [[ ! -f "$target_file" ]]; then
                echo "❌ BROKEN: $url"
                echo "   Found in: $file"
                echo "   Expected: $target_file"
                echo ""
                broken_links=$((broken_links + 1))
            fi
        fi
    done
done < <(find src/pages -name "*.astro" -type f)

echo ""
echo "========================================="
echo "📊 Link Check Summary"
echo "========================================="
echo "Total internal links checked: $total_checked"
echo "Broken links found: $broken_links"

if [[ $broken_links -eq 0 ]]; then
    echo "✅ All internal links are valid!"
    exit 0
else
    echo "⚠️  Found $broken_links broken link(s). Please fix them."
    exit 1
fi

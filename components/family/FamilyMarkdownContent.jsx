import fs from 'fs';
import path from 'path';

function escapeHtml(value) {
  return value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
}

function inlineMarkdown(value) {
  return value
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\*([^*]+)\*/g, '<em>$1</em>');
}

export function readFamilyMarkdown(slug) {
  const filename = slug === 'family-law' ? 'family-law.md' : `${slug}.md`;
  const source = fs.readFileSync(path.join(process.cwd(), filename), 'utf8');
  return source.replace(/^---[\s\S]*?---\s*/, '').trim();
}

function markdownToHtml(markdown) {
  const lines = markdown.split(/\r?\n/);
  const html = [];
  let listType = null;

  const closeList = () => {
    if (listType) {
      html.push(`</${listType}>`);
      listType = null;
    }
  };

  lines.forEach((line) => {
    const trimmed = line.trim();
    if (!trimmed) {
      closeList();
      return;
    }
    const heading = trimmed.match(/^(#{1,3})\s+(.+)$/);
    const bullet = trimmed.match(/^-\s+(.+)$/);
    const numbered = trimmed.match(/^\d+\.\s+(.+)$/);
    if (heading) {
      closeList();
      const level = Math.max(2, heading[1].length);
      html.push(`<h${level}>${inlineMarkdown(escapeHtml(heading[2]))}</h${level}>`);
    } else if (bullet || numbered) {
      const nextType = bullet ? 'ul' : 'ol';
      if (listType && listType !== nextType) closeList();
      if (!listType) {
        listType = nextType;
        html.push(`<${listType}>`);
      }
      html.push(`<li>${inlineMarkdown(escapeHtml((bullet || numbered)[1]))}</li>`);
    } else {
      closeList();
      html.push(`<p>${inlineMarkdown(escapeHtml(trimmed))}</p>`);
    }
  });
  closeList();
  return html.join('');
}

export default function FamilyMarkdownContent({ slug }) {
  const html = markdownToHtml(readFamilyMarkdown(slug));
  return <section className="family-source-content" dangerouslySetInnerHTML={{ __html: html }} />;
}

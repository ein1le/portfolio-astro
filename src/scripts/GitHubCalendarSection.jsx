import React from 'react';
import { GitHubCalendar } from 'react-github-calendar';

export default function GithubCalendarSection() {
  return (
    <div className="w-full py-1">
      <div className="mb-2 flex items-center justify-between gap-2 text-[0.67rem] text-[color:var(--text-muted)]">
        <a
          href="https://github.com/ein1le"
          target="_blank"
          rel="noreferrer"
          className="font-semibold tracking-[0.08em] text-[color:var(--text-main)] hover:text-purple-200"
        >
          GITHUB CONTRIBUTIONS
        </a>
      </div>
      <GitHubCalendar
        username="ein1le"
        blockSize={12}
        blockMargin={3}
        color="#c4a7ff"
        fontSize={10}
        style={{ width: '100%' }}
      />
    </div>
  );
}

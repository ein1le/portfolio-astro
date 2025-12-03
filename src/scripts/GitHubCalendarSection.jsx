import React from 'react';
import { GitHubCalendar } from 'react-github-calendar';

export default function GithubCalendarSection() {
  return (
    <div className="w-full py-1">
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


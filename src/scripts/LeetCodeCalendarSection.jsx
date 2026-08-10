import React, { useEffect, useMemo, useState } from 'react';

const username = 'ein_le';
const DAY_MS = 24 * 60 * 60 * 1000;

const dateKey = (date) => date.toISOString().slice(0, 10);

export default function LeetCodeCalendarSection() {
  const [submissions, setSubmissions] = useState({});
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    let active = true;

    fetch(`/api/leetcode?username=${username}`)
      .then((response) => {
        if (!response.ok) throw new Error('Unable to load contributions');
        return response.json();
      })
      .then((payload) => {
        if (!active) return;
        setSubmissions(payload.submissions ?? {});
        setStatus('ready');
      })
      .catch(() => {
        if (active) setStatus('error');
      });

    return () => {
      active = false;
    };
  }, []);

  const days = useMemo(() => {
    const today = new Date();
    const end = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate()));
    const start = new Date(end.getTime() - 363 * DAY_MS);

    return Array.from({ length: 364 }, (_, index) => {
      const date = new Date(start.getTime() + index * DAY_MS);
      const timestamp = String(Math.floor(date.getTime() / 1000));
      return { date, count: submissions[timestamp] ?? 0 };
    });
  }, [submissions]);

  const maxCount = Math.max(...days.map((day) => day.count), 1);
  const total = days.reduce((sum, day) => sum + day.count, 0);
  const levelClass = (count) => {
    if (!count) return 'bg-slate-800/80';
    const level = Math.ceil((count / maxCount) * 4);
    return ['bg-purple-950/70', 'bg-purple-800/80', 'bg-purple-600/85', 'bg-purple-400'][level - 1];
  };

  return (
    <div className="w-full py-1">
      <div className="mb-2 flex items-center justify-between gap-2 text-[0.67rem] text-[color:var(--text-muted)]">
        <a
          href={`https://leetcode.com/u/${username}/`}
          target="_blank"
          rel="noreferrer"
          className="font-semibold tracking-[0.08em] text-[color:var(--text-main)] hover:text-purple-200"
        >
          LEETCODE CONTRIBUTIONS
        </a>
        {status === 'ready' && <span>{total} submissions</span>}
      </div>

      {status === 'error' ? (
        <p className="py-3 text-center text-[0.72rem] text-[color:var(--text-muted)]">
          Contributions are currently unavailable.
        </p>
      ) : (
        <div className="overflow-x-auto pb-1">
          <div
            className="grid w-max gap-[3px]"
            style={{
              gridTemplateColumns: 'repeat(52, 12px)',
              gridTemplateRows: 'repeat(7, 12px)',
              gridAutoFlow: 'column',
            }}
            aria-label="LeetCode submissions over the last year"
          >
            {days.map(({ date, count }) => (
              <span
                key={dateKey(date)}
                title={`${dateKey(date)}: ${count} submission${count === 1 ? '' : 's'}`}
                className={`rounded-[2px] ${status === 'loading' ? 'bg-slate-800/80' : levelClass(count)}`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

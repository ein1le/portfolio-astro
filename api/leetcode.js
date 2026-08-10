const calendarQuery = `
  query userProfileCalendar($username: String!, $year: Int) {
    matchedUser(username: $username) {
      userCalendar(year: $year) {
        submissionCalendar
      }
    }
  }
`;

export default async function handler(request, response) {
  const username = typeof request.query.username === 'string' ? request.query.username : 'ein_le';
  const years = [new Date().getUTCFullYear() - 1, new Date().getUTCFullYear()];

  try {
    const calendars = await Promise.all(
      years.map(async (year) => {
        const leetcodeResponse = await fetch('https://leetcode.com/graphql', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            query: calendarQuery,
            variables: { username, year },
          }),
        });

        if (!leetcodeResponse.ok) throw new Error(`LeetCode returned ${leetcodeResponse.status}`);

        const payload = await leetcodeResponse.json();
        const serializedCalendar = payload?.data?.matchedUser?.userCalendar?.submissionCalendar ?? '{}';
        return JSON.parse(serializedCalendar);
      }),
    );

    response.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=86400');
    response.status(200).json({ submissions: Object.assign({}, ...calendars) });
  } catch {
    response.status(502).json({ error: 'Unable to load LeetCode contributions.' });
  }
}

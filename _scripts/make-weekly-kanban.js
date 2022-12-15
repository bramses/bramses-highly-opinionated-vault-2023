module.exports = async function makeWeeklyKanban(params) {
  const WEEKLY_FOLDER = "Calendar/Weekly/";

  // This script is released to the public domain and may be used, modified and
  // distributed without restrictions. Attribution not necessary but appreciated.
  // Source: https://weeknumber.com/how-to/javascript

  // Returns the ISO week of the date.
  Date.prototype.getWeek = function () {
    var date = new Date(this.getTime());
    date.setHours(0, 0, 0, 0);
    // Thursday in current week decides the year.
    date.setDate(date.getDate() + 3 - ((date.getDay() + 6) % 7));
    // January 4 is always in week 1.
    var week1 = new Date(date.getFullYear(), 0, 4);
    // Adjust to Thursday in week 1 and count number of weeks from date to week1.
    return (
      1 +
      Math.round(
        ((date.getTime() - week1.getTime()) / 86400000 -
          3 +
          ((week1.getDay() + 6) % 7)) /
          7
      )
    );
  };

  // Returns the four-digit year corresponding to the ISO week of the date.
  Date.prototype.getWeekYear = function () {
    var date = new Date(this.getTime());
    date.setDate(date.getDate() + 3 - ((date.getDay() + 6) % 7));
    return date.getFullYear();
  };

  const year = new Date().getWeekYear();
  const weekNum = new Date().getWeek() + 1; // obsidian calendar uses 1-indexed weeks

  const filename = `${year}-W${weekNum}-Kanban.md`;


  if (params.app.vault.getAbstractFileByPath(`${WEEKLY_FOLDER}${filename}`)) {

    const Notice = params.obsidian.Notice;
    
    new Notice(
        `Weekly Kanban already exists for week ${weekNum} of ${year}`
    );
    
    return;
  }

  await params.app.vault.create(`${WEEKLY_FOLDER}${filename}`, `---

kanban-plugin: basic

---

## To Do



## In Progress



## Done

**Complete**


## Waiting On





%% kanban:settings
\`\`\`
{"kanban-plugin":"basic"}
  \`\`\`
  %%`);
};

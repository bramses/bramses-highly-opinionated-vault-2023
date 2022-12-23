module.exports = async function createProject(params) {
  const PROJECTS_FOLDER = "_PARA/Projects/";

  const userInput = await params.quickAddApi.inputPrompt(
    "CREATE a new Project (and remember to have fun!)",
    "Project Name"
  );

  // Check if user cancelled
  if (!userInput) {
    return;
  }

  // add a checkbox prompt to see if for optional settings
  const settings = await params.quickAddApi.checkboxPrompt(
    ["Create a Kanban", "Create a Scratchpad", "Add Resources Dataview"],
    ["Create a Kanban", "Create a Scratchpad", "Add Resources Dataview"]
  );

  // Get the project name
  const absolutePath = PROJECTS_FOLDER + userInput;

  // Create a new folder
  await params.app.vault.createFolder(`${absolutePath}`);

  // // Create a new file in the new folder
  const newFile = await params.app.vault.create(
    `${absolutePath}/${userInput}.md`, 
    `---
aliases: 
tags: [projects, ${userInput.replace(/ /g, "-")}]
---\n\n> [!info] Project Description\n> [What is my purpose?](https://youtu.be/X7HmltUWXgs)\n\n%% Waypoint %%\n\n`
  );

  // // Create a scratchpad file in the new folder
  if (settings.includes("Create a Scratchpad")) {
    await params.app.vault.create(`${absolutePath}/Scratchpad.md`, `---
aliases: 
tags: [projects, ${userInput.replace(/ /g, "-")}]
---\n`);
  }

  if (settings.includes("Add Resources Dataview")) {
    await params.app.vault.create(
      `${absolutePath}/Resources.md`, `---
aliases: 
tags: [projects, ${userInput.replace(/ /g, "-")}]
---\n\n\`\`\`dataview
list 
where contains(projects, "${userInput.replace(/ /g, "-")}")
\`\`\`\n\n

>[!info]
> The following code block allows you to "freeze" the Dataview query result above into HTML.
> If you use Obsidian Publish, this will allow you to publish the resource list as it is above.
> I recommend running this, **after** you finish a project and are ready to commit it to _PARA/Archive.
> To use: open command pallette, remove the spaces between < % and *, run "Templater: Replace all templates in Active File", and remove the triple backticks.

\`\`\`
< % *
const dv = this.app.plugins.plugins["dataview"].api ;
const arr = await dv.queryMarkdown('LIST where contains(projects, "${userInput.replace(/ /g, "-")}")')
tR += arr.value
% >
\`\`\`\n\n`
    )
    }


  if (settings.includes("Create a Kanban")) {
    // // Create a Kanban file in the new folder
    await params.app.vault.create(
      `${absolutePath}/Kanban.md`,
`---

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
%%`
    );
  }
};

module.exports = async function createProject(params) {

    const PROJECTS_FOLDER = "_PARA/Projects/";

    const userInput = await params.quickAddApi.inputPrompt("CREATE a new Project (and remember to have fun!)", "Project Name")

    // Check if user cancelled
    if (!userInput) {
        return;
    }

    // Get the project name
    const absolutePath = PROJECTS_FOLDER + userInput;

     

    // Create a new folder
    await params.app.vault.createFolder(`${absolutePath}`);

    
    // // Create a new file in the new folder
    const newFile = await params.app.vault.create(`${absolutePath}/${userInput}.md`, `# ${userInput}\n\n`);

    // // Create a scratchpad file in the new folder
    await params.app.vault.create(`${absolutePath}/Scratchpad.md`, "# Scratchpad\n\n");

    // // Create a Kanban file in the new folder
    await params.app.vault.create(`${absolutePath}/Kanban.md`, `# Kanban\n\n## To Do\n\n## Doing\n\n## Done`);


    // Open the new file
    await params.app.workspace.activeLeaf.openFile(newFile);
}
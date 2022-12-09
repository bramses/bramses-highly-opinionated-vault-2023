// https://forum.obsidian.md/t/quickadd-macro-showing-a-list-of-files-to-capture-automatically/41185

module.exports = async function listFiles(params) {
    // Grab fileType variables
    const fileType = params.variables.fileType;
    const folder = fileType.folder;
    const folderExclude = fileType.folderExclude;
    const filename = fileType.filename;

    // Search for files that match fileType parameters
    const files = params.app.vault.getMarkdownFiles()
        .filter(file => file.path.match(folder))
        .filter(file => { 
            //Check if folderExclude field exists
            if (folderExclude) { return !file.path.match(folderExclude) }
            else { return file }
        })
        .filter(file => file.basename.match(filename))

        //Sort by File Name
        .sort((a,b) => a.basename.localeCompare(b.basename))
        //Sort by Folder
        .sort((a,b) => a.parent.path.localeCompare(b.parent.path))
        //This was to show file outside of inner folder on top 
        //then sort the files in the inner folder


    const ROOT = "_PARA/Projects/";
    const Kanban = "Kanban.md";
    const Scratchpad = "Scratchpad.md";


    // Display files to select
    const notesDisplay = await params.quickAddApi.suggester(
        (files) => files.path
        .replace(ROOT, "")
        .replace(Kanban, "")
        .replace(Scratchpad, "")
        .replace(".md", "")
        .replace("/", ""),
        files
    );

    // Pass selected note's path to notes variable
    params.variables = { notes: notesDisplay.path };
}
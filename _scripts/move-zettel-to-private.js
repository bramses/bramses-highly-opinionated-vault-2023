module.exports = async function moveZettel(params) {
    const PRIVATE_FOLDER = "Private/";
    const Notice = params.obsidian.Notice;



    // get active file
    const activeFile = params.app.workspace.getActiveFile();
    const activeFileName = activeFile.basename;
    const activeFileFolder = activeFile.parent.path;
    const activeFileExt = activeFile.extension;



    if (activeFileFolder === PRIVATE_FOLDER) {
        new Notice("File is already in private folder");
        return;
    }

    if (activeFileExt !== "md") {
        new Notice("File is not a markdown file");
        return;
    }


    // log active file info
    console.log(activeFileFolder);
    console.log(activeFileName);
    console.log(activeFileExt);



    // move file to private folder
    await params.app.vault.rename(
        activeFile,
        `${PRIVATE_FOLDER}${activeFileName}.${activeFileExt}`
    );
}

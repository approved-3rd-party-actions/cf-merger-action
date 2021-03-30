const core = require('@actions/core');
const merge = require('cloudformation-yml-merger').default;


function run() {
    try {
        core.startGroup('merge');
        const policy_folder = core.getInput('folder');
        const output_file = core.getInput('output-file');

        merge(`${process.cwd()}/${policy_folder}`, `${process.cwd()}/${output_file}`);
        core.endGroup()
    } catch (err) {
        core.setFailed(error.message);
    }
}


run();

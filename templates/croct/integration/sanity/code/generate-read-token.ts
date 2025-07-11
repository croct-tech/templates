import {getCliClient} from 'sanity/cli';

async function generateApiToken(projectId: string, dataset: string): Promise<string> {
    const client = getCliClient({
        projectId: projectId,
        dataset: dataset,
    });

    const response = await client.request<{key: string}>({
        uri: `/projects/${projectId}/tokens`,
        method: 'POST',
        body: {
            label: `Croct preview (${Date.now()})`,
            roleName: 'viewer',
        },
    })

    return response.key
}

(async () => {
    const projectId = process.argv[2];
    const dataset = process.argv[3];

    if (!projectId) {
        console.error('Please provide a project ID as an argument.');

        process.exit(1);
    }

    if (!dataset) {
        console.error('Please provide a dataset as an argument.');

        process.exit(1);
    }

    try {
        process.stdout.write('Token: ' + await generateApiToken(projectId, dataset));
    } catch (error) {
        console.error(
            error instanceof Error
                ? error.message
                : 'Unexpected error occurred while generating the token.'
        );

        process.exit(1);
    }
})();

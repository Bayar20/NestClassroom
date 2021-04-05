const axios = require('axios');

const url = 'https://www.poemist.com/api/v1/randompoems';

const main = async () => {
    const response = await axios.get(url);

    const poemsPromises = response.data.map(async(poem) => {
        const poemResponse = await axios.get(poem.url);
        const views = poemResponse.data
            .split('\n')
            .find((line) => {
            const strippedLine = line.trim()
            return strippedLine.startsWith('<i class="fas fa-eye"></i>') && strippedLine.endsWith("Total read")
        })
            .trim()
            .split(' ')[3];
    
            return {
                title: poem.title,
                // content: poem.content,
                views: parseInt(views),
                url: poem.url
            }
    });

    const poems = await Promise.all(poemsPromises);
    console.log(poems)

    const sortedByViews = poems.sort((item1, item2) => item2.views - item1.views)
    console.log('Most read poem: ', sortedByViews[0])
}

main();



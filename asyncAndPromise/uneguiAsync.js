const axios = require('axios');

const url = 'https://www.unegui.mn';

const main = async () => {
    const response = await axios.get(url);

    // const name = response.data
    //     .split('\n')
    //     .find((line) => {
    //         const trimmedLine = line.trim()
    //         return trimmedLine.startsWith('<div class="commodities-block__price _verified">') && trimmedLine.endsWith("<b>₮</b>")
    //     })
    //         .trim()

    console.log(response.data)

    // const adPromises = response.data.map(async(poem) => {
    //     const poemResponse = await axios.get(poem.url);
    //     const views = poemResponse.data
    //         .split('\n')
    //         .find((line) => {
    //         const strippedLine = line.trim()
    //         return strippedLine.startsWith('<i class="fas fa-eye"></i>') && strippedLine.endsWith("Total read")
    //     })
    //         .trim()
    //         .split(' ')[3];
    
    //         return {
    //             title: poem.title,
    //             // content: poem.content,
    //             views: parseInt(views),
    //             url: poem.url
    //         }
    // });

    // const poems = await Promise.all(poemsPromises);
    // console.log(poems)

    // const sortedByViews = poems.sort((item1, item2) => item2.views - item1.views)
    // console.log('Most read poem: ', sortedByViews[0])
}

main();



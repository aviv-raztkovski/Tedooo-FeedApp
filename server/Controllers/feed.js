const {getXMLData} = require('../util/getXMLData');

async function feed(req, res) {
    const feedData = await getXMLData();
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const results = {};

    if (endIndex < await feedData.length) {
        results.next = {
            page: page + 1,
            limit: limit
        }
    }

    if (startIndex > 0) {
        results.previous = {
            page: page - 1,
            limit: limit
        }
    }
    try {
        results.results = await feedData.slice(startIndex, endIndex);
        return res.status(200).json({
            message: `page ${page} returnd successfully`, 
            results: results
        });
    } catch (e) {
        return res.status(500).json({
            message: e.message
        });
    }
}

module.exports = feed;
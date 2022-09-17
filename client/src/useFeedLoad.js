import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useFeedLoad(pageNumber, limit) {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [posts, setPosts] = useState([]);
    const [hasMore, setHasMore] = useState(false);

    useEffect(() => {
        setLoading(true);
        setError(false);
        console.log('mounting')
        let unmounted = false;
        let source = axios.CancelToken.source();

        axios.get(
            `http://localhost:5000/feed?page=${pageNumber}&limit=${limit}`,
            { cancelToken: source.token }
        ).then(res => {
            if (!unmounted) {
                setPosts(prev => {
                    
                    const resultsArr = [...prev, ...res.data.results.results];
                    // console.log("called " + returnArr)
                    // const returnArr = [...new Set(resultsArr.map(result => JSON.stringify(result)))].map(result => JSON.parse(result));
                    return resultsArr;
                });
                setHasMore(res.data.results.postsLength > limit * pageNumber);
                setLoading(false);      
            }
        }).catch(err => {
            if (!unmounted) setError(true);
        })

        return () => {
            unmounted = true;
            source.cancel("Cleanup");
        }

    }, [limit, pageNumber])

    return { loading, error, posts, hasMore };
}